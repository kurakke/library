import Link from "next/link";
import { PAGE_PATH } from "~/features/application/constants/page";
import { createDynamicUrl } from "~/features/application/utils/url";
import { BookEntity } from "~/features/book/entities";

export type Props = {
    book: BookEntity;
    isWithoutLink?: boolean;
};

export const Book = ({ book, isWithoutLink = false }: Props) => {
    return (
        <div>
            {isWithoutLink ? (
                <BookContent book={book} />
            ) : (
                <Link
                    href={createDynamicUrl(PAGE_PATH.BookOne, {
                        bookId: book.id,
                    })}
                >
                    <a>
                        <BookContent book={book} />
                    </a>
                </Link>
            )}
        </div>
    );
};

const BookContent = ({ book }: { book: BookEntity }) => (
    <div>
        <div className="w-full mt-12 rounded-3xl aspect-video bg-expressive-red" />
        <div className="flex justify-between mt-8">
            <h3 className="font-black">{book.title}</h3>
            <div className="lib-tag bg-brand-green text-white">タグ</div>
        </div>
        <div className="flex space-x-[4px]">
            <div className="text-xs">タイトル: {book.title},</div>
            <div className="text-xs">著者: {book.owner}</div>
        </div>
    </div>
);
