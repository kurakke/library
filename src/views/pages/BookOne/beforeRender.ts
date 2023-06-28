import { getBook } from "~/features/book/usecases/getBook";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const book = await getBook(context.params.bookId);
    return {
        props: {
            book,
        },
    };
};
