import React from "react";
import { Container } from "react-bootstrap";

function Pay() {
  return (
    <div style={{ backgroundColor: "#161616" }}>
      <Container className="d-flex text-center flex-column align-items-center vh-100 justify-content-center gap-4 text-white">
        <div className="fw-bold" style={{ fontSize: "36px" }}>
          Premium
        </div>
        <div>
          Bayar sekarang dan nikmati streaming music yang kekinian dari{" "}
          <span className="fw-bold">
            <span style={{ color: "#EE4622" }}>DUMB</span>SOUND
          </span>
        </div>
      </Container>
    </div>
  );
}

export default Pay;
