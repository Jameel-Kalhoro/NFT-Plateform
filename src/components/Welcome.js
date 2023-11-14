import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NFT from '../assets/Images/nft.jpg';


function Welcome (){
    return (
        <Container>
          <Row>
            <Col >
                <h1 style={{color: 'white'}} >Discover, collect,</h1>
                <h1 style={{color: 'white'}} >and charity in</h1>
                <h1 style={{color: 'white'}} >extraordinary NFT</h1>
                <h1 style={{color: 'white'}} >marketplace</h1>
                <p style={{color: 'white', fontSize:'18px'}} >In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
                <Button variant="outline-success">Explore</Button>
                <Button variant="outline-success" style={{marginLeft: '10px'}}>Create</Button>

            </Col>
            <Col>
                <Card style={{ width: '600px', backgroundColor:'black', border: '2px solid white' }}>
                    <Card.Img variant="top" src={NFT} style={{width: '600px'}} />
                    <Card.Body>
                    <Card.Title style={{ whiteSpace: 'pre', color:'white' }}>Laura {'\t\t\t\t\t\t\t\t\t'} WE ARE HERE</Card.Title>
                    <Card.Text style={{ whiteSpace: 'pre', color:'white' }}> 0.2 weth {'\t\t\t\t\t\t\t\t\t\t\t\t\t'} 20 </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      );

}

export default Welcome;