import * as React from "react";
import styled from "styled-components";
import { fontFamily, rem } from "../utils";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Row } from "./Row";

type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  theme: "light" | "dark"
}

const Component: React.FC<HeaderProps> = ({
  className,
  theme
}) => (
  
    <header className={className}>
      <Container>
        <Row justifyContent="space-between" alignItems="center">
          <Logo theme={theme}/>
          <Navigation theme={theme} />
        </Row>
      </Container>
    </header>
  );

export const Header = styled(Component)(
  ({ theme }) => {
    const shared = {
      fontWeight: 400,
      fontFamily,
      paddingTop: rem(20),
      paddingBottom: rem(20)
    }

    if (theme === 'light') {
      return {
        ...shared,
        backgroundColor: "white",
        color: "black",
      }

    } else {
      return {
        ...shared,
        backgroundColor: "black",
        color: "white",
      }
    }
  }
);