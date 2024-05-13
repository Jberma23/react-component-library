import { cva, VariantProps } from "cva";
import Image from "next/image";
const avatarStyles = cva(
  [
    "flex items-center justify-center",
    "w-[40px] h-[40px] p-s rounded-full border-2",
    "bg-primary-200",
    "border-solid hover:border-gray-300 active:border-primary-500",
    "duration-default transition-colors",
  ]
);
const avatarImageStyles = cva(
  [
    "flex items-center justify-center",
    "rounded-full border-2",
    "bg-primary-200",
    "border-solid hover:border-gray-300 active:border-primary-500",
    "duration-default transition-colors",
  ],{
    defaultVariants: {
      size: "default",
    },
    variants: {
      size: {
        default: ["h-[2.5rem] w-[2.5rem]"],
        small: ["h-[1.5rem] w-[1.5rem]"],
      },
    },
  }
);

export type AvatarProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  image?: boolean;
  src?: string;
  alt?: string;
} & VariantProps<typeof avatarStyles>;

export const Avatar = <T extends React.ElementType>({
  as,
  children,
  image,
  src, 
  alt
}: AvatarProps<T>) => {
  const Component = as || "div";
  if(!image){
    return <Component className={avatarStyles()}>{children}</Component>;
  }else{
    // eslint-disable-next-line @next/next/no-img-element
    return (<img className={avatarImageStyles()} src={src||""} alt={alt||""}/>);
  }

};
