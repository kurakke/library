import { DefaultLayout } from "~/ui/layouts/Default";
import {TriangleWrapper} from "~/ui/components/TriangleWrapper";

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
            <TriangleWrapper>
                <div className="w-full px-16">
                    <h1 className="mb-16  text-2xl font-bold text-brand-green-light">コン研 - 図書館アプリ</h1>
                    <p className="mb-28 text-white text-sm lg:text-lg">XXXX</p>
                    <div className="w-full bg-brand-green-light rounded-2xl mt-32 p-12">
                        <div className="border-b border-dashed w-full justify-center px-8 pb-8 flex justify-between">
                            <p className="font-black">本の借り方を知る</p>
                            <div className="flex items-center">
                                <p className="font-black mr-6">VIEW MORE</p>
                                <p className="rounded-full w-20 h-20 bg-brand-green"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </TriangleWrapper>
        </DefaultLayout>
    );
};
