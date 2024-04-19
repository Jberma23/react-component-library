import { render, screen } from "@testing-library/react";
import { Body } from "./Body";

// Since this is just a sample component, the tests below are not intended to be comprehensive
describe("ui-library/components/Body/Body.tsx", () => {
  it("renders with defaults", () => {
    const { asFragment } = render(<Body>test body</Body>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("appends additional classnames", async () => {
    const { container } = render(
      <Body className={"test-class"}>test body</Body>
    );
    const bodyClass = screen.getByText("test body")?.getAttribute("class");
    expect(bodyClass).toContain("test-class");
    await expect(container).toBeA11y();
  });

  it("passes all a11y checks", async () => {
    const { container } = render(
      <Body className={"test-class"}>test body</Body>
    );
    await expect(container).toBeA11y();
  });
});
