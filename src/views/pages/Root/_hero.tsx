import {TriangleWrapper} from "~/ui/components/TriangleWrapper";

export const Hero = () => {
    return (
        <TriangleWrapper>
            <div className="w-full pt-32 px-16">
                <div className="flex flex-col items-center w-fit">
                    <div className="w-80 h-80 mb-12 bg-expressive-red"/>
                    <h1 className="text-2xl font-bold text-white">コン研 - 図書館</h1>
                </div>
                <div className="w-full rounded-2xl mt-32 p-12 bg-brand-green-light">
                    <div className="flex justify-between justify-center w-full px-8 pb-8 border-b border-dashed">
                        <p className="font-black">本の借り方を知る</p>
                        <div className="flex items-center">
                            <p className="font-black mr-6">VIEW MORE</p>
                            <p className="rounded-full w-20 h-20 bg-brand-green"></p>
                        </div>
                    </div>
                </div>
                <div className="w-full aspect-square bg-expressive-red rounded-3xl mt-12"/>
            </div>
        </TriangleWrapper>
    );
};

