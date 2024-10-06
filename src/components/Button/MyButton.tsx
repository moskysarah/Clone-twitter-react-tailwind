import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  bg: "blue" | "white" ;
}

function MyButton({ bg, children }: Props) {
  let bgClassName = ""
  switch (bg) {
    case "blue":
      bgClassName = "bg-blue"
    break
    case "white":
      bgClassName = "bg-white"
    break;
  }
  return (
    <button
      className={` justify-end h-10 mt-4  bg-blue-500 text-white font-bold py-2 px-6 rounded-full   shadow transition-shadow duration-3O  hover:opacity-80  ${bgClassName}`}
    >
      {children}
    </button>
  );
}

export default MyButton;
