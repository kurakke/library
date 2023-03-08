import Link from "next/link";
import { PAGE_PATH } from "~/features/application/constants/page";
import { DefaultLayout } from "~/ui/layouts/Default";

export const NotFoundPage = () => {
    return (
        <DefaultLayout disableCtrls>
            <h1 className="mb-8 text-7xl font-black leading-none">404</h1>
            <h2 className="mb-8 text-2xl font-black leading-none">NOT FOUND</h2>
            <p className="mb-40 text-xs">
                お探しのページは見つかりませんでした
            </p>
            <Link href={PAGE_PATH.Root}>
                <a className="rounded px-44 py-12 font-black text-white bg-brand-green">
                    トップページへ
                </a>
            </Link>
        </DefaultLayout>
    );
};
