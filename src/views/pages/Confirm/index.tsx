import React,{useState} from "react";
import { useAuth } from "~/features/auth/hooks/useAuth";

export const ConfirmPage = () => {
    const auth = useAuth();
    const [confirmCode, setConfirmCode] = useState<string>('');

    const handleConfrimCode = (event) => {
        setConfirmCode(event.target.value);
    }
    const handleSubmit = () => {
        console.log('submit');
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            confirmCode
                        </label>
                        <input type="text" name="confirmCode" value={confirmCode} onChange={handleConfrimCode} />
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}