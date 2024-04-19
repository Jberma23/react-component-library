import { render } from "@testing-library/react";
import { Avatar } from ".";
import { axe, toHaveNoViolations } from 'jest-axe';

describe(Avatar, () => {
  it("renders with required props", () => {
    const { asFragment } = render(<Avatar>Hello World</Avatar>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("passes all a11y checks", async () => {
    const { container } = render(<Avatar>Hello World</Avatar>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
