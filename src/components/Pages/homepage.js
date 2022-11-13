import { Button, Container } from "react-bootstrap";

function Homepage() {
  return (
    <div>
      <Container>
        <div>
          <h1 className="title">Welcome to CRM Application</h1>
          <p className="subtitle">Build excellent customer relationships</p>
        </div>
        <div>
          <Button size="lg">Login</Button> <Button size="lg">Signup</Button>
        </div>
      </Container>
    </div>
  );
}

export default Homepage;
