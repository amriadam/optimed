import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

import { Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col, Card, Radio, Table, Button, Avatar, Typography } from "antd";
import { useHistory } from "react-router-dom";

import face2 from "../assets/images/face-2.jpg";
import { set } from "mongoose";
import { Prev } from "react-bootstrap/esm/PageItem";
import { Space, Switch } from "antd";

const { Title } = Typography;

// table code start
const columns = [
  {
    title: "Lunettes",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "couleur",
    dataIndex: "couleur",
    key: "couleur",
  },

  {
    title: "Type",
    key: "type",
    dataIndex: "type",
  },
  {
    title: "Quantite",
    key: "quantite",
    dataIndex: "quantite",
  },
];

function Lentilles() {
  /**filter and pagination  */

  const [data, setData] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [token, setToken] = React.useState(
    JSON.parse(localStorage.getItem("user")).token
  );
  // ************************************************************************
  const history = useHistory();

  // ************************************************************************
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
    if (e.target.value === "a") history.push("/Lunettes");
  };
  //------------------------------------------------------------------------
  useEffect(() => {
    console.log();
    const config = {
      headers: {
        Authorization: `Bearer ` + token,
      },
    };
    axios
      .get("/api/lentille/", config)
      .then((response) => {
        const data = [];
        response.data.map((item, index) => {
          data.push({
            key: index,
            name: (
              <>
                <Avatar.Group>
                  <Avatar
                    className="shape-avatar"
                    shape="square"
                    size={40}
                    src={face2}
                  ></Avatar>
                  <div className="avatar-info">
                    <Title level={5}>{item.marque}</Title>
                  </div>
                </Avatar.Group>{" "}
              </>
            ),
            couleur: (
              <>
                <div className="author-info">
                  <Title level={5}>{item.couleur}</Title>
                </div>
              </>
            ),
            type: (
              <>
                <div className="author-info">
                  <Title level={5}>{item.type}</Title>
                </div>
              </>
            ),
            quantite: (
              <>
                <div className="author-info">
                  {item.quantite === 0 ? (
                    <Title style={{ color: "red" }} level={5}>
                      {item.quantite}
                    </Title>
                  ) : (
                    <Title level={5}>{item.quantite}</Title>
                  )}
                </div>
              </>
            ),
          });
        });

        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, data);

  const [formData, setFormData] = useState({
    marque: "",

    quantite: "",
    type: "",
    filtreUv: true,
    couleur: "",
    fournisseur: "",
    description: "",
    photos: "",
  });
  const {
    marque,
    type,
    quantite,
    filtreUv,
    couleur,
    fournisseur,
    description,
    photos,
  } = formData;

  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //------------------------------------------------------------------------
  async function add() {
    const config = {
      headers: {
        Authorization: `Bearer ` + token,
      },
    };

    const response = await axios.post("/api/lentille/", formData, config);
    /************************************* */
    const x = {
      key: data.length - 1,
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face2}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>{formData.marque}</Title>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      couleur: (
        <>
          <div className="author-info">
            <Title level={5}>{formData.couleur}</Title>
          </div>
        </>
      ),
      type: (
        <>
          <div className="author-info">
            <Title level={5}>{formData.type}</Title>
          </div>
        </>
      ),
      quantite: (
        <>
          <div className="author-info">
            {formData.quantite === 0 ? (
              <Title style={{ color: "red" }} level={5}>
                {formData.quantite}
              </Title>
            ) : (
              <Title level={5}>{formData.quantite}</Title>
            )}
          </div>
        </>
      ),
    };

    /************************************ */
    setData((prev) => [...prev, x]);
    setShow(false);
    console.log(formData);
  }
  //------------------------------------------------------------------------

  console.log(data);
  return !data ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Produits"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="b">
                    <Radio.Button value="a">Lunettes</Radio.Button>

                    <Radio.Button value="b">Lentilles</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={true}
                  className="ant-border-space"
                />
              </div>
            </Card>

            <Col span={24} md={6}></Col>
            <Col span={24} md={24} className="header-control">
              <Button onClick={handleShow} type="danger" className="tag-danger">
                Ajouter un produit +
              </Button>
              {/* /************************************************************************************ * */}

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Ajouter un produit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form encType="multipart/form-data">
                    {/* --------------------------------------------------------------------------- */}
                    <Form.Group className="mb-3" controlId="marque">
                      <Form.Label>Marque</Form.Label>
                      <Form.Control
                        placeholder="Marque"
                        autoFocus
                        name="marque"
                        value={marque}
                        onChange={(e) => onFormChange(e)}
                      />
                    </Form.Group>
                    {/* --------------------------------------------------------------------------- */}
                    <Form.Group className="mb-3" controlId="type">
                      <Form.Label>Type</Form.Label>
                      <Form.Control
                        placeholder="Type"
                        autoFocus
                        name="type"
                        value={type}
                        onChange={(e) => onFormChange(e)}
                      />
                    </Form.Group>
                    {/* --------------------------------------------------------------------------- */}
                    <Form.Group className="mb-3" controlId="filtreUv">
                      <Form.Label>Filtre UV</Form.Label>

                      <br />
                      <Switch
                        checkedChildren="Oui"
                        unCheckedChildren="Non"
                        defaultChecked
                        onChange={(e) => {
                          console.log("e :", e);
                          setFormData({ ...formData, filtreUv: e });
                        }}
                      />
                    </Form.Group>
                    {/* --------------------------------------------------------------------------- */}

                    <Form.Group className="mb-3" controlId="quantite">
                      <Form.Label>Quantite</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Quantite"
                        autoFocus
                        name="quantite"
                        value={quantite}
                        onChange={(e) => onFormChange(e)}
                      />
                    </Form.Group>
                    {/* --------------------------------------------------------------------------- */}
                    <Form.Group className="mb-3" controlId="fournisseur">
                      <Form.Label>Fournisseur</Form.Label>
                      <Form.Control
                        placeholder="fournisseur"
                        autoFocus
                        name="fournisseur"
                        value={fournisseur}
                        onChange={(e) => onFormChange(e)}
                      />
                    </Form.Group>
                    {/* --------------------------------------------------------------------------- */}
                    <Form.Group className="mb-3" controlId="Couleur">
                      <Form.Label>Couleur</Form.Label>
                      <Form.Control
                        placeholder="Couleur"
                        autoFocus
                        name="couleur"
                        value={couleur}
                        onChange={(e) => onFormChange(e)}
                      />
                    </Form.Group>

                    {/* --------------------------------------------------------------------------- */}
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Importer une image</Form.Label>
                      <Form.Control
                        type="file"
                        name="photos"
                        value={photos}
                        onChange={(e) => onFormChange(e)}
                      />
                    </Form.Group>
                    {/* --------------------------------------------------------------------------- */}

                    <Form.Group className="mb-3" controlId="description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={description}
                        onChange={(e) => onFormChange(e)}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={add}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* /************************************************************************************ * */}
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Lentilles;
