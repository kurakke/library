import { ReactNode } from "react";

export type Props = {
    children: ReactNode;
};

export const TriangleWrapper = ({children}: Props) => {
    return (
        <div className="relative w-full">
            <div>
                <div className="lib-clip-upper-left absolute w-full h-full bg-brand-green"/>
            </div>
            <div className="relative">
                {children}
            </div>
        </div>
    );
};
