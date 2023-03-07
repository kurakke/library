import { ReactNode } from "react";
import { Header } from "~/ui/components/Header";

export type Props = { children: ReactNode };

export const DefaultLayout = ({ children }: Props) => {
    return (
        <div className="bg-brand-green-light max-w-sm min-h-screen mx-auto flex flex-col  items-center">
            <Header />
            {children}
        </div>
    );
};
