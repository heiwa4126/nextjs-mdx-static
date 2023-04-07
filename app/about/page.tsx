import type { Metadata } from "next";
import Link from "next/link";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "About",
  description: "How about this?",
};

export default function About() {
  return (
    <main>
      <Content />
      <Link href="/index">← back to home</Link>
    </main>
  );
}
