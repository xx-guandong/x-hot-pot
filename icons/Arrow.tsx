import React from "react";

type iconsProps = {} & React.ComponentProps<"svg">;
export default function Arrow({ ...props }: iconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <polyline
        fill="currentColor"
        points="-210.9 -289 -212.9 -291 -201.1 -302.7 -212.9 -314.4 -210.9 -316.4 -197.1 -302.7 -210.9 -289"
        transform="translate(237 335)"
      />
    </svg>
  );
}
