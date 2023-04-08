import {UserEntity} from "~/features/user/entities";

export const getUser = (): UserEntity => {
    return (
        {
            id: "aaa",
            name: "高専花子",
            mail: "next13kowai@gmail.com",
            privilegeRole: "admin",
            studentId: "3450",
        }
    )
}