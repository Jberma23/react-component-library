import { render } from "@testing-library/react";
import { Input } from ".";

describe("ui-library/components/Button/Button.tsx", () => {
  it("renders with defaults and no label", () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with defaults and a label", () => {
    const { asFragment } = render(<Input label={"My Label"} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders when disabled", () => {
    const { asFragment } = render(<Input label={"My Label"} disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with fullWidth", () => {
    const { asFragment } = render(<Input label={"My Label"} fullWidth />);
    expect(asFragment()).toMatchSnapshot();
  });
});
