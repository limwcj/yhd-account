/*
  Warnings:

  - The primary key for the `LoginLog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RegisterLog` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "LoginLog" DROP CONSTRAINT "LoginLog_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RegisterLog" DROP CONSTRAINT "RegisterLog_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
