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
    title: "Sexe",
    dataIndex: "sexe",
    key: "sexe",
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

function Lunettes() {
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
    if (e.target.value === "b") history.push("/Lentilles");
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
      .get("/api/lunettes/", config)
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
            sexe: (
              <>
                <div className="author-info">
                  <Title level={5}>{item.categorie}</Title>
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
    type: "",
    marque: "",
    categorie: "",
    quantite: "",
    description: "",
    photos: "",
    forme: "",
    matiere: "",
    couleur: "",
    montage: "",
    style: "",
  });
  const {
    type,
    marque,
    categorie,
    quantite,
    description,
    photos,
    forme,
    matiere,
    couleur,
    montage,
    style,
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

    const response = await axios.post("/api/lunettes/", formData, config);
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
      sexe: (
        <>
          <div className="author-info">
            <Title level={5}>{formData.categorie}</Title>
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
                  <Radio.Group onChange={onChange} defaultValue="a">
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

                    {/* --------------------------------------------------------------------------- */}
                    <Form.Group className="mb-3" controlId="genre">
                      <Form.Label>Genre</Form.Label>
                      <Form.Select
                        aria-label="genre"
                        name="categorie"
                        value={categorie}
                        onChange={(e) => onFormChange(e)}
                      >
                        <option>Choisir le genre de l'utulisateur</option>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                      </Form.Select>
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
                    <Form.Group className="mb-3" controlId="Matiere">
                      <Form.Label>Matiere</Form.Label>
                      <Form.Control
                        placeholder="Matière"
                        autoFocus
                        name="matiere"
                        value={matiere}
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
                    <Form.Group className="mb-3" controlId="Montage">
                      <Form.Label>Montage</Form.Label>
                      <Form.Control
                        placeholder="Montage"
                        autoFocus
                        name="montage"
                        value={montage}
                        onChange={(e) => onFormChange(e)}
                      />
                    </Form.Group>
                    {/* --------------------------------------------------------------------------- */}
                    <Form.Group className="mb-3" controlId="Style">
                      <Form.Label>Style</Form.Label>
                      <Form.Control
                        name="style"
                        placeholder="Style"
                        autoFocus
                        value={style}
                        onChange={(e) => onFormChange(e)}
                      />
                    </Form.Group>

                    {/* --------------------------------------------------------------------------- */}

                    <Form.Group className="mb-3" controlId="type">
                      <Form.Label>Type</Form.Label>
                      <Form.Select
                        aria-label="genre"
                        name="type"
                        value={type}
                        onChange={(e) => onFormChange(e)}
                      >
                        <option>Type de lunette</option>
                        <option value="Homme">Lunette de vue</option>
                        <option value="Femme">Lunette de soleil</option>
                      </Form.Select>
                    </Form.Group>

                    {/* --------------------------------------------------------------------------- */}
                    <Form.Group className="mb-3" controlId="forme">
                      <Form.Label>Forme</Form.Label>
                      <Form.Select
                        aria-label="forme"
                        name="forme"
                        value={forme}
                        onChange={(e) => onFormChange(e)}
                      >
                        <option>Forme de lunette</option>
                        <option value="Ronde">Ronde</option>
                        <option value="Aviateur">Aviateur</option>
                        <option value="Carré">Carré</option>
                        <option value="Rectangle">Rectangle</option>
                        <option value="Papillon">Papillon</option>
                        <option value="Pantos">Pantos</option>
                      </Form.Select>
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

export default Lunettes;
