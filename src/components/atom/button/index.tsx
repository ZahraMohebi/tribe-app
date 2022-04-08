import { FC } from "react";
import { ButtonPropsTypes } from "./types";

const Button: FC<ButtonPropsTypes> = (props: ButtonPropsTypes) => {
  let wrapperClass: string[] = [
    " focus:outline-none cursor-pointer p-4 w-full",
  ];

  if (props.className) {
    wrapperClass.push(props.className);
  }

  if (props.color) {
    wrapperClass.push(props.color);
  } else {
    wrapperClass.push("text-gray");
  }
  if (props.bg) {
    wrapperClass.push(props.bg);
  } else {
    wrapperClass.push("bg-light-gray");
  }

  if (props.loading === true) {
    wrapperClass.push("cursor-not-allowed");
  }

  if (props.disabled === true) {
    wrapperClass.push("cursor-not-allowed");
  }

  if (props.rounded === undefined || props.rounded === true) {
    wrapperClass.push("rounded-2xl");
  }

  if (props.border === true) {
    wrapperClass.push("border  border-solid border-gray text-gray rounded-xl");
  } else {
    wrapperClass.push("border-0");
  }

  return (
    <button
      onClick={props.onClick}
      disabled={(props.loading ?? false) || props.disabled === true}
      className={wrapperClass.join(" ") }
      type={props.type ?? "button"}
    >
     
      {props.loading && (
        <div className={`${props.loadingPosition} absolute `}>
          {props.loadingIndicator}
        </div>
      )}
      {props.children}
    </button>
  );
};

export default Button;
