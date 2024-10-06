import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  bg: "white" ;
  
}

function MyFollowButton({ bg, children }: Props) {
  let bgClassName = ""
  switch (bg) {
    case "white":
      bgClassName = "bg-white"
    break;
  }
  
  return (
    <button
      className={` justify-end h-10 mt-4  bg-white  text-black font-bold-sm py-1 px-6 rounded-full   shadow transition-shadow duration-3O  hover:opacity-80  ${bgClassName}`}
    >
      {children}
    </button>
  );
}

export default MyFollowButton;
