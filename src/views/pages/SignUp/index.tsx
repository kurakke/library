import React from "react";
import { useState } from "react";
export const SignUpPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [studentNumber, setStudentNumber] = useState<string>('');

    return(
        <div>
            <div>SignUpPage</div>
        </div>
    )
};