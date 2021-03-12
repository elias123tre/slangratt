import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handle(req, res) {
  const trash = await prisma.trash.findMany()
  res.json(trash)
}
