import { PrismaClient } from "@prisma/client";

// こうすることでホットリロードが走って何度もインスタンス化することを防げる。シングルトン？

// 動画での定義。ここから
// let prisma: PrismaClient;

// const globalForPrisma = global as unknown as {
//     prisma: PrismaClient | undefined;
// };

// if (!globalForPrisma.prisma) {
//     globalForPrisma.prisma = new PrismaClient();
// }

// prisma = globalForPrisma.prisma;

// export default prisma;

// ここまで。letじゃなくてconstで定義しろというエラーが出るためコメントアウト

// 修正した定義
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
}
const prisma: PrismaClient = globalForPrisma.prisma;

export default prisma;