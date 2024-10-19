import { PrismaClient } from "@prisma/client";

// こうすることでホットリロードが走って何度もインスタンス化することを防げる
// シングルトン

let prisma: PrismaClient;

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
}

prisma = globalForPrisma.prisma;

export default prisma;
