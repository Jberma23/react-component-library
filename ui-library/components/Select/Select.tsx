import { Label, Listbox } from "@headlessui/react";
import { cx } from "cva";
import { ReactNode, forwardRef, useId } from "react";
import { Card, Icon } from "@ui-library/index";
import { OptionData } from "./Option";
import { ChevronDownIcon } from "@ui-library/icons";
import { sharedInputStyles } from "@ui-library/shared-styles/shared-input-styles";

export type SelectProps<TOption extends OptionData> = {
  children: ReactNode;
  label?: string;
  onChange?: (value: TOption) => void;
  placeholder?: ReactNode;
  renderSelected?: (value: TOption) => any;
  selected?: TOption | null;
};

/**
 * Component that will render a select input.
 * This uses [@headlessui Listbox](https://headlessui.com/react/listbox) under the hood.
 *
 * Use this in conjunction with SelectOption as children to render:
 *
 * @example
 * import { Select, Option } from "~/components/Select";
 * <Select>
 *   <Option value={{id: 0, name: "Foo bar"}}>Foo bar</Option>
 * </Select>
 */
export const Select = forwardRef<HTMLElement, SelectProps<OptionData>>(
  (
    { children, label, onChange, placeholder, renderSelected, selected },
    ref
  ) => {
    const inputId = useId();

    return (
      <div className="flex flex-col gap-xxs w-full">
        <Listbox onChange={onChange} ref={ref} value={selected}>
          {label ? (
            <Label htmlFor={inputId}>{label}</Label>
          ) : null}
          <Listbox.Button
            aria-label="Select button"
            className={cx(
              sharedInputStyles,
              "h-[40px]",
              // Once supporting a disabled property, only use this when disabled
              "hover:outline hover:outline-gray-300"
            )}
            id={inputId}
          >
            <div className="flex items-center justify-between">
              <div data-testid="Selected-item">
                {placeholder && !selected ? (
                  <div className="text-gray-400">{placeholder}</div>
                ) : null}

                {renderSelected && selected
                  ? renderSelected?.(selected!)
                  : null}
                {!renderSelected && selected ? selected.label : null}
              </div>
              <Icon
                className="float-right"
                SvgIcon={ChevronDownIcon}
                size="small"
              />
            </div>
          </Listbox.Button>
          <div className="relative z-30">
            <Listbox.Options className="outline-teal-500 absolute w-full">
              <Card className="outline-teal-500" elevation={1}>
                {children}
              </Card>
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
    );
  }
);

Select.displayName = "Select Input";
