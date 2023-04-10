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
        },
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