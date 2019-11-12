import React from "react";
import styled from "styled-components";
import { rem } from "../utils";

export const Column = styled.div(() => ({
  marginLeft: rem(15),
  marginRight: rem(15),

  ":first-child": {
    marginLeft: 0
  },

  ":last-child": {
    marginRight: 0
  }
}));
