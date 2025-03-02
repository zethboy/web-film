import { Card, Row, Container, Col, Image } from 'react-bootstrap';
import cocoImg from '../assets/img/top/coco.jpg'
import doraImg from '../assets/img/top/dora.jpg'
import homeImg from '../assets/img/top/homealone.jpg'
import insideImg from '../assets/img/top/insideout.jpg'
import interImg from '../assets/img/top/interstellar.jpg'
import titanicImg from '../assets/img/top/titanic.jpg'
const Top = () => {
  return(
    <div>
      <Container>
        <br />
        <h1 className='text-white' id='top'>TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={cocoImg} alt="coco image" className='topImage'/>
                <Card.Title className='text-center'>COCO</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={doraImg} alt="dora image" className='topImage'/>
                <Card.Title className='text-center'>DORA AND THE LOST CITY OF GOLD</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={homeImg} alt="home image" className='topImage' />
              <Card.Title className='text-center'>HOME ALONE</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={insideImg} alt="inside image" className='topImage'/>
                <Card.Title className='text-center'>INSIDE OUT 2</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={interImg} alt="inter image" className='topImage'/> 
                <Card.Title className='text-center'>INTERSTELLAR</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={titanicImg} alt="titanic image" className='topImage'/>
                <Card.Title className='text-center'>TITANIC</Card.Title>
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