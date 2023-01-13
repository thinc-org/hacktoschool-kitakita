/*
  Warnings:

  - You are about to drop the column `online` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - Added the required column `hashedPassword` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "online",
DROP COLUMN "role",
ADD COLUMN     "hashedPassword" TEXT NOT NULL;
