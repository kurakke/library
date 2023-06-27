import { getBookList } from "~/features/book/usecases/getBookList";
import { SearchBody, bookSearch } from "~/features/book/usecases/bookSearch";

export const getServerSideProps = async (context) => {
    const query: SearchBody = {
        serchWord: context.query.keyword,
    };

    const result = await bookSearch(query);

    return {
        props: {
            result,
        },
    };
};
