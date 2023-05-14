import React from "react";
import { Col, Row } from "react-bootstrap";
//import { CgCPlusPlus } from "react-icons/cg";
import { FaVuejs } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  //SiPytorch,
  SiBootstrap,
  //SiNextdotjs,
  SiMysql,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/*<CgCPlusPlus />*/}
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/*<SiNextdotjs />*/}
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/*<SiPytorch />*/}
        <SiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;

