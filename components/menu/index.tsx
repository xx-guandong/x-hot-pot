import React, { Ref, useContext, useReducer } from "react";
import { PropsOf } from "../../typings/utils";
import { match } from "../../utils/match";

export enum MenuOpenState {
  Closed,
  Open,
}

interface StateDef {
  open: MenuOpenState;
}

export enum ActionTypes {
  ToggleMenu,
}

type Actions = { type: ActionTypes.ToggleMenu };

const reducer: {
  [P in ActionTypes]: (
    state: StateDef,
    action: Extract<Actions, { type: P }>
  ) => StateDef;
} = {
  [ActionTypes.ToggleMenu]: (state, action) => {
    return {
      ...state,
      open: match(state.open, {
        [MenuOpenState.Closed]: MenuOpenState.Open,
        [MenuOpenState.Open]: MenuOpenState.Closed,
      }),
    };
  },
};

const MenuRootContext = React.createContext<
  null | [StateDef, React.Dispatch<Actions>]
>(null);

function StateReducer(state: StateDef, action: Actions) {
  return match(action.type, reducer, state, action);
}

export function useMenuRootContext(componentName: string) {
  const value = useContext(MenuRootContext);
  if (value === null) {
    let error = new Error(
      `<${componentName}/> is missing a parent <MenuRoot> component.`
    );
    if (Error.captureStackTrace)
      Error.captureStackTrace(error, useMenuRootContext);
    throw error;
  }
  return value;
}

type MenuRootProps = PropsOf<"div", ""> & { open?: MenuOpenState };

export const MenuRoot = React.forwardRef(function MenuRoot(
  props: MenuRootProps,
  ref: Ref<HTMLDivElement>
) {
  const reduceBag = useReducer(StateReducer, {
    open: props.open ?? MenuOpenState.Closed,
  });

  return (
    <MenuRootContext.Provider value={reduceBag}>
      <div ref={ref} {...props}></div>
    </MenuRootContext.Provider>
  );
});
