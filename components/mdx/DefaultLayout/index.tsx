import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import { TransformedPage } from "../../../lib/prisma/typings";
import Digest from "../Digest";

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    layout="responsive"
    width={300}
    height={300}
    {...props}
  />
);

const components = {
  img: ResponsiveImage,
  h1: (props: any) => (
    <h1 className="text-5xl font-bold mb-6 text-stone-800" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="mt-10 mb-5 text-3xl text-stone-700 font-bold" {...props} />
  ),
  h3: (props: any) => (
    <h2 className="mt-10 mb-2 text-1xl text-stone-700 font-medium" {...props} />
  ),
  p: (props: any) => <p className="mb-4 text-stone-600" {...props} />,
  pre: (props: any) => (
    <pre
      className="bg-slate-100 p-2 text-stone-600 mb-4 rounded-md overflow-x-auto"
      {...props}
    />
  ),
  code: (props: any) => (
    <code className="rounded-md text-stone-600" {...props} />
  ),
  ul: (props: any) => <ul className="pl-7 mb-5 list-disc" {...props} />,
  li: (props: any) => <li className="mt-1 text-stone-600" {...props} />,
  strong: (props: any) => <strong className="font-bold" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-gray-200 px-4 mb-4" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-green-400 hover:underline hover:decoration-green-500 hover:cursor-pointer"
      target={"_blank"}
      referrerPolicy={"no-referrer"}
      {...props}
    />
  ),
};

export default function DefaultLayout(
  props: React.PropsWithChildren<{ data?: TransformedPage }>
) {
  return (
    <MDXProvider components={components}>
      <main className="mx-auto p-4 md:max-w-3xl" {...props}>
        <h1 className="text-5xl font-bold mb-6 text-stone-800">
          {props?.data?.title}
        </h1>
        <Digest
          timeStamp={props?.data?.createdAt}
          mins={props?.data?.mins}
          view={props?.data?.viewCount}
        />
        {props.children}
      </main>
    </MDXProvider>
  );
}
