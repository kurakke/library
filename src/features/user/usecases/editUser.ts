import { fetcher } from "~/utils/fetcher";

export const editUser = async (userData: {
    id: string;
    name: string;
    mail: string;
    studentNumber: string;
}): Promise<any> => {
    const url = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/edit`);

    const res = await fetcher(url.href, {
        method: "POST",
        body: userData,
    });

    if (res.status === 404) {
        console.error("user not found");
        return null;
    }

    return res.json();
};
