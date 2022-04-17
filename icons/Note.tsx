import React from "react";
//import styles from './styles.scss';

type iconsProps = {} & React.ComponentProps<"svg">;
export default function Note({ ...props }: iconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path
        fill="currentColor"
        d="M29,7H28V4H26V7H19V4H17V7H10V4H8V7H7a3,3,0,0,0-3,3V41a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V10A3,3,0,0,0,29,7Zm0,35H7a1,1,0,0,1-1-1V15H9a1,1,0,0,0,0-2H6V10A1,1,0,0,1,7,9H29a1,1,0,0,1,1,1v3H13a1,1,0,0,0,0,2H30V41A1,1,0,0,1,29,42ZM26,27a1,1,0,0,1-1,1H11a1,1,0,0,1,0-2H25A1,1,0,0,1,26,27Zm0-6a1,1,0,0,1-1,1H11a1,1,0,0,1,0-2H25A1,1,0,0,1,26,21ZM21,33a1,1,0,0,1-1,1H11a1,1,0,0,1,0-2h9A1,1,0,0,1,21,33ZM43,7H37a1,1,0,0,0-1,1V40a1,1,0,0,0,.29.71l3,3a1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,44,40V8A1,1,0,0,0,43,7ZM42,9v7H38V9ZM40,41.59l-2-2V18h4V39.59Z"
        data-name="39 Notebook"
      />
    </svg>
  );
}
