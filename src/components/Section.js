import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  container: {
    margin: '5px',
    // background: 'linear-gradient(20deg,dodgerblue,green,silver)',
  },
  colstyles: {
    display: 'flex',
    padding: '25px',
    justifyContent: 'space-evenly',
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
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <Container fluid style={styles.container}>
    <Row>
       <Col m={4} style={styles.col}>
       <img src={require('../images/sectionImg1.jpg')} className='img-fluid' alt='planeswalker' style={styles.photo}/>
       </Col>

       <Col m={4}>
        <center>
          <p>Intro to the site placeholder</p>
        </center>
       </Col>

       <Col m={4} style={styles.col}>
       <img src={require('../images/Avacyn.jpg')} className='img-fluid' alt='planeswalker' style={styles.photo}/>
       </Col>
    </Row>
   </Container>
  );
}

export default Section;
