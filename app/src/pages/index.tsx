import Card from "@/components/Card";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fast Phonics</title>
        <meta name="description" content="Fast Phonics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="text-center p-2">
        <h1 className="p-6 text-3xl font-bold">Fast Phonics</h1>

        <div className="flex flex-col gap-4 w-full font-bold">
          {mainCategory.map((category, i) => (
            <Card key={i} link={category.link}>
              {category.name}
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
const mainCategory = [
  { name: "One letter", link: "/oneLetter" },
  { name: "Two letter", link: "/twoLetters" },
  { name: "Three letter", link: "/threeLetters" },
  { name: "Four letter", link: "/fourLetters" },
];
