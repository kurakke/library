import "@/styles/index.css";

// HACK: AppPropsを使用するとエラーが発生していたため、独自で型定義をしました。
const MyApp = ({
    Component,
    pageProps,
}: {
    Component: (props: Object) => JSX.Element;
    pageProps: Object;
}): JSX.Element => {
    return <Component {...pageProps} />;
};

export default MyApp;
