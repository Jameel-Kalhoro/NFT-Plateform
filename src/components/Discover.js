import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NFT from '../assets/Images/nft.jpg';


function Discover(){
    return(
        <Container>
            <Row>
                <Col>
                    <h1 style={{marginTop:'50px', color:'white'}}>Discover</h1>
                </Col>
                <Col>
                    <p style={{marginLeft:'450px', marginTop:'60px', color:'white'}}>View All</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '300px', height:'350px', backgroundColor:'black', border: '2px solid white' }}>
                        <Card.Img variant="top" src={NFT} style={{width: '300px',height:'300px'}} />
                        <Card.Body>
                        <Card.Title style={{ whiteSpace: 'pre', color:'white' }}>Lorem Ipsum {'\t\t'} 1.20 Weth </Card.Title>
                        <Card.Text> -----------------------------------------</Card.Text>
                        <Card.Text style={{ whiteSpace: 'pre', color:'white' }}>Ends in 01.34.45 {'\t\t\t'} Buy</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '300px', height:'350px', backgroundColor:'black', border: '2px solid white' }}>
                        <Card.Img variant="top" src={NFT} style={{width: '300px',height:'300px'}} />
                        <Card.Body>
                        <Card.Title style={{ whiteSpace: 'pre', color:'white' }}>Lorem Ipsum {'\t\t'} 1.20 Weth </Card.Title>
                        <Card.Text> -----------------------------------------</Card.Text>
                        <Card.Text style={{ whiteSpace: 'pre', color:'white' }}>Ends in 01.34.45 {'\t\t\t'} Buy</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '300px', height:'350px', backgroundColor:'black', border: '2px solid white' }}>
                        <Card.Img variant="top" src={NFT} style={{width: '300px',height:'300px'}} />
                        <Card.Body>
                        <Card.Title style={{ whiteSpace: 'pre', color:'white' }}>Lorem Ipsum {'\t\t'} 1.20 Weth </Card.Title>
                        <Card.Text> -----------------------------------------</Card.Text>
                        <Card.Text style={{ whiteSpace: 'pre', color:'white' }}>Ends in 01.34.45 {'\t\t\t'} Buy</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '300px', height:'350px', marginTop:'30px', backgroundColor:'black', border: '2px solid white' }}>
                        <Card.Img variant="top" src={NFT} style={{width: '300px',height:'300px'}} />
                        <Card.Body>
                        <Card.Title style={{ whiteSpace: 'pre', color:'white' }}>Lorem Ipsum {'\t\t'} 1.20 Weth </Card.Title>
                        <Card.Text> -----------------------------------------</Card.Text>
                        <Card.Text style={{ whiteSpace: 'pre', color:'white' }}>Ends in 01.34.45 {'\t\t\t'} Buy</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '300px', height:'350px', marginTop:'30px', backgroundColor:'black', border: '2px solid white' }}>
                        <Card.Img variant="top" src={NFT} style={{width: '300px',height:'300px'}} />
                        <Card.Body>
                        <Card.Title style={{ whiteSpace: 'pre', color:'white' }}>Lorem Ipsum {'\t\t'} 1.20 Weth </Card.Title>
                        <Card.Text> -----------------------------------------</Card.Text>
                        <Card.Text style={{ whiteSpace: 'pre', color:'white' }}>Ends in 01.34.45 {'\t\t\t'} Buy</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '300px', height:'350px', marginTop:'30px', backgroundColor:'black', border: '2px solid white' }}>
                        <Card.Img variant="top" src={NFT} style={{width: '300px',height:'300px'}} />
                        <Card.Body>
                        <Card.Title style={{ whiteSpace: 'pre', color:'white' }}>Lorem Ipsum {'\t\t'} 1.20 Weth </Card.Title>
                        <Card.Text> -----------------------------------------</Card.Text>
                        <Card.Text style={{ whiteSpace: 'pre', color:'white' }}>Ends in 01.34.45 {'\t\t\t'} Buy</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button variant="outline-success" style={{margin:'50px', marginLeft:'500px' }} >Load More</Button>
                </Col>
            </Row>
        </Container>
    );

}

export default Discover;