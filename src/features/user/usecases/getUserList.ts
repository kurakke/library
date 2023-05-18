import {UserEntity} from "~/features/user/entities";
import {ItemList} from "~/features/_type";
import {sleep} from "~/utils/sleep";

export const getUserList = async (): Promise<ItemList<UserEntity>> => {
    const list: UserEntity[] = [
        {
            id: "aaa",
            fullName: "高専花子",
            mail: "next12dayatta@gmail.com",
            privilegeRole: "admin",
            studentId: "3450",
            updateAt:"2020-03-09 01:23:45",
            returnAt:"2023-05-11 14:23:36",
        },
        {
            id: "bbb",
            fullName: "高専太郎",
            mail: "next13muzukasisoo@gmail.com",
            privilegeRole: "admin",
            studentId: "3451",
            updateAt:"2023-04-09 11:59:59",
            returnAt:"2023-05-15 18:07:11",
        }
    ]
    await sleep(2000)
    return (
        {
            list,
            size: 10,
            page: 1,
            total: 3,
        }
    )
}