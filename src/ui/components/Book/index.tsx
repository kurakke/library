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
            <div className="w-full mt-12 rounded-3xl aspect-video bg-expressive-red"/>
            <h3 className="mt-8 font-black">{book.title}</h3>
            <p className="text-xs">{book.info}</p>
        </div>
    );
};