/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { cva, VariantProps } from "cva";
import { overlayStyles } from "@ui-library/shared-styles/shared-overlay-styles";

const containerStyles = cva(["fixed top-[64px] left-0 right-0 bottom-0 z-50"], {
  variants: {
    isOpen: {
      true: ["pointer-events-auto"],
      false: ["pointer-events-none"],
    },
  },
});
const flyoutStyles = cva(
  [
    "fixed h-[calc(100%-64px)]",
    "bg-white",
    "z-20",
    "overflow-auto",
    "shadow-1",
    "duration-default transition-all",
  ],
  {
    defaultVariants: {
      fillScreen: false,
      openFromDirection: "left",
    },
    variants: {
      isOpen: {
        true: [],
        false: [],
      },
      openFromDirection: {
        left: ["left-0"],
        right: ["right-0"],
        top: ["left-0 right-0"],
        bottom: ["bottom-0 left-0 right-0"],
      },
      /** When true, fill the entire screen by expanding horizontally or vertically.
       * When false, shrink to the contents with a max width/height set.
       */
      fillScreen: {
        true: ["w-screen", "h-screen"],
        false: ["min-w-full md:min-w-[350px]", "min-h-[200px]"],
      },
    },
    compoundVariants: [
      {
        isOpen: true,
        openFromDirection: "bottom",
        className: "",
      },
      {
        isOpen: false,
        openFromDirection: "bottom",
        className: "translate-y-[100%]",
      },
      // shrink the size of the flyout to fit the contents
      {
        openFromDirection: "bottom",
        fillScreen: false,
        className: "h-fit max-h-screen",
      },
      {
        isOpen: true,
        openFromDirection: "left",
        className: "translate-x-[0%]",
      },
      {
        isOpen: false,
        openFromDirection: "left",
        className: "-translate-x-[150%]",
      },
      {
        isOpen: true,
        openFromDirection: "right",
        className: "translate-x-[0%]",
      },
      {
        isOpen: false,
        openFromDirection: "right",
        className: "translate-x-[150%]",
      },
      {
        isOpen: true,
        openFromDirection: "top",
        className: "translate-y-[0%]",
      },
      {
        isOpen: false,
        openFromDirection: "top",
        className: "-translate-y-[150%]",
      },
      // shrink the size of the flyout to fit the contents
      {
        openFromDirection: "top",
        fillScreen: false,
        className: "h-fit max-h-screen",
      },
    ],
  }
);

export interface FlyoutProps extends VariantProps<typeof flyoutStyles> {
  children: React.ReactNode;
  className?: string;
  showOverlay?: boolean;
  closeOnOverlayClick?: boolean;
  onClose?: () => void;
}

export function Flyout({
  children,
  className,
  fillScreen = false,
  isOpen = false,
  openFromDirection,
  showOverlay = true,
  closeOnOverlayClick = false,
  onClose,
}: FlyoutProps) {
  return (
    <div
      aria-hidden={!isOpen}
      className={containerStyles({ className, isOpen })}
    >
      <div
        className={flyoutStyles({
          fillScreen,
          isOpen,
          openFromDirection,
        })}
      >
        {isOpen ? children : null}
      </div>
      <div
        aria-hidden={!isOpen}
        className={overlayStyles({
          className: "z-10",
          isVisible: isOpen && showOverlay,
        })}
        onClick={() => {
          if (closeOnOverlayClick) {
            onClose?.();
          }
        }}
      ></div>
    </div>
  );
}
