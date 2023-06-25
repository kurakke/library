import classNames from "classnames";

export type Props = {
    password: string;
    warning: boolean;
    onChange: (password: string) => void;
};

export const PasswordInput = ({ password, warning, onChange }: Props) => {
    const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/;
        if (pattern === e.target.value) {
            return;
        }
        onChange(e.target.value);
    };

    return (
        <div>
            <h2 className="mt-12 font-black text-gray-dark">パスワード</h2>
            <p
                className={classNames("mt-4 text-xs text-gray", {
                    "text-expressive-red": warning,
                })}
            >
                {warning
                    ? "※条件にあったパスワードを作成してください"
                    : "※大文字、数字、特殊文字を含む"}
            </p>
            <input
                type="text"
                name="password"
                className={classNames("mt-8 px-16 w-full h-40 rounded-2xl border border-gray-dark", {
                    "text-expressive-red border-expressive-red": warning
                })}
                value={password}
                onChange={handleChangePassword}
            />
        </div>
    );
};
