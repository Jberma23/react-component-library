import { render } from "@testing-library/react";
import { Pill } from ".";

describe(Pill, () => {
  it("renders with children and defaults", () => {
    const { asFragment } = render(<Pill>Hot Dogs</Pill>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("passes all a11y checks", () => {
    expect(<Pill>Kielbasa</Pill>).toBeA11yWhenRendered();
  });
});
