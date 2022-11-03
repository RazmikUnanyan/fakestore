import React, {FC, FunctionComponent} from "react";
import style from "./Layout.module.scss";
import {LayoutProps} from "./Layout.props";
import Header from "./Header/Header";

const Layout: FC<LayoutProps> = ({children, ...props}) => {
    return (
        <div className={style.wrapper} {...props}>
            <Header/>
            {children}
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
