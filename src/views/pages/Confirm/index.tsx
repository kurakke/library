import React from "react";
import { useAuth } from "~/features/auth/hooks/useAuth";

export const ConfirmPage = () => {
    const auth = useAuth();
    
    return (
        <div>
            <div>
                Hello Confirm
            </div>
        </div>
    )
}