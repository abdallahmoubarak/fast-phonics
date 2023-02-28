import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  link: String;
}

export default function Card({ children, link }: CardProps) {
  return (
    <Link href={`${link}`}>
      <div className="bg-white text-cyan-600 bold rounded-md w-full p-4 cursor-pointer border-4 border-yellow-300 mx-auto">
        {children}
      </div>
    </Link>
  );
}
