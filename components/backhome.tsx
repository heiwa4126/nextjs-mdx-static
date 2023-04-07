import Link from "next/link";

export default () => {
  const basePath = process.env?.basePath;
  return <Link href={!!basePath ? "/index" : "/"}>← back to home</Link>;
};
