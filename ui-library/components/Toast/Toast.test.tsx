import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toast } from ".";

describe(Toast, () => {
  it("renders with required props", () => {
    const { asFragment } = render(
      <Toast variant="success" dismissHandler={() => {}}>
        Hello World
      </Toast>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a clickable dismiss button", async () => {
    const { asFragment } = render(
      <Toast variant="success" dismissHandler={() => {}}>
        Hello World
      </Toast>
    );
    await userEvent.click(screen.getByTitle("dismiss notification"));
    expect(asFragment()).toMatchSnapshot();
  });

  // it("passes all a11y checks", async () => {
  //   await expect(
  //     <Toast variant="danger" dismissHandler={() => {}}>
  //       Hello World
  //     </Toast>
  //   ).toBeA11yWhenRendered();
  // });
});
