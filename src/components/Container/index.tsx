import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`mx-auto max-w-[1280px] ${className || ""}`}>{children}</div>;
};

export default Container;
