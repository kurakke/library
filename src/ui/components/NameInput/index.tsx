export type Props = {
    name: string;
    onChange: (name: string) => void;
}

export const NameInput = ({name, onChange}: Props) => {
    const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e.target.value)
    }
    return (
        <div>
            <h2 className="mt-20 font-black text-gray-dark">氏名</h2>
            <input
                type="text"
                name="name"
                className="mt-12 px-16 w-full h-40 rounded-2xl border border-gray-dark"
                value={name}
                placeholder="高専花子"
                onChange={handleChangeName}
            />
        </div>
    )
}