import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CardClickable } from ".";

describe(CardClickable, () => {
  it("renders with defaults", () => {
    const { asFragment } = render(<CardClickable>test card</CardClickable>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("appends additional classnames", () => {
    render(<CardClickable className="my-test-class">test card</CardClickable>);
    const cardClass = screen.getByText("test card")?.getAttribute("class");
    expect(cardClass).toContain("my-test-class");
  });

  it("sets the tag name via the as prop", () => {
    render(<CardClickable as="aside">test card</CardClickable>);
    const card = screen.getByText("test card");
    expect(card).toHaveProperty("tagName", "ASIDE");
  });

  it("passes down additional props", async () => {
    const mockClickHandler = jest.fn();
    render(
      <CardClickable as="button" onClick={mockClickHandler}>
        test card
      </CardClickable>
    );
    const cardEl = screen.getByRole("button");
    await userEvent.click(cardEl);
    expect(mockClickHandler).toHaveBeenCalled();
  });

  it("can be disabled when it's a button", async () => {
    const mockClickHandler = jest.fn();
    render(
      <CardClickable as="button" disabled={true} onClick={mockClickHandler}>
        test card
      </CardClickable>
    );
    const cardEl = screen.getByRole("button");
    await userEvent.click(cardEl);
    expect(mockClickHandler).not.toHaveBeenCalled();
    expect(cardEl).toHaveProperty("disabled", true);
  });

  it("can be disabled when it's not a button", async () => {
    const mockClickHandler = jest.fn();
    render(
      <CardClickable as="div" role="button" disabled>
        test card
      </CardClickable>
    );
    const cardEl = screen.getByRole("button");
    await userEvent.click(cardEl);
    expect(mockClickHandler).not.toHaveBeenCalled();
    const disabledAttr = cardEl?.getAttribute("aria-disabled");
    expect(disabledAttr).toEqual("true");
  });
});
