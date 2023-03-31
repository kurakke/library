import {ReactNode} from "react";

export type Props = {
    children: ReactNode;
}

export const Infomation = ({children}: Props) => {
    return (
        <div className="flex justify-center items-center mt-24 py-16 rounded-2xl bg-brand-green-light">
            {children}
        </div>
    )
}