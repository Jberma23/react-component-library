import { cva, VariantProps } from "cva";

const avatarStyles = cva(
  [
    "flex items-center justify-center",
    "w-[40px] h-[40px] p-s rounded-full border-4",
    "bg-primary-200",
    "border-solid border-white hover:border-gray-300 active:border-primary-300",
    "duration-default transition-colors",
  ],
  {
    variants: {
      active: {
        true: ["border-primary-300"],
        false: [],
      },
    },
  }
);

export type AvatarProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & VariantProps<typeof avatarStyles>;

export const Avatar = <T extends React.ElementType>({
  active,
  as,
  children,
}: AvatarProps<T>) => {
  const Component = as || "div";
  return <Component className={avatarStyles({ active })}>{children}</Component>;
};
