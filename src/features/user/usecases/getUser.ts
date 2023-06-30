import { UserEntity } from "~/features/user/entities";
import { sleep } from "~/utils/sleep";

export const getUser = async (): Promise<UserEntity> => {
    await sleep(500);
    return {
        id: "aaa",
        fullName: "高専花子",
        mail: "next13kowai@gmail.com",
        privilegeRole: "admin",
        studentId: "3450",
        updateAt: "2022-07-14 04:11:56",
        returnAt: "2022-08-15 12:30:09",
    };
};
