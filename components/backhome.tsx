import Link from "next/link";

export default () => {
  const basePath = process.env?.basePath;
  return <Link href={!!basePath ? "/index" : "/"}>← back to home</Link>;
  //return <Link href="/">← back to home</Link>;
};
