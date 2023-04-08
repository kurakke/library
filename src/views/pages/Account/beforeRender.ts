import {getBookList} from "~/features/book/usecases/getBookList";
import {getUser} from "~/features/user/usecases/getUser";

export const getServerSideProps = async () => {
    const rental = getBookList();
    const returned = getBookList();
    const user = getUser();
    return {
        props: {
            rental,
            returned,
            user
        },
    };
};