import classNames from "classnames";

export type Props = {
    studentId: string;
    warning: boolean;
    onChange: (StudentId: string) => void;
}
export const StudentIdInput = ({studentId, warning, onChange}: Props) => {
    const handleChangeStudentId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.value.length >= 5) {
            return;
        }
        onChange(e.target.value)
    }
    return (
        <div>
            <h2 className="mt-12 font-black text-gray-dark">学籍番号</h2>
            <p className={classNames("mt-4 text-xs text-gray", {
                "text-expressive-red": warning
            })}>
                {warning ? "※ 半角数字４桁（数字４桁で入力してください)" : "※ 半角数字４桁"}
            </p>
            <input
                type="tel"
                name="student_id"
                className={classNames("mt-8 px-16 w-full h-40 rounded-2xl border border-gray-dark", {
                    "text-expressive-red border-expressive-red": warning
                })}
                value={studentId}
                placeholder="0000"
                onChange={handleChangeStudentId}
            />
        </div>
    )
}