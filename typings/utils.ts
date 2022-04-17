export type PropsOf<
  /** Elment Type Props */ T extends keyof JSX.IntrinsicElements,
  /** Omit Type */ O extends string,
  /** Slot Type */ S = unknown
> = Omit<React.ComponentProps<T>, O | "children"> & { slot?: S } & {
  children?: ((slot: S) => React.ReactNode) | React.ReactNode;
};
