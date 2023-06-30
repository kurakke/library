import Image from "next/image";
import Link from "next/link";
import { PAGE_PATH } from "~/features/application/constants/page";
import { createDynamicUrl } from "~/features/application/utils/url";
import { BookEntity } from "~/features/book/entities";
import Book0Img from "~/assets/pngs/book0.png";
import Book1Img from "~/assets/pngs/book1.png";
import Book2Img from "~/assets/pngs/book2.png";

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

const BookContent = ({ book }: { book: BookEntity }) => {
    // TODO: これは仮の画像を取得するための仮の処理なので必要に応じて削除してください.
    const getImage = () => {
        const random = Math.floor(Math.random() * 3);

        switch (random) {
            case 0:
                return <Image src={Book0Img} width={300} height={223} />;
            case 1:
                return <Image src={Book1Img} width={300} height={223} />;
            default:
                return <Image src={Book2Img} width={300} height={223} />;
        }
    };

    return (
        <div>
            {getImage()}
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
};
