import {getBookList} from "~/features/book/usecases/getBookList";
import {getUser} from "~/features/user/usecases/getUser";

export const getServerSideProps = async () => {
    const [rental, returned, user] = await Promise.all([
        getBookList(), getBookList(), getUser()
    ]);

    return {
        props: {
            rental,
            returned,
            user
        },
    };
};