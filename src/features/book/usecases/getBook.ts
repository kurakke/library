import { useRouter } from "next/router";
import { BookEntity } from "~/features/book/entities";
import { fetcher } from "~/utils/fetcher";
import { sleep } from "~/utils/sleep";

export const getBook = async (id: string | string[]): Promise<BookEntity> => {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/books/lendRecord/${id}`
  );

  const res = await fetcher(url.href, {
    method: "GET",
  });

  await sleep(500);

  return res.json();
};
