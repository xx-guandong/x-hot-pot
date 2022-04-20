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

  async increasePageById({ id }: { id: number }) {
    await page.update({
      where: { id },
      data: {
        viewCount: { increment: 1 },
      },
    });
    return null;
  },
};

export default Page;
