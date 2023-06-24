import { fetcher } from "~/utils/fetcher";

export const getLendRecord = async (userId) => {
    const url = new URL(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/lendRecord/${userId}`
    );

    const res = await fetcher(url.href, {
        method: "GET",
    });

    // TODO: うまく取得できなかった過場合の仮の処理なので最終的に削除が必要
    if (res.status === 404) {
        console.log("user not found");
        const mockUrl = new URL(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/lendRecord/146566d6-11fe-4079-af81-47f9d6a5c5c5`
        );

        const mockRes = await fetcher(mockUrl.href, {
            method: "GET",
        });

        if (mockRes.status === 404) {
            return null;
        }

        return mockRes.json();
    }

    return res.json();
};
