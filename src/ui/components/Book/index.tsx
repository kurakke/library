import {Props} from "~/ui/components/Header";

export type BookType = {
    title:string;
    info:string;
};

export type Props ={
    book:BookType;
};

export const Book = ({book}:Props) => {
    return(
        <div>
            <div className="w-full aspect-video bg-expressive-red rounded-3xl mt-12"/>
            <h3 className="font-black mt-8">{book.title}</h3>
            <p className="text-xs">{book.info}</p>
        </div>
    );
};