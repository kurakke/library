import { DefaultLayout } from "~/ui/layouts/Default";
import { Infomation } from "~/ui/components/Infomation";

export const UnavailablePage = () => {
    return (
        <DefaultLayout disableCtrls>
            <div className="px-30 pt-12">
                <h1 className="font-black">サービスを利用できません</h1>
                <Infomation>
                    <p className="text-center text-xxs">
                        管理者がアカウントを承認するまでは
                        <br />
                        サービスを利用できません
                    </p>
                </Infomation>
            </div>
        </DefaultLayout>
    );
};
