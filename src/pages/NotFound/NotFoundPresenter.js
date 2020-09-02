import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "../../components";

/**
 * NotFoundPresenter
 */
const NotFoundPresenter = () => (
  <Container card pageHistory={["Home", "NotFound page"]}>
    <Helmet>
      <title>NotFoundPage : BoilerPlate</title>
    </Helmet>
    <div>
      <h1>NotFoundPage 입니다.</h1>
    </div>
  </Container>
);
export default NotFoundPresenter;
