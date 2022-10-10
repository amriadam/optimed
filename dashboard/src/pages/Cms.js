import { Row, Col, Card, Button, Descriptions } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { Form, Modal } from "react-bootstrap";
function Cms() {
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [formData, setFormData] = React.useState({
    description: "",
  });
  const { description } = formData;

  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [token, setToken] = React.useState(
    JSON.parse(localStorage.getItem("user")).token
  );
  const [apropos, setApropos] = React.useState("");
  const [aproposId, setAproposId] = React.useState("");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ` + token,
      },
    };
    axios.get("/api/cms/apropos/", config).then((response) => {
      setApropos(response.data[0].text);
      setAproposId(response.data[0]._id);
    });
  }, []);

  async function editApropos() {
    const config = {
      headers: {
        Authorization: `Bearer ` + token,
      },
    };
    const response = await axios.post(
      `/api/lunettes/${aproposId}`,
      formData,
      config
    );
    setApropos(formData.description);
  }
  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];
  return (
    <>
      <Card
        className="header-solid h-full"
        bordered={false}
        title={[<h6 className="font-semibold m-0">Edit your information</h6>]}
        bodyStyle={{ paddingTop: "0" }}
      >
        <Row gutter={[24, 24]}>
          <Col span={24} key={1}>
            <Card className="card-billing-info" bordered="false">
              <div className="col-info">
                <Descriptions title="À PROPOS">
                  <Descriptions.Item label="Text" span={3}>
                    {apropos}
                  </Descriptions.Item>
                </Descriptions>
              </div>
              <div className="col-action">
                <Button onClick={handleShow} type="link" className="darkbtn">
                  {pencil} Modifier
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
      {/* /************************************************************* */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier votre texte a propos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form encType="multipart/form-data">
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
          <Button variant="primary" onClick={editApropos}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ************************************************************** */}
    </>
  );
}

export default Cms;
