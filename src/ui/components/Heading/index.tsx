import {ReactNode} from "react";

export type Props = {
    children: ReactNode;
}

export const Heading = ({children}: Props) =>
{
    return (
        <h1 className="text-2xl font-black text-gray-dark">{children}</h1>
    )
}

