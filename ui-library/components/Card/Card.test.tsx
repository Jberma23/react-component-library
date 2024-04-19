import { render, screen } from "@testing-library/react";
import { Card } from ".";

describe(Card, () => {
  it("renders with defaults", () => {
    const { asFragment } = render(<Card>test card</Card>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("appends additional classnames", () => {
    render(<Card className="my-test-class">test card</Card>);
    const cardClass = screen.getByText("test card")?.getAttribute("class");
    expect(cardClass).toContain("my-test-class");
  });

  it("sets the tag name via the as prop", () => {
    render(<Card as="aside">test card</Card>);
    const card = screen.getByText("test card");
    expect(card).toHaveProperty("tagName", "ASIDE");
  });

  it("passes down additional props", async () => {
    render(
      <Card as="button" data-qa-id="hooray">
        test card
      </Card>
    );
    const cardAttribute = screen
      .getByRole("button")
      ?.getAttribute("data-qa-id");
    expect(cardAttribute).toEqual("hooray");
  });
});
