import SearchIcon from "~assets/svgs/search.svg";
import Image from "next/image";

export const SearchInput = () => {
    return (
        <div　className="flex items-center">
            <div className="flex items-center w-full px-12 h-40 rounded-lg bg-gray-bright">
                <Image src={SearchIcon}/>
                <input
                    type="text"
                    search="search"
                    className="px-12 bg-gray-bright flex-grow"
                    placeholder="データベース設計"
                />
                <button className="flex justify-center items-center w-52 h-28 rounded bg-brand-green font-black text-xs text-white">保存</button>
            </div>
        </div>
    )
}