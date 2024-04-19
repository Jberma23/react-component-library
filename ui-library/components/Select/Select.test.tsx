import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Option, Select } from ".";

const testItem1 = { id: 0, label: "item 1 label" };
const testItem2 = { id: 1, label: "item 2 label" };

describe("Select", () => {
  it("renders with label", () => {
    render(
      <Select label="wow, a label!">
        <Option value={testItem1}>item 1 label</Option>
      </Select>
    );

    expect(screen.getByText("wow, a label!"));
  });

  it("renders options when opened", async () => {
    render(
      <Select label="select label">
        <Option value={testItem1}>option render target</Option>
      </Select>
    );
    expect(screen.queryByText("foo")).not.toBeInTheDocument();
    await userEvent.click(screen.getByLabelText("select label"));
    expect(screen.getByText("option render target")).toBeInTheDocument();
  });

  it("calls onChange when an option is selected", async () => {
    const onChange = jest.fn();
    render(
      <Select label="select label" onChange={onChange} selected={testItem1}>
        <Option data-testid="test-option-1" value={testItem1}>
          stub
        </Option>
        <Option data-testid="test-option-2" value={testItem2}>
          stub
        </Option>
      </Select>
    );

    expect(screen.queryByText("item 1 label")).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText("select label"));
    await userEvent.click(screen.getByTestId("test-option-2"));
    expect(onChange).toHaveBeenCalledWith({
      id: 1,
      label: "item 2 label",
    });
  });

  it("supports a custom renderSelected function", () => {
    render(
      <Select
        renderSelected={() => <div data-testid="test-render" />}
        selected={testItem1}
      >
        <Option data-testid="test-option-1" value={testItem1}>
          stub
        </Option>
      </Select>
    );

    expect(screen.getByTestId("test-render")).toBeInTheDocument();
  });

  it("renders a placeholder", () => {
    render(
      <Select placeholder="Look at me i'm a placeholder!" selected={null}>
        <Option data-testid="test-option-1" value={testItem1}>
          stub
        </Option>
      </Select>
    );
    expect(
      screen.getByText("Look at me i'm a placeholder!")
    ).toBeInTheDocument();
  });

  it("passes all a11y checks when closed", async () => {
    await expect(
      <Select>
        <Option value={testItem1}>item 1 label</Option>
      </Select>
    ).toBeA11yWhenRendered();
  });

  it("passes all a11y checks when open", async () => {
    render(
      <Select label="Foobar">
        <Option value={testItem1}>item 1 label</Option>
      </Select>
    );
    await act(() => userEvent.click(screen.getByLabelText("Foobar")));
    expect(screen.getByText("item 1 label")).toBeInTheDocument();
    expect(document.querySelector("body")).toBeA11y();
  });
});
