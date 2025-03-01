import { Card, Row, Container, Col, Image } from 'react-bootstrap';
import cocoImg from '../assets/img/top/coco.jpg'
const Top = () => {
  return(
    <div>
      <Container>
        <Row>
          <Col className='movieImg'>
            <Card className="bg-dark text-white movieImg">
              <Image src={cocoImg} alt="coco image"/>
                <Card.Title className='text-center'>COCO</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Top