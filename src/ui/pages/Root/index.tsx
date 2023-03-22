import { DefaultLayout } from "~/ui/layouts/Default";
import {Hero} from "~/ui/pages/Root/_hero";

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
            <Hero/>
        </DefaultLayout>
    );
};
