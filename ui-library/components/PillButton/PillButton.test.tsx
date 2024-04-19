import { render } from "@testing-library/react";
import { PillButton } from ".";

describe(PillButton, () => {
  it("renders with children and defaults", () => {
    const { asFragment } = render(<PillButton>Hot Dogs</PillButton>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("passes all a11y checks", () => {
    expect(<PillButton>Kielbasa!</PillButton>).toBeA11yWhenRendered();
  });
});
