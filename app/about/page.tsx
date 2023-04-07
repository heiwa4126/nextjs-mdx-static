import type { Metadata } from "next";
import Link from "../../components/link";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import Content from "./content.mdx";

const basePath = process.env?.basePath ?? "";

export const metadata: Metadata = {
  title: "About",
  description: "How about this?",
};

export default function About() {
  return (
    <main>
      <Image priority src={`${basePath}/images/profile.jpg`} className={utilStyles.borderCircle} height={108} width={108} alt="small profile image" />
      <Content />
      <Link href="/">← back to home</Link>
    </main>
  );
}
