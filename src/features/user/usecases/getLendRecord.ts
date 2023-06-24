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
        console.error("user not found");
        const mockUrl = new URL(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/lendRecord/4dfdedbc-7c5b-475a-8445-02a9ddbe0181`
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
