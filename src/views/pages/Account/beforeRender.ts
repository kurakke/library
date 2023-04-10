import {getBookList} from "~/features/book/usecases/getBookList";
import {getUser} from "~/features/user/usecases/getUser";

export const getServerSideProps = async() => {
    const rental = await getBookList();
    const returned = await getBookList();
    const user = await getUser();
    return {
        props: {
            rental,
            returned,
            user
        },
    };
};