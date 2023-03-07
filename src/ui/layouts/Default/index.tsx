import { ReactNode } from "react";
import { Header } from "~/ui/components/Header";

export type Props = {
    children: ReactNode;
    disableCtrls?: boolean;
};

export const DefaultLayout = ({ children, disableCtrls }: Props) => {
    return (
        <div className="bg-brand-green-light max-w-sm min-h-screen mx-auto flex flex-col  items-center">
            <Header disableCtrls={disableCtrls} />
            {children}
        </div>
    );
};
