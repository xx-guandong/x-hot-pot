import prisma from "../lib/prisma";
import { TransformedPage } from "../lib/prisma/typings";

export async function getServerSideProps() {
  const data = await prisma.page.findUnique({ where: { id: 1 } });
  // Pass data to the page via props
  return { props: { data } };
}

export default function Home({
  data,
  ...rest
}: {
  data: TransformedPage | null;
}) {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
