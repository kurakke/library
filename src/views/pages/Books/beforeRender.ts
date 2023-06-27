import { bookSearch } from "~/features/book/usecases/bookSearch";

export const getServerSideProps = async (context) => {
    const searchResult = await Promise.all([
        bookSearch({
            serchWord: context.query.keyword,
        }),
        bookSearch({
            serchWord: context.query.keyword,
            filter: "canRent",
        }),
    ]);

    return {
        props: {
            searchResult,
        },
    };
};
