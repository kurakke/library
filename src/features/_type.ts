export type ItemList<Item> = {
    // 取得したアイテムの一覧
    list: Item[];
    // 1ページ当たりの取得個数
    size: number;
    // 取得対象のページ
    page: number;
    // 取得可能なアイテムの総数
    total: number;
}