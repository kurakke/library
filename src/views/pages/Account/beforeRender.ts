import {getBookList} from "~/features/book/usecases/getBookList";

export const getServerSideProps = async () => {
    const rental = getBookList();
    const returned = getBookList();
    return{
        props: {
            rental,
            returned
        }
    };
};