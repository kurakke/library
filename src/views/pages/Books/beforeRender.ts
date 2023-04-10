import {getBookList} from "~/features/book/usecases/getBookList";

export const getServerSideProps = async () => {
    const bookList = await getBookList();
    return {
        props: {
            bookList
        },
    };
};