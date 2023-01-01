import { Breadcrumb, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import Menu from "antd/es/menu";
import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RoutesContainer } from "../routes/RoutesContainer";
import { BreadCrumbsContainer } from "./Breadcrumbs";

export const LayoutContainer: React.FC<any> = ({ children }) => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const [toggle, setToggle] = useState(false);

  const location = useLocation();
  const urlPaths = location.pathname.split("/").filter((i) => i);

  //   const breadCrumbItems = urlPaths.map((_, index) => {
  //     const url = `/${urlPaths.slice(0, index+1).join('/')}`;
  //     return (
  //         <Breadcrumb.Item key={url}>
  //             <NavLink to={url}>{breadCrumbsNameMap[url]}</NavLink>
  //         </Breadcrumb.Item>
  //     )
  //   })

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={toggle}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultActiveFirst
          items={[
            {
              key: "main",
              title: "Главная",
              label: "Главная",
              onClick: (event: any) => navigateTo("/"),
            },
            {
              key: "escrow",
              title: "Эскроу",
              label: "Эскроу",
              onClick: (event: any) => navigateTo("escrow"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header>
          {/* <div onClick={() => setToggle((prev) => !prev)}> test</div> */}
          <BreadCrumbsContainer />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
