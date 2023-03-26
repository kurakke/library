import {ReactNode} from "react";
import {Header} from "~/ui/components/Header";

export type Props = {
    children: ReactNode;
    disableCtrls?: boolean;
};

export const DefaultLayout = ({children, disableCtrls}: Props) => {
    return (
        <div className="relative bg-white max-w-smartphone-lg mx-auto min-h-screen">
            <Header className="absolute" disableCtrls={disableCtrls}/>
            <div className="relative pt-60">
                {children}
            </div>
        </div>
    );
};
