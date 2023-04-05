import {ReactNode} from "react";
import classNames from "classnames";

export type Props = {
    children: ReactNode;
    className?: string;
}

export const Heading2 = ({children, className}: Props) => {
    return (
        <h2 className={classNames("font-black text-gray-dark text-xl", className)}>{children}</h2>
    )
}