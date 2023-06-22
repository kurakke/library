import { useAuth } from "~/features/auth/hooks/useAuth";
import { fetcher } from "~/utils/fetcher";

export const getLendRecord = async () => {
  const { userId } = useAuth();
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/lendRecord/${userId}`
  );

  const res = await fetcher(url.href, {
    method: "GET",
  });

  return res.json();
};
