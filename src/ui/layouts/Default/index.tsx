import { ReactNode } from "react";
import { Header } from "~/ui/components/Header";

export type Props = {
    children: ReactNode;
    disableCtrls?: boolean;
};

export const DefaultLayout = ({ children, disableCtrls }: Props) => {
    return (
        <div className="relative bg-white max-w-sm mx-auto h-full">
            <Header className="absolute" disableCtrls={disableCtrls} />
            <div className="relative flex flex-col items-center pt-60 h-screen">
                {children}
            </div>
        </div>
    );
};
