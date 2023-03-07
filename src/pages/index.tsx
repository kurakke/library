import { GetServerSideProps, NextPage } from "next";
import { Props, RootPage } from "~/ui/pages/Root";

const Page: NextPage<Props> = (props) => {
    return <RootPage user={props.user} user2={props.user2} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props: Props = {
        user: { id: "test" },
        user2: { id: "hoge" },
    };
    return {
        props,
    };
};
