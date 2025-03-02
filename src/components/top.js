import { Card, Row, Container, Col, Image } from 'react-bootstrap';
import cocoImg from '../assets/img/top/coco.jpg'
const Top = () => {
  return(
    <div>
      <Container>
        <Row>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-4">
              <Image src={cocoImg} alt="coco image"/>
                <Card.Title className='text-center'>COCO</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-4">
              <Image src={cocoImg} alt="coco image"/>
                <Card.Title className='text-center'>COCO</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-4">
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