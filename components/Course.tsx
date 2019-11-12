import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { rem } from "../utils";
import { Card } from "./Card";

const Component = ({ className, title, subtitle }) => (
  <div className={className}>
    <Container>
      <Card>
        <Heading level={2}>{title}</Heading>
        <Heading level={3}>{subtitle}</Heading>
      </Card>
    </Container>
  </div>
);

export const Course = styled(Component)(() => ({
  minHeight: rem(280)
}));
