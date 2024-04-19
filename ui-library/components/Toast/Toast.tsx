import { cx } from "cva";
import { Fragment, ReactNode, useState } from "react";
import { Icon } from "@ui-library/index";
import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@ui-library/icons";

export type ToastProps = {
  variant: "success" | "danger";
  children: ReactNode;
  dismissHandler: () => void;
};

/**
 * NOTE: This is not in use yet. Currently using a library but we may pivot to a custom toast post MVP.
 */
export const Toast: React.FC<ToastProps> = ({
  variant,
  children,
  dismissHandler,
}) => {
  const [showToast, setShowToast] = useState(true);

  const clickHandler = () => {
    setShowToast(false);
  };

  return (
    <Transition
      as={Fragment}
      show={showToast}
      appear={true}
      enter="transform transition duration-[200ms]"
      enterFrom="opacity-0 translate-y-[100%]"
      enterTo="opacity-100"
      leave="transform duration-[200ms] transition ease-in-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0 translate-x-[100%]"
      afterLeave={dismissHandler}
    >
      <div
        className={cx([
          "w-[fit-content]",
          "grid grid-cols-[min-content,1fr,min-content]",
          "shadow-1 bg-white z-100",
          "fixed bottom-m right-m",
        ])}
      >
        <div className="p-s">
          {variant === "success" ? (
            <Icon
              SvgIcon={CheckCircleIcon}
              title="Success"
              className="fill-success"
            />
          ) : (
            <Icon
              SvgIcon={ExclamationTriangleIcon}
              title="Error"
              className="fill-danger"
            />
          )}
        </div>
        <div className="py-s">{children}</div>
        <button
          onClick={clickHandler}
          className="p-s"
          title="dismiss notification"
        >
          <Icon SvgIcon={XMarkIcon} title="Dismiss" />
        </button>
      </div>
    </Transition>
  );
};
