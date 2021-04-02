import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

const Signup = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">Signup page</h2>
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <SignupComponent />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
