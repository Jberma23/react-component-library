import { render, screen } from "@testing-library/react";
import { McDonaldLogo } from "@ui-library/logos";
import { Logo } from "./Logo";

const LogoTestProps = { title: "testTitle", titleId: "TestID" };

describe(Logo, () => {
  it("renders", () => {
    render(<Logo {...LogoTestProps} LogoComponent={McDonaldLogo} />);
    expect(screen.getByTestId("mcdonalds-logo")).toBeInTheDocument();
  });
  it("renders with title", () => {
    render(<Logo {...LogoTestProps} LogoComponent={McDonaldLogo} />);
    expect(screen.getByText("testTitle")).toBeInTheDocument();
  });
  it("renders with title and titleId", () => {
    render(<Logo {...LogoTestProps} LogoComponent={McDonaldLogo} />);
    expect(screen.getByText("testTitle")).toHaveAttribute("id", "TestID");
  });
});
