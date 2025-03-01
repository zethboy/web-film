import { Row, Container, Col } from "react-bootstrap";
import './App.css'
import Navigationbar from './components/navbar'
import './style/landing.css'


function App() {
  return (
    <div>
      {/*intro section  */}
      <div className='myBG border'>
      <Navigationbar />
      <div>
        <Container className="text-white d-flex justify-content-center align-items-center border">
          <Row>
            <Col>TESTING</Col>
          </Row>
        </Container>
      </div>
      </div>
      {/* end intro section */}
    </div>
  );
}

export default App;
