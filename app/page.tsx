import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Content from "./message.mdx";
import Counter from "../components/counter";
import utilStyles from "../styles/utils.module.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main>
      <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={144} width={144} alt="profile image" />
      <Content />
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
      <Counter />
    </main>
  );
}
