import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  bg: "blue" ;
}

function MySideBarButton({ bg, children }: Props) {
  let bgClassName = ""
  switch (bg) {
    case "blue":
      bgClassName = "bg-blue"
    break
    
  }
  return (
    <button
      className={` justify-between h-10 mt-4  w-1/2  bg-blue-500 text-white font-bold py-2 px-6 rounded-full   shadow transition-shadow duration-3O  hover:opacity-80  ${bgClassName}`}
    >
      {children}
    </button>
  );
}

export default MySideBarButton;
