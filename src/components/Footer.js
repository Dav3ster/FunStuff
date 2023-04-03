import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../images/mtgHeader.png'

const styles = {
    footer: {
        display: 'flex',
        // background: 'linear-gradient(45deg,green,silver,dodgerblue)',
        padding: '10px',
        height: '275px',
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // border: 'solid 7.5px grey',
        backgroundImage: "url(" + image + ")",
        backgroundSize: 'contain',
    },
    linkTitle:{
        color: '#108B30',
        textShadow: '1px 2px 3px blue',
        fontFamily: 'palatino',
    },
}

function Footer() {
    return (
      <Container fluid>
        <Row style={styles.footer}>
         <Col md={12}>
            <center>
            {/* <h4 style={styles.linkTitle}>Additonal Links & Email</h4> */}
            <h4 style={styles.linkTitle} className= "mt-2">Davidstew87@gmail.com</h4><br></br><br></br><br></br>
            <a href="https://github.com/Dav3ster">Github Profile</a><br></br>
            <a href="https://www.linkedin.com/in/david-stewart-8b046725a/">Linkedin Profile</a>
            </center>
         </Col>
        </Row>
      </Container>
    );
  }

  export default Footer;