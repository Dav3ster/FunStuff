import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  container: {
    background: 'linear-gradient(20deg,black,white)',
    padding: '5px'
  },
  colstyles: {
    display: 'flex',
    padding: '25px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  photo: {
    display: 'flex',
    borderRadius: 30,
    border:'solid 7.5px black',
    width: 'auto',
    height: '500px',
    minHeight: '250px',
    minWidth: '350px'    
  },
  pIntro: {
    fontSize: '20px',
    fontFamily: 'palatino',
    color: 'black',
    textShadow: '2px 2px 3px blue',
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <Container fluid style={styles.container}>
    <Row>
       <Col lg={4} style={styles.col}>
        <center>
          <img src={require('../images/sectionImg1.jpg')} className='img-fluid' alt='planeswalker' style={styles.photo}/>
        </center>
       </Col>

       <Col lg={4}>
        <center style={styles.pIntro}>
          <p>Hello and welcome!</p><br></br>
          <p>I'am building this site to act as a magic the gathering deck builder, This is meant to be a fun tool
            where one can build, and save deck ideas before constructing them for real. This app will be built using
            react for the front end and mongo for the backend database, I plan to utilize MTG's open API to pull card
            information from. 
          </p>
        </center>
       </Col>

       <Col lg={4} style={styles.col}>
       <center>
       <img src={require('../images/Avacyn.jpg')} className='img-fluid' alt='planeswalker' style={styles.photo}/>
       </center>
       </Col>
    </Row>
   </Container>
  );
}

export default Section;
