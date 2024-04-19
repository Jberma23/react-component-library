import { render, screen } from "@testing-library/react";
import { ChipLink } from ".";

// Since this is just a sample component, the tests below are not intended to be comprehensive
describe("components/Chip/Chip.tsx", () => {
  it("renders with defaults", () => {
    const { asFragment } = render(<ChipLink href="/foo/bar">Chip</ChipLink>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("appends additional classnames", () => {
    render(
      <ChipLink className={"test-class"} href="/foo/bar">
        Chip
      </ChipLink>
    );
    const ChipClass = screen.getByText("Chip")?.getAttribute("class");
    expect(ChipClass).toContain("test-class");
  });
});
