import { Listbox, ListboxOptionProps } from "@headlessui/react";
import { CheckIcon } from "@ui-library/icons";
import { cx } from "cva";
import React from "react";
import { Icon } from "@ui-library/index";

export type OptionData = {
  id: number | string;
  index?: number;
  label: string;
};

export type OptionProps = Omit<
  ListboxOptionProps<"option", OptionData>,
  "children"
> & {
  children: React.ReactNode;
};

export const Option = React.forwardRef<HTMLOptionElement, OptionProps>(
  ({ children, disabled, value, ...rest }, ref): JSX.Element => (
    <Listbox.Option
      {...rest}
      className={cx(
        "ui-selected:bg-gray-200 ui-active:bg-gray-100 ui-disabled:opacity-40"
      )}
      disabled={disabled}
      ref={ref}
      value={value}
    >
      <div className="flex items-center justify-between py-xs px-[0.75rem]">
        <div>{children}</div>
        <Icon
          className="hidden ui-selected:block ml-s"
          SvgIcon={CheckIcon}
          size="small"
        />
      </div>
    </Listbox.Option>
  )
);

Option.displayName = "SelectOption";
