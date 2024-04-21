import { render } from "@testing-library/react";
import { MagnifyingGlassIcon } from "@ui-library/icons";
import { IconButton } from ".";

describe("IconButton", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<IconButton SvgIcon={MagnifyingGlassIcon} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
