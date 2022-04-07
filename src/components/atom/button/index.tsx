import React, { FC } from "react"


export type ButtonPropsTypes={
    /**
     * This is about any stuff inside the button
     */
    children?: React.ReactNode | string;

    /**
     * Background of button ,you should use exactly the className of tailwind such as bg-gray
     */
    bg?:  string;

    /**
     * Text color of button,you should use exactly the className of tailwind such as text-gray
     */
    color?:  string;

    /**
     * Class for component
     */
    className?:  string;

    /**
     * Disable button or not
     */
     disabled?:boolean;

    /**
     * Disable focus mode of button or not
     */
     disableFocus?:boolean;

    /**
     * Utilities for controlling the border radius of an element.
     */
     rounded?:boolean;

    /**
     * If true, the loading indicator is shown.
     */
     loading?:boolean;


    /**
     * Element placed before the children if the button is in loading state
     */
     loadingIndicator?:React.ReactNode;


    /**
     * The loading indicator can be positioned on the start, end, or the center of the button.
     * 	'top-3'
     */
     loadingPosition?:string;

    /**
     * The URL to link to when the button is clicked
     */
     href?:string;

    /**
     * The action would be happen when button is clicked 
     */
     onClick?: React.MouseEventHandler<HTMLElement>;

     /**
      * Type of button
      */
     type?:'reset'|'submit'|'button'

     /**
      * If its true your button would have border
      */
     border?:boolean

}

const Button:FC<ButtonPropsTypes> = (props:ButtonPropsTypes) => {

    let wrapperClass: string[] = [
        ' focus:outline-none cursor-pointer p-4 w-full',
      ];


    if (props.className) {
        wrapperClass.push(props.className);
    }

    if (props.color) {
        wrapperClass.push(props.color);
    }else{
        wrapperClass.push("text-gray");
    }
    if (props.bg) {
        wrapperClass.push(props.bg);
    }else{
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
    }
    else{
        wrapperClass.push("border-0");
    }
   
  


    return (
        <button
         onClick={props.onClick}  
         disabled={(props.loading ?? false) || props.disabled === true}
         className={wrapperClass.join(" ")}
         type={props.type??'button'}
         >
            {props.loading &&(<div className={`${props.loadingPosition} absolute`}>{props.loadingIndicator}</div>)}
            {props.children}
        </button>
    )
}

export default Button
