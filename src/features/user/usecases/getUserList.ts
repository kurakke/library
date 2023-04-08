import {UserEntity} from "~/features/user/entities";
import {ItemList} from "~/features/_type";

export const getUserList = (): ItemList<UserEntity> => {
    const list: UserEntity[] = [
        {
            id: "aaa",
            name: "高専花子",
            mail: "next13kowai@gmail.com",
            privilegeRole: "admin",
            studentId: "3450",
        },
    ]
    return (
        {
            list,
            size: 10,
            page: 1,
            total: 3,
        }
    )
}