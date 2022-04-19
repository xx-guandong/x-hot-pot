import { Page } from "@prisma/client";

export type TransformDate<T, U extends keyof T> = Omit<T, U> &
  Record<U, number | undefined>;

export type TransformedPage = TransformDate<Page, "createdAt" | "updatedAt">;
