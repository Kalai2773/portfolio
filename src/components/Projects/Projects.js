import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/kalai.png";
//import chatify from "../../Assets/Projects/chatify.png";
//import suicide from "../../Assets/Projects/suicide.png";
//import bitsOfCode from "../../Assets/Projects/blog.png";
//import brainy from "../../Assets/Projects/brainy.png";
//import music from "../../Assets/Projects/music.png";
//import kuiz from "../../Assets/Projects/kuiz.png";
import weather from "../../Assets/Projects/weather.png";
import lap from "../../Assets/Projects/lapportt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
  </Col>*/}
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lap}
              isBlog={false}
              title="Portfolio"
              description="Portfolio an online representation of work you have created, as well as your skills and experiences.
              It is made by React Js."
              ghLink="https://github.com/Kalai2773/portfolio"
              demoLink="https://kalai.systems"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecaste"
              description="Weather Forecast is a interactive website that shows the weather of the place when you search it.It is made using React Js.Aligns only for Laptop screens, soon for Mobiles"
              ghLink="https://github.com/Kalai2773/weather-api"
              demoLink="https://kalai-weather.vercel.app"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Discord bot(Arti)"
              description="a moderation and fun discord bot made on python..discord.py API used and added more fun commands. "
              ghLink="https://github.com/Kalai2773/discord-bot-py"
              demoLink="https://discord.com/channels/@me/1017603739462402170"              
            />
          </Col>

         {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
