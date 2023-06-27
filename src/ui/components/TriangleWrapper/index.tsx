import { ReactNode } from "react";

export type Props = {
    children: ReactNode;
};

export const TriangleWrapper = ({ children }: Props) => {
    return (
        <div className="relative w-full">
            <div>
                <div className="lib-clip-upper-left absolute w-full h-full bg-brand-green" />
            </div>
            {/* TODO: このh-[120px]はレイアウトが崩れる対策のためなので必要に応じて削除してください */}
            <div className="relative h-[120px]">{children}</div>
        </div>
    );
};
