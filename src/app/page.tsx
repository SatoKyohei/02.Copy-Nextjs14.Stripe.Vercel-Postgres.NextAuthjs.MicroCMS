// "use client";

import Book from "@/app/components/Book";
import { getAllBooks } from "@/app/lib/microcms/client";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import { BookType, Purchase, User } from "@/app/types/types";
import { getServerSession } from "next-auth";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
    const { contents } = await getAllBooks(); // ISR
    const session = await getServerSession(nextAuthOptions);
    const user = session?.user as User;

    let purchaseBookIds: string[];

    if (user) {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`,
            { cache: "no-store" } // SSR
        );
        const purchasesData = await response.json();

        purchaseBookIds = purchasesData.map(
            (purchaseBook: Purchase) => purchaseBook.bookId
        );
    }

    return (
        <>
            <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
                <h2 className="text-center w-full font-bold text-3xl mb-2">
                    Book Commerce
                </h2>
                {contents.map((book: BookType) => (
                    <Book
                        key={book.id}
                        book={book}
                        isPurchased={purchaseBookIds?.includes(book.id)}
                    />
                ))}
            </main>
        </>
    );
}
