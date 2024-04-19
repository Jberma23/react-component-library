import { cx } from "cva";
import { cardStyles } from "..";

export const menuItemsStyles = cardStyles({
  className: cx("flex min-w-full max-w-fit absolute ease-out duration-fast"),
  elevation: 1,
});
