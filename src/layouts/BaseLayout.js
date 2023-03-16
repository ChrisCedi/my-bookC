import React from "react";
import { Container } from "@material-ui/core";

export const BaseLayout = ({ children }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};
