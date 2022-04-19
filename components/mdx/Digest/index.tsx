import React from "react";
import { MMDDYYYY } from "../../../utils/date";
//import styles from './styles.scss';

type DigestProps = { timeStamp?: number; mins?: number; view?: number };
export default function Digest({
  timeStamp = 0,
  mins = 0,
  view = 0,
}: DigestProps) {
  return (
    <div className="text-slate-500 mb-2">
      <time dateTime={new Date(timeStamp).toISOString()}>
        {MMDDYYYY(timeStamp)}
      </time>{" "}
      &bull; {mins} mins &bull; {view} views
    </div>
  );
}
