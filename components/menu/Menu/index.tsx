import React from "react";
import { ActionTypes, MenuOpenState, useMenuRootContext } from "..";
import { PropsOf } from "../../../typings/utils";


export default function Menu({
  slot,
  children,
  ...props
}: PropsOf<"div", "onClick", { open: MenuOpenState }>) {
  const [state, dispatch] = useMenuRootContext("Menu");
  const onClick = () => {
    dispatch({ type: ActionTypes.ToggleMenu });
  };
  const resolvedChildren =
    typeof children === "function" ? children({ open: state.open }) : children;
  return (
    <div onClick={onClick} {...props}>
      {resolvedChildren}
    </div>
  );
}
