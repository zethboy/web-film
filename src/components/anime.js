import { Card, Row, Container, Col, Image } from 'react-bootstrap';
import aotImg from '../assets/img/anime/aot.jpg'
import blueImg from '../assets/img/anime/bluelock.jpg'
import deathImg from '../assets/img/anime/deathnote.jpg'
import haikyuImg from '../assets/img/anime/haikyu.jpg'
import knyImg from '../assets/img/anime/kny.jpg'
import oneImg from '../assets/img/anime/onepiece.jpg'
const Anime = () => {
  return(
    <div>
      <Container>
        <br />
        <h1 className='text-white' id='anime'>ANIME</h1>
        <br />
        <Row>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={aotImg} alt="coco image" className='topImage'/>
                <Card.Title className='text-center'>ATTACK OF TITAN</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={blueImg} alt="dora image" className='topImage'/>
                <Card.Title className='text-center'>BLUE LOCK</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={deathImg} alt="home image" className='topImage' />
              <Card.Title className='text-center'>DEATHNOTE</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={haikyuImg} alt="inside image" className='topImage'/>
                <Card.Title className='text-center'>HAIKYU</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={knyImg} alt="inter image" className='topImage'/> 
                <Card.Title className='text-center'>KIMETSU NO YAIBA</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='movieWrap'>
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={oneImg} alt="titanic image" className='topImage'/>
                <Card.Title className='text-center'>ONE PIECE</Card.Title>
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

export default Anime