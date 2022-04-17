// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Page } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { WithData } from "./typings";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WithData<Page[]>>
) {
  // const PrismaClient
  const data = await prisma.page.findMany();
  res.status(200).json({ data });
}
