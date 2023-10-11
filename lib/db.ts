import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
};

// Really just need this one line
export const db = globalThis.prisma || new PrismaClient;

// Hot Reload (for development)
if (process.env.NODE_ENV !== "production") globalThis.prisma = db
