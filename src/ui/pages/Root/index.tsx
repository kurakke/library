import { DefaultLayout } from "~/ui/layouts/Default";

type User = {
    id: string;
};

export type Props = {
    user: User;
    user2: User;
};

export const RootPage = (props: Props) => {
    return (
        <DefaultLayout>
            <div className="relative">
                <div>
                    <div className="lib-clip-upper-left absolute w-full h-full bg-brand-green"/>
                </div>
                <div className="relative">
                    <h1 className="mb-16  text-5xl font-bold text-brand-green-light">コン研 - 図書館アプリ</h1>
                    <p className="mb-28 text-white text-sm lg:text-lg">XXXX</p>
                </div>
            </div>
        </DefaultLayout>
    );
};
