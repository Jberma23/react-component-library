import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

// Since this is just a sample component, the tests below are not intended to be comprehensive
describe("Button", () => {
  it("renders with defaults", () => {
    const { asFragment } = render(<Button>test button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("appends additional classnames", () => {
    render(<Button className="my-test-class">test button</Button>);
    const buttonClass = screen.getByRole("button")?.getAttribute("class");
    expect(buttonClass).toContain("my-test-class");
  });

  it("can be disabled", () => {
    render(<Button disabled={true}>test button</Button>);
    const buttonEl = screen.getByRole("button");
    const buttonClass = buttonEl?.getAttribute("class");
    expect(buttonEl).toHaveProperty("disabled", true);
    expect(buttonClass).toContain("opacity-40");
  });

  it("passes down additional button props", async () => {
    const mockClickHandler = jest.fn();
    render(<Button onClick={mockClickHandler}>test button</Button>);
    const buttonEl = screen.getByRole("button");
    await userEvent.click(buttonEl);
    expect(mockClickHandler).toHaveBeenCalled();
  });
});
