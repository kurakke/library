const user = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/create`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: result.userSub, name: params.name, email: params.email, studentNumber: params.studentNumber }),
}).then<User>((res) => {
    return res.json();
})