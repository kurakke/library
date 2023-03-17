import Link from "next/link";
import { PAGE_PATH } from "~/features/application/constants/page";

export type Props = {
    disableCtrls?: boolean;
};

export const Header = ({ disableCtrls }: Props) => {
    return (
        <div className="absolute w-full flex justify-between items-center px-20 h-60 bg-white">
            <Link href={PAGE_PATH.Root}>
                <a>
                    <h1 className="text-lg font-black">コン研‐図書館</h1>
                </a>
            </Link>
            {!disableCtrls && (
                <Link href={PAGE_PATH.SignIn}>
                    <a className="text-xs font-black bg-brand-green text-white px-16 py-6 rounded lib-pointer">
                        ログイン
                    </a>
                </Link>
            )}
        </div>
    );
};
