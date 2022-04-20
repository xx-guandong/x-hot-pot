import React from "react";
import NoteIcon from "../../../icons/Note";
type NoteProps = React.PropsWithChildren<{}>;
export default function Note({ children }: NoteProps) {
  return (
    <div className="rounded-md shadow-md p-4 py-2 border-l-8 my-2">
      <div className="mb-1">
        <NoteIcon
          width={24}
          height={24}
          className="inline-block mr-2 align-middle text-slate-600"
        />
        <span className="font-semibold align-middle">Note</span>
      </div>
      {children}
    </div>
  );
}
