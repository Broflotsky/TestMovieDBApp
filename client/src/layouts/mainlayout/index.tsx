import React, { ReactElement, ReactNode } from "react";
import Header from "../../components/header";
import "./MainLayout.scss";

interface Props {
  children: ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }): ReactElement => {
  return (
    <main className="main-layout">
      <Header />
      <div>{children}</div>
    </main>
  );
};
