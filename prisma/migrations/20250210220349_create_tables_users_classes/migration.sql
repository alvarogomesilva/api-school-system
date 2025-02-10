-- CreateEnum
CREATE TYPE "Role" AS ENUM ('DIRETOR', 'PROFESSOR', 'ALUNO', 'RESPONSAVEL');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" DEFAULT 'ALUNO',
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "teacherId" TEXT NOT NULL,
    "students" TEXT[],

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);
