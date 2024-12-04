import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-around">
      <Link href="/input">form</Link>
      <Link href="/list">list</Link>
      <a href={`mailto:${"abbas0bayat@gmail.com"}`}>email me</a>
    </div>
  );
}
