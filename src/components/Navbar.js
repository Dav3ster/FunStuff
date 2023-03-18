import React from 'react';

import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Navbar';
import image from '../images/mtgHeader.png';


const styles = {
  name: {
   fontSize: '95px',
   fontFamily: 'palatino',
   color: '#108B30',
   textShadow: '2px 2px 3px blue',
   display: 'flex',
   justifyContent:'center'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundImage: "url(" + image + ")",
    backgroundSize: 'contain',
    // background: 'linear-gradient(45deg,red,silver,black,green,blue)',
    // border: 'solid 7.5px grey',
    width: 'auto'
  },
  container: {
    width: '100%',
    padding: '0',
  },
  tabs: {
    responsive: 'true'
  },
  tabItems: {
    display: 'flex',
    fontSize: '37.5px',
    color: '#108B30',
    padding: '5px',
    textShadow: '2px 2px 3px blue',
    textDecoration: 'none',
    height: '100%',
  
  },
  colstyles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ul:{
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 10px 0px 30px'  
  }
};

function HomeBar() {
  return (
    <>
      <Container fluid style={styles.container}>
        <Row bg="dark" style={styles.navbar}>
          <Col md={6} style={styles.colstyles}>
            
            <h1 style={styles.name}><center><strong>Magic Builds</strong></center></h1>
          </Col>
          <Col md={6} style={styles.colstyles}>
            <nav style={styles.tabs} className="nav">
              <ul style={styles.ul}>
                <li>
                  <Link to={"/"} style={styles.tabItems}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/Sign-in"} style={styles.tabItems}>
                    Sign-in
                  </Link>
                </li>
                <li>
                  <Link to={"/Deck-Builder"} style={styles.tabItems}>
                    Deck Builder
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeBar;