import Link, { LinkProps } from "next/link";

const basePath = process.env?.basePath;

interface Props extends LinkProps {
  children: React.ReactNode;
}

export default (props0: Props) => {
  const props = { ...props0 };
  if (!!basePath && props.href == "/") {
    props.href = "/index";
  }
  return <Link {...props}>{props.children}</Link>;
};
