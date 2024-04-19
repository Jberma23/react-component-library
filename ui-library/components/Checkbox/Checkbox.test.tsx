import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from ".";

describe("Checkbox", () => {
  it("renders without a label", () => {
    render(<Checkbox />);
    expect(document.querySelector("label")).toBeNull();
  });

  it("renders with a label", () => {
    render(<Checkbox label="wow" />);
    expect(document.querySelector("label")).toBeInTheDocument();
  });

  it("renders with a label when an ID is passed in", () => {
    render(<Checkbox label="wow" id={"test-id"} />);
    expect(document.getElementById("test-id")).toBeInTheDocument();
  });

  it("handles onChange", async () => {
    const onChange = jest.fn();
    render(
      <Checkbox
        id="checkbox-id"
        onChange={onChange}
        label="click me for a passing test"
      />
    );
    await userEvent.click(screen.getByLabelText("click me for a passing test"));
    expect(onChange).toHaveBeenCalled();
  });
});
