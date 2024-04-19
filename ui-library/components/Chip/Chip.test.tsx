import { render, screen } from "@testing-library/react";
import { Chip } from ".";

// Since this is just a sample component, the tests below are not intended to be comprehensive
describe("components/Chip/Chip.tsx", () => {
  it("renders with defaults", () => {
    const { asFragment } = render(<Chip>Chip</Chip>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("appends additional classnames", () => {
    render(<Chip className={"test-class"}>Chip</Chip>);
    const ChipClass = screen.getByText("Chip")?.getAttribute("class");
    expect(ChipClass).toContain("test-class");
  });

  it("sets the tag name via the as prop", () => {
    render(<Chip as="aside">test chip</Chip>);
    const chip = screen.getByText("test chip");
    expect(chip).toHaveProperty("tagName", "ASIDE");
  });
});
