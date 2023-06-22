import { GetServerSideProps } from "next";
import { getLendRecord } from "~/features/user/usecases/getLendRecord";

export const getServerSideProps: GetServerSideProps = async () => {
    const user = await getLendRecord();

    return {
        props: {
            user,
        },
    };
};
