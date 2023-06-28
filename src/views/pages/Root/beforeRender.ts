export const getServerSideProps = async () => {
    const props = {
        user: { id: "test" },
        user2: { id: "hoge" },
    };
    return {
        props,
    };
};
