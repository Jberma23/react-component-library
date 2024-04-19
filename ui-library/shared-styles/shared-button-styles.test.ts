import { BodyProps } from "..";
import { ButtonProps } from "..";
import { buttonToFontSize } from "./shared-button-styles";

describe("buttonToFontSize", () => {
  const buttonWithBodyTextSize: [ButtonProps["size"], BodyProps["size"]][] = [
    ["default", "default"],
    ["large", "default"],
    ["small", "default"],
    ["extraSmall", "small"],
  ];

  it.each(buttonWithBodyTextSize)(
    "when passed %s will return %s",
    (buttonSize, bodySize) => {
      expect(buttonToFontSize(buttonSize)).toBe(bodySize);
    }
  );
  it("returns 'default' when an unknown is passed", () => {
    expect(buttonToFontSize("foobar" as ButtonProps["size"])).toBe("default");
  });
});
