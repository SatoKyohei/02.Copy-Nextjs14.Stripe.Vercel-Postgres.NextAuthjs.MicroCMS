// microCMSの情報を取得するAPI
import { BookType } from "@/app/types/types";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
    // 直接入力せず.envファイルに定義
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getAllBooks = async () => {
    const allBooks = await client.getList<BookType>({
        endpoint: "bookcommerce", // 値はmicroCMSで確認可能
    });

    return allBooks;
};
