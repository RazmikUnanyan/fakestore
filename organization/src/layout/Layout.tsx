import React, { FC, FunctionComponent } from "react";
import { Container } from "@mui/material";
import style from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <div className={style.wrapper} {...props}>
      <Container className={style.container}>{children}</Container>
    </div>
  );
};

export const withLayout =
  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  (props: T) =>
    (
      <Layout>
        <Component {...props} />
      </Layout>
    );
