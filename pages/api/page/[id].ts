import { NextApiRequest, NextApiResponse } from "next/types";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const page = await prisma.page.findUnique({ where: { id: Number(id) } });
  res.status(200).json({ data: page });
}
