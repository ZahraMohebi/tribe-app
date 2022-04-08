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