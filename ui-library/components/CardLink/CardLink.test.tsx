import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CardLink } from ".";

describe(CardLink, () => {
  it("renders with defaults", () => {
    const { asFragment } = render(
      <CardLink href="https://morningconsult.com/">test card</CardLink>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("appends additional classnames", () => {
    render(
      <CardLink className="my-test-class" href="https://morningconsult.com/">
        test card
      </CardLink>
    );
    const cardClass = screen.getByText("test card")?.getAttribute("class");
    expect(cardClass).toContain("my-test-class");
  });

  it("passes down additional props", async () => {
    const mockClickHandler = jest.fn();
    render(
      <CardLink onClick={mockClickHandler} href="https://morningconsult.com/">
        test card
      </CardLink>
    );
    const cardEl = screen.getByRole("link");
    await userEvent.click(cardEl);
    expect(mockClickHandler).toHaveBeenCalled();
  });

  it("can be disabled", () => {
    render(
      <CardLink href="https://morningconsult.com/" disabled>
        test card
      </CardLink>
    );
    const disabledAttr = screen
      .getByText("test card")
      ?.getAttribute("aria-disabled");
    expect(disabledAttr).toEqual("true");
  });
});
