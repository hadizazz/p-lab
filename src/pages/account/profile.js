import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ToggleButton,
  Radio,
} from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DatePicker from "react-date-picker";
import { BiUserCircle } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";

const Profile = () => {
  const [value, onChange] = useState(new Date());
  const [navigation, setNavigation] = useState(1);
  const [section, setSection] = useState(1);
  const accessToken = localStorage.getItem("accessToken");
  const [user, setUser] = useState("");
  const [user_name, setUser_Name] = useState("");
  const [email, setEmail] = useState("");
  // const [birth_date, setBirth_Date] = useState();
  const [gender, setGender] = useState("");
  const [phone_number, setPhone_Number] = useState("");
  const navigate = useNavigate();

  function parseJwt(accessToken) {
    if (!accessToken) {
      return;
    }
    const base64Url = accessToken.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  const getUser = async () => {
    const jwtoken = parseJwt(accessToken);
    const id = jwtoken.id;
    const response = await axios.get(`http://localhost:3001/user/` + id);
    setUser(response.data);
    setUser_Name(response.data.user_name);
    setEmail(response.data.email);
    setGender(response.data.gender);
    setPhone_Number(response.data.phone_number);
  };

  useEffect(() => {
    getUser();
  }, []);

  const saveUser = async (e) => {
    e.preventDefault();
    // const formData = new FormData()
    const info = {
      user_name: user_name,
      gender: gender,
      email: email,
      phone_number: phone_number,
    };
    const a = await axios.patch("http://localhost:3001/user/" + user.id, info);
    navigate("/");
    console.log(a);
  };
  // console.log(saveUser);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "Male", value: "Male" },
    { name: "Female", value: "Female" },
    { name: "Other", value: "Other" },
  ];

  return (
    <div>
      <Container>
        <Row>
          <div className="my-2">
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-style" href="/">
                {" "}
                Hompage{" "}
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="breadcrumb-style">
                My Profile{" "}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Col sm="2">
            <h2 className="text-start">My Account</h2>
            <div className="sideBar">
              <ul>
                <li>
                  <a
                    href="#personal-information"
                    className="nav-link"
                    onClick={() => setNavigation(1)}
                  >
                    <BiUserCircle className="me-2" />
                    Account{" "}
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="profile">
              {navigation === 1 ? (
                <div id="personal-information">
                  <h4>My Details</h4>
                  <h6 className="my-4">Personal Information</h6>
                  <div className="lines my-2"></div>
                  <Row>
                    <Col>
                      <p>
                        Assertively utilize adaptive customer service for
                        future-proof platforms. Completely drive optimal
                        markets.
                      </p>
                    </Col>
                    <Col>
                      <Form
                        onSubmit={saveUser}
                        method="POST"
                        encType="multipart/form-data"
                      >
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Col sm="8">
                            <Form.Control
                              type="name"
                              value={user_name}
                              onChange={(e) => setUser_Name(e.target.value)}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email address</Form.Label>
                          <Col sm="8">
                            <Form.Control
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" as={Col}>
                          <Form.Label as="legend" column sm={2}>
                            Gender <span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Row>
                            <Col>
                              <div>
                                <ButtonGroup className="mb-2">
                                  {radios.map((radio, idx) => (
                                    <ToggleButton
                                      key={idx}
                                      id={`radio-${idx}`}
                                      type="radio"
                                      name="radio"
                                      variant="outline-dark"
                                      value={radio.value}
                                      style={{ marginRight: "10px" }}
                                      checked={gender === radio.value}
                                      onChange={(e) =>
                                        setGender(e.target.value)
                                      }
                                    >
                                      {radio.name}
                                    </ToggleButton>
                                  ))}
                                </ButtonGroup>
                              </div>
                            </Col>
                          </Row>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Phone Number</Form.Label>
                          <Col sm="5">
                            <Form.Control
                              type="text"
                              value={phone_number}
                              onChange={(e) => setPhone_Number(e.target.value)}
                            />
                          </Col>
                        </Form.Group>
                        <div>
                          <Button
                            size="lg"
                            variant="success"
                            type="submit"
                            style={{ color: "#fff" }}
                          >
                            {" "}
                            Save{" "}
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </div>
              ) : (
                " "
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
