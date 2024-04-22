import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main style={{
        marginTop : "5rem"
      }}>
        <h1>
          HOME PAGE
        </h1>
        <Link href={"/courses/development"}> LINK -  Development Page</Link>
      </main>
  );
}
