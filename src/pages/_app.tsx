import { Toaster } from "react-hot-toast";
import { ProvideAuth } from "~/features/auth/hooks/useAuth";
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
            <ProvideAuth>
                <Component {...pageProps} />
                <Toaster position="bottom-center" />
            </ProvideAuth>
        </>
    );
}

export default MyApp;
