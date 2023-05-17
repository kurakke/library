import {useRouter} from "next/router";

export const BookOne = () => {
    const router = useRouter();
    const { bookId }  = router.query;

    return <p>Post:{bookId}</p>;
}