import { BookEntity } from "~/features/book/entities";

export type Props = {
    book: BookEntity;
};

export const Book = ({ book }: Props) => {
    return (
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
};
