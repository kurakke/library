import {UserEntity} from "~/features/user/entities";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const getUser = async (): Promise<UserEntity> => {
    await sleep(2000)
    return (
        {
            id: "aaa",
            fullName: "高専花子",
            mail: "next13kowai@gmail.com",
            privilegeRole: "admin",
            studentId: "3450",
        }
    )
}