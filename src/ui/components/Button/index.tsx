import classNames from "classnames";
import {ReactNode} from "react";

export type Props = {
    type?: "submit" | "reset" | "button";
    disable?: boolean;
    children: ReactNode;
}

export const Button = ({type, disable, children}: Props) => {
    return (
        <button
            type={type}
            disabled={disable}
            className={classNames("flex justify-center items-center w-200 h-40 rounded font-black text-white", {
                "bg-gray-light": disable,
                "bg-brand-green lib-pointer": !disable,
            })}
        >
            {children}
        </button>
    )
}