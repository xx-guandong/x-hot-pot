import { EventEmitter } from "events";
import React from "react";

export function match<V extends string | number | symbol = string, T = unknown>(
  value: V,
  lookup: Record<V, T | ((...args: any[]) => T)>,
  ...args: any[]
): T {
  if (!(value in lookup)) {
    let error = new Error(
      `Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(
        lookup
      )
        .map((key) => `"${key}"`)
        .join(", ")}.`
    );
    if (Error.captureStackTrace) Error.captureStackTrace(error, match);
    throw error;
  }

  let returnValue = lookup[value];
  return typeof returnValue === "function" ? returnValue(...args) : returnValue;
}

export function useLatestValue<T>(value: T) {
  const cache = React.useRef(value);
  React.useEffect(() => {
    cache.current = value;
  }, [value]);
  return cache;
}

/**
 * do something when click outside of the element
 * event will bubble up, so add click handler on window
 */
export function useOutSideClick(
  elements: (React.RefObject<HTMLElement | null> | null)[],
  cb: (ev: MouseEvent | PointerEvent) => void
) {
  const clickHandler = useLatestValue((ev: MouseEvent | PointerEvent) => {
    let target = ev.target as HTMLElement;
    const inside = elements.some((element) => {
      return element?.current && element.current.contains(target);
    });
    if (!inside) {
      cb(ev);
    }
  });

  React.useEffect(() => {
    const handler = (ev: MouseEvent | PointerEvent) => {
      clickHandler.current(ev);
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, [clickHandler]);
}

/**
 * listening to onScroll event
 */
export function useOnScroll(
  eventEmitter: EventEmitter | undefined,
  cb: (ev: Event) => void,
  registerCond: boolean
) {
  const _cb = useLatestValue(cb);
  React.useEffect(() => {
    const handler = (ev: Event) => {
      _cb.current(ev);
    };
    if (registerCond) {
      eventEmitter?.addListener("onScroll", handler);
    }
    return () => {
      if (registerCond) {
        eventEmitter?.removeListener("onScroll", handler);
      }
    };
  }, [eventEmitter, _cb, registerCond]);
}
