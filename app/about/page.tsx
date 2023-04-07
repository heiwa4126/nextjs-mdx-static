import type { Metadata } from "next";
import Image from "next/image";
import BackHome from "../../components/backhome";
import utilStyles from "../../styles/utils.module.css";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "About",
  description: "How about this?",
};

export default function About() {
  return (
    <main>
      <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={108} width={108} alt="small profile image" />
      <Content />
      <BackHome />
    </main>
  );
}
