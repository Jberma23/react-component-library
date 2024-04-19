import { Meta, StoryFn } from "@storybook/react";
import { Logo } from "./Logo";
import * as logoComponents from "@ui-library/logos";
import { Headline } from "../Headline/Headline";

type LogoComponentKey = keyof typeof logoComponents;

export default {
  component: Logo,
  title: "Library/Logo",
} as Meta<typeof Logo>;

const googleLogo = logoComponents["GoogleLogo" as LogoComponentKey];

export const Default: StoryFn<typeof Logo> = () => (
  <div className="w-5/6">
    <Logo LogoComponent={googleLogo} width={"50px"} height={"50px"} title="title" titleId="titleId" />
  </div>
);

export const AllLogos: StoryFn<typeof Logo> = () => (
  <div className="flex flex-wrap flex-row gap-xl w-full">
    {Object.keys(logoComponents).map((logo) => (
      <div key={logo} className={"flex flex-col gap-l"}>
        <Headline level={4}>{logo}</Headline>
        <Logo LogoComponent={logoComponents[logo as LogoComponentKey]} />
      </div>
    ))}
  </div>
);
