import React from "react";
import { Row, Col, Card, Container, Image } from "react-bootstrap";
import background from "../assets/background.png";
import thumbs from "../assets/data/thumbnail";
import { useQuery } from "react-query";
import { API } from "../config/api";

const Beranda = () => {
  let { data: musics } = useQuery("musicsCache", async () => {
    const response = await API.get("/musics");
    return response.data.data;
  });
  console.log("ini data musics", musics);
  return (
    <>
      <div className="position-relative">
        <Image className="w-100" src={background} />
        <div
          className="position-absolute text-white text-center"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              fontSize: "48px",
            }}
          >
            Connect on DumbSound
          </div>
          <div style={{ fontSize: "24px" }}>
            Discovery, Stream, and share a constantly expanding mix of music
            from emerging and major artists around the world
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#161616" }} className="pb-5">
        <Container>
          <div
            className="text-center py-5"
            style={{ fontSize: "24px", color: "#EE4622" }}
          >
            Dengarkan Dan Rasakan
          </div>
          <Row lg={6} md={4} sm={2} className="g-2">
            {thumbs?.map((item, index) => {
              return (
                <Col key={index}>
                  <Card className="bg-dark h-100">
                    <Card.Img variant="top" src={item.thumbnail} />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <Card.Title className="text-white">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-white">
                          {item.year}
                        </Card.Text>
                      </div>
                      <Card.Text className="text-white">
                        {item.artist.name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Beranda;
