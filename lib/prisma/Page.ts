import prisma from ".";
import { TransformedPage } from "./typings";
const { page } = prisma;
const Page = {
  async findPageById({ id }: { id: number }) {
    const result = await page.findUnique({ where: { id } });
    const transformedData: TransformedPage | null = result
      ? {
          ...result,
          updatedAt: result?.updatedAt.valueOf(),
          createdAt: result?.createdAt.valueOf(),
        }
      : null;
    return transformedData;
  },
};

export default Page;
