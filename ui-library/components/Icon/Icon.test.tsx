import { render, screen } from "@testing-library/react";
import { UserIcon } from "@ui-library/icons";
import { Icon } from "./Icon";

describe(Icon, () => {
  it("renders with defaults", () => {
    const { asFragment } = render(<Icon SvgIcon={UserIcon} title="User" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with non-default size", () => {
    const { asFragment } = render(
      <Icon SvgIcon={UserIcon} size="small" title="User" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with passed class name", () => {
    const testClassName = "test";
    render(
      <Icon
        SvgIcon={UserIcon}
        className={testClassName}
        data-testid="icon-test"
        title="User"
      />
    );
    expect(screen.getByTestId("icon-test")).toHaveClass(testClassName);
  });
});
