import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Khardung from "./Khardung/Khardung";
import NubraValley from "./NubraValley/NubraValley";
import Thiksey from "./Thiksey/Thiksey";
import Pangong from "./Pangong/Pangong";
import "./Spots.css";

const Spots = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Container className="my-5 py-5">
        <Row>
          <Col md={3} sm={12}>
            <Nav
              defaultActiveKey="/home"
              className="flex-column p-5"
              style={{
                height: "490px",
                backgroundColor: "#ffb84d",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Nav.Link
                as={Link}
                to={`${url}`}
                className="bg-success text-white mt-3"
              >
                Top Travel Spots
              </Nav.Link>

              <Nav.Link as={Link} to={`${url}/nubra-valley`}>
                Nubra Valley
              </Nav.Link>
              <Nav.Link as={Link} to={`${url}/pangong-tso-lake`}>
                Pangong Tso Lake
              </Nav.Link>
              <Nav.Link as={Link} to={`${url}/thiksey-monastery`}>
                Thiksey Monastery
              </Nav.Link>
              <Nav.Link as={Link} to={`${url}/khardung-la-pass`}>
                Khardung-la Pass
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={9} sm={12} className="text-center">
            <Switch>
              <Route path={`${path}/nubra-valley`}>
                <NubraValley></NubraValley>
              </Route>
              <Route path={`${path}/pangong-tso-lake`}>
                <Pangong></Pangong>
              </Route>
              <Route path={`${path}/thiksey-monastery`}>
                <Thiksey></Thiksey>
              </Route>
              <Route path={`${path}/khardung-la-pass`}>
                <Khardung></Khardung>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Spots;
