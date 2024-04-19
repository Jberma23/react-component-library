import { render, screen } from "@testing-library/react";
import { UserIcon } from "@ui-library/icons";
import { Link } from ".";

// Since this is just a sample component, the tests below are not intended to be comprehensive
describe("ui-library/components/Link/Link.tsx", () => {
  it("renders with defaults", () => {
    const { asFragment } = render(
      <Link className="" href="/foo/bar">
        test link
      </Link>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("attaches additional class names", () => {
    render(
      <Link className={"test-class"} href="/foo">
        test link
      </Link>
    );
    const link = screen.getByRole?.("link").getAttribute("class");
    expect(link).toContain("test-class");
  });

  it("attaches href attribute", async () => {
    const { container } = render(<Link href="/foo/bar">test link</Link>);
    expect(screen.getByRole("link")?.getAttribute("href")).toBe("/foo/bar");
    await expect(container).toBeA11y();
  });

  it("prepends start adornment", async () => {
    const iconWrapper = (props: any) => (
      <UserIcon data-testid="test-id" {...props} />
    );
    const { container } = render(
      <Link href="/start" startAdornmentIcon={iconWrapper}>
        Start
      </Link>
    );
    expect(screen.getByTestId("test-id")).toBeInTheDocument();
    await expect(container).toBeA11y();
  });

  it("appends end adornment", async () => {
    const iconWrapper = (props: any) => (
      <UserIcon data-testid="test-id" {...props} />
    );
    const { container } = render(
      <Link href="/end" endAdornmentIcon={iconWrapper}>
        End
      </Link>
    );
    expect(screen.getByTestId("test-id")).toBeInTheDocument();
    await expect(container).toBeA11y();
  });
});
