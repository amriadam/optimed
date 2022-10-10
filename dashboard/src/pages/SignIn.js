import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

import { Link } from "react-router-dom";
import gpLogo from "../assets/images/optimed.png";

import { Layout, Menu, Button, Row, Col, Typography, Form, Input } from "antd";
import signinbg from "../assets/images/dashboard image.jpg";
import axios from "axios";

const { Title } = Typography;
const { Header, Content } = Layout;

const signin = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
  >
    <path
      className="fill-muted"
      d="M12.25,14H1.75A1.752,1.752,0,0,1,0,12.25V3.5A1.752,1.752,0,0,1,1.75,1.75h.876V.875a.875.875,0,0,1,1.75,0V1.75h5.25V.875a.875.875,0,0,1,1.75,0V1.75h.875A1.752,1.752,0,0,1,14,3.5v8.75A1.752,1.752,0,0,1,12.25,14ZM3.5,4.375a.875.875,0,0,0,0,1.75h7a.875.875,0,0,0,0-1.75Z"
    />
  </svg>,
];
function SignIn() {
  const history = useHistory();

  const onFinish = async (values) => {
    console.log(values);

    try {
      const response = await axios.post("/api/users/login/", values);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.reload(false);
    } catch (error) {
      alert("les informations d'identification invalides");
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Layout className="layout-default layout-signin">
        <Header>
          <div className="header-col header-brand">
            <img
              style={{ width: "100px", height: "50px" }}
              src={gpLogo}
              alt="Logo"
            />
          </div>
          <div className="header-col header-nav">
            <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="4">
                <Link to="/sign-in">
                  {signin}
                  <span>S'identifier</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">S'identifier</Title>
              <Title className="font-regular text-muted" level={5}>
                Entrez votre email et votre mot de passe pour vous connecter
              </Title>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrer votre email!",
                    },
                    {
                      type: "email",
                      message: "Veuillez entrer un email valide",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  className="username"
                  label="Mot de passe"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrer votre mot de passe!",
                    },
                  ]}
                >
                  <Input placeholder="Mot de passe" />
                </Form.Item>

                {/* <Form.Item
                    name="remember"
                    className="aligin-center"
                    valuePropName="checked"
                    style={{
                      color: "#a527d1",
                    }}
                  >
                    <Switch defaultChecked onChange={onChange} />
                    Remember me
                  </Form.Item> */}

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      "background-color": "#a527d1",
                      "border-color": "#a527d1",
                    }}
                  >
                    SIGN IN
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}
export default SignIn;
