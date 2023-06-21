export const fetcher = (
  input: RequestInfo | URL,
  init?: Omit<RequestInit, "headers">
) => {
  return fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
