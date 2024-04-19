import { render } from "@testing-library/react";
import { ClampedText } from ".";

const testString = "short king test caption";
describe(ClampedText, () => {
  it("renders with required props", () => {
    const { asFragment } = render(<ClampedText>{testString}</ClampedText>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("passes all a11y checks", () => {
    expect(<ClampedText>{testString}</ClampedText>).toBeA11yWhenRendered();
  });
});
