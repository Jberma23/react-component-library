import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SkeletonLoader } from "./index";

describe(SkeletonLoader, () => {
  it("renders with defaults", () => {
    const { asFragment } = render(<SkeletonLoader />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("appends classNames correctly", () => {
    render(
      <SkeletonLoader
        containerTestId="addl-classnames"
        className="my-test-class"
      />
    );
    const skeletonClass = screen
      .getByTestId("addl-classnames")
      .children[0].getAttribute("class");
    expect(skeletonClass).toContain("my-test-class");
  });

  it("applies animation preference correctly", () => {
    render(
      <SkeletonLoader
        containerTestId="addl-classnames"
        enableAnimation={false}
      />
    );
    const skeletonClass = screen
      .getByTestId("addl-classnames")
      .children[0].getAttribute("class");
    expect(skeletonClass).not.toContain("motion-safe:animate-pulse");
  });
});
