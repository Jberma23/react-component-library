import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Flyout } from "@ui-library/index";

describe(Flyout, () => {
  it("matches the snapshot with defaults", () => {
    const { asFragment } = render(
      <Flyout>
        <div>Hello world</div>
      </Flyout>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches the snapshot when closed", () => {
    const { asFragment } = render(
      <Flyout fillScreen isOpen={false} openFromDirection={"left"}>
        Hello World
      </Flyout>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches the snapshot when open", () => {
    const { asFragment } = render(
      <Flyout fillScreen isOpen openFromDirection={"left"}>
        Hello World
      </Flyout>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("is visible to screen readers when open", () => {
    render(
      <Flyout fillScreen isOpen openFromDirection={"left"}>
        Hello World
      </Flyout>
    );
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("passes a11y checks when open", async () => {
    await expect(
      <Flyout fillScreen isOpen openFromDirection={"left"}>
        Hello World
      </Flyout>
    ).toBeA11yWhenRendered();
  });

  it("will call the onClose method when closeOnOverlayClick is true and user clicks the overlay", async () => {
    const onClose = jest.fn();
    render(
      <Flyout
        fillScreen
        onClose={onClose}
        openFromDirection={"left"}
        closeOnOverlayClick
        showOverlay
      >
        Hello World
      </Flyout>
    );

    await userEvent.click(
      document.querySelector<HTMLElement>(".flyout-overlay")!
    );

    expect(onClose).toHaveBeenCalled();
  });
});
