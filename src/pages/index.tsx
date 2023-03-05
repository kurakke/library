import { NextPage } from "next";
import { Button, RootPage } from "~/ui/pages/Root";

const IndexPage: NextPage = () => {
    const sampleUser = { id: "hoge" };
    const sampleString = { mozi: "hoge" };
    return (
        <div>
            <RootPage user={sampleUser} user2={sampleUser} />
            <Button mozi={sampleString.mozi} />;
        </div>
    );
};

export default IndexPage;
