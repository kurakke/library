export type Props = {
    disableCtrls?: boolean;
};

export const Header = ({ disableCtrls }: Props) => {
    return (
        <div className="w-full flex justify-between items-center px-20 h-60 bg-white">
            <h1 className="text-lg font-black">コン研‐図書館</h1>
            {!disableCtrls && (
                <button className="text-xs font-black bg-brand-green text-white px-16 py-6 rounded lib-pointer">
                    ログイン
                </button>
            )}
        </div>
    );
};
