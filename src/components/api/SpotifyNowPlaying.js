import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import getNowPlayingItem from "./SpotifyAPI";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./PlayingAnimation";
import Card from "react-bootstrap/Card";


const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (

    <Container fluid className="about-section">

      <Row style={{ justifyContent: "center", padding: "5px" }}>
      <Col xs={18} md={18} className="text-card">

          {result.isPlaying &&
            <div>
              <div>
                <h1 style={{ fontSize: "1.1em", paddingBottom: "10px" }}>
                  <SpotifyLogo /> <strong className="purple">Spotify</strong> Now Playing
                </h1>
              </div>
              <div className="d-flex justify-content-center">
                <div className="p-2">
                  <img src={result.albumImageUrl} width={50} height={50}
                  />
                </div>
                <div className="p-2">
                  {result.title} <br/>
                  {result.artist}
                </div>
                <div className="p-2">
                  <PlayingAnimation />
                  </div>
              </div>
            </div>
          }



          {!result.isPlaying &&
            <div>
              <SpotifyLogo /> Currently offline
            </div>

          }
      </Col>
    </Row>
    </Container >
 
  )
};

export default SpotifyNowPlaying;
