import { getUserList } from "~/features/user/usecases/getUserList";
import { getBook } from "~/features/book/usecases/getBook";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userList = await getUserList();
  const book = await getBook(context.params.id);
  return {
    props: {
      userList,
      book,
    },
  };
};
