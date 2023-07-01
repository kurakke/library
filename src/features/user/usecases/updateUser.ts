import { fetcher } from "~/utils/fetcher";

type UpdateBody = {
    id: string;
    name: string;
    email: string;
    studentNumber: number;
};

export const updateUser = async ({
    id,
    name,
    email,
    studentNumber,
}: UpdateBody) => {
    const url = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/edit`);

    const res = await fetcher<UpdateBody>(url.href, {
        method: "POST",
        body: {
            id: id,
            name: name,
            email: email,
            studentNumber: studentNumber,
        },
    });

    return res.json();
};
