import { Toaster } from "react-hot-toast";
import "../styles/index.css";

// HACK: AppPropsを使用するとエラーが発生していたため、独自で型定義をしました。
function MyApp({
    Component,
    pageProps,
}: {
    Component: (props: Object) => JSX.Element;
    pageProps: Object;
}) {
    return (
        <>
            <Component {...pageProps} />
            <Toaster position="bottom-center" />
        </>
    );
}

export default MyApp;
