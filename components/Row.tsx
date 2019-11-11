import * as React from "react";
import styled from "styled-components";

const Component: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  children
}) => <div className={className}>{children}</div>;

export const Row = styled(Component)(({ alignItems, justifyContent }) => ({
	display: "flex",
	alignItems,
	justifyContent
}));
