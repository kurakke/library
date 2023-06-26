import { Book } from "~/ui/components/Book";
import { DefaultLayout } from "~/ui/layouts/Default";
import { getBookList } from "~/features/book/usecases/getBookList";
import { Hero } from "~/views/pages/Root/_hero";
import { Heading2 } from "~/ui/components/Heading2";
import { PAGE_PATH } from "~/features/application/constants/page";
import { useEffect, useRef, useState } from "react";
import { SearchInput } from "~/ui/components/SearchInput";
import { useRouter } from "next/router";
import { BookEntity } from "~/features/book/entities";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "~/views/pages/Root/beforeRender";
import Link from "next/link";
import { createDynamicUrl } from "~/features/application/utils/url";

export const RootPage = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const [books, setBooks] = useState<BookEntity[]>([]);
    const ref = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState<number>(1);
    const [isReached, setIsReached] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) {
                return;
            }
            if (isReached) {
                return;
            }
            const fn = async () => {
                const next = await getBookList({ page, size: 3 });
                setBooks((prev) => [...prev, ...next.list]);
                setPage((prev) => prev + 1);
                setIsReached(next.isReached);
            };
            fn();
        });
        if (ref.current === null) {
            return;
        }
        //useRefで参照したdivタグを監視対象に追加する
        observer.observe(ref.current);
        const { current } = ref;
        return () => {
            observer.unobserve(current);
        };
    }, [page, isReached]);

    const router = useRouter();
    const handleSearch = (result: string) => {
        router.push({
            pathname: PAGE_PATH.Books,
            query: {
                keyword: result,
            },
        });
    };

    return (
        <DefaultLayout>
            <Hero />
            <Heading2 className="mt-40 px-16">検索して本を探す</Heading2>
            <div className="w-full px-16">
                <SearchInput onSearch={handleSearch} />
                <Heading2 className="mt-32">本を一覧で見る</Heading2>
                {books.map((book) => (
                    <li key={book.id}>
                        <Book book={book} />
                    </li>
                ))}
                {!isReached ? (
                    <div className="flex justify-center py-36">
                        <div ref={ref} className="lib-loader" />
                    </div>
                ) : (
                    <p className="text-center py-36">
                        これ以上本はありません。
                    </p>
                )}
            </div>
        </DefaultLayout>
    );
};
