-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('WEB', 'MOBILE');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "ProjectType" NOT NULL DEFAULT 'WEB',
    "category" TEXT NOT NULL,
    "tech" TEXT[],
    "coverDesktop" TEXT,
    "coverMobile" TEXT,
    "liveUrl" TEXT,
    "isFeatured" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
