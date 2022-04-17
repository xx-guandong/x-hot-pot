import { MenuOpenState, useMenuRootContext } from "..";
import { PropsOf } from "../../../typings/utils";

export default function MenuItem({
  children,
  ...props
}: PropsOf<"div", "", { open: MenuOpenState }>) {
  const [state, dispatch] = useMenuRootContext("Menu.Item");
  const resolvedChildren =
    typeof children === "function" ? children({ open: state.open }) : children;
  return <div {...props}>{resolvedChildren}</div>;
}
