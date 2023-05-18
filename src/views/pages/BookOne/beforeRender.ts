import {getUserList} from "~/features/user/usecases/getUserList";
import {getBook} from "~/features/book/usecases/getBook";

export const getServerSideProps = async () => {
    const userList = await getUserList();
    const book = await getBook();
    return{
        props:{
            userList,
            book,
        },
    }
}