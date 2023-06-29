type Init<T> = Omit<RequestInit, "headers" | "body"> & {
    body?: T;
};

export const fetcher = <T extends object>(
    input: RequestInfo | URL,
    init?: Init<T>
) => {
    return fetch(input, {
        ...init,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(init.body) || undefined,
        mode: 'cors',
    });
};
