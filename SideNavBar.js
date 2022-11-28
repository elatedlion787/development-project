import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './SideNavBar.css';

export default function SideNavBar(onSelect) {
    return (
        <Nav className="container-nav">
        <Container>
            <Row>
                <h5> Vegetarian Friendly </h5>
                <Col sm={4}>
                    <Nav.Item> <Nav.Link eventKey="all"></Nav.Link><input type='radio' name='v_friendly' id="all_v_friendly" value='all'/> 
                    <label for="all_v_friendly"> All Foods</label>
                    </Nav.Item>
                    <Nav.Item><Nav.Link eventKey="v_friendly"></Nav.Link><input type='radio' name='v_friendly' id="is_v_friendly" value='True'/>
                    <label for="is_v_friendly"> Vegetarian Friendly</label></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="not_v_friendly"></Nav.Link><input type='radio' name='v_friendly' id="is_not_v_friendly" value='False'/>
                    <label for="is_v_friendly"> Non-Vegetarian Friendly</label>
                    </Nav.Item> 
                </Col>
            </Row>

            <Row>
                <h5> Type of Food </h5>
                <Col sm={4}>
                    <Nav.Item> <input type='radio' name='type' id="all" value='all'/>
                    <label for="type"> All </label> </Nav.Item>
                    <Nav.Item> <input type='radio' name='type' id="Noodle" value='Noodle'/>
                    <label for="type"> Noodle </label> </Nav.Item>
                    <Nav.Item> <input type='radio' name='type' id="Soup" value='Soup'/>
                    <label for="type"> Soup</label> </Nav.Item>
                    <Nav.Item> <input type='radio' name='type' id="Curry" value='Curry'/>
                    <label for="type"> Curry</label> </Nav.Item>
                </Col>
            </Row>
            <Row>
                <h5> Sort By: </h5>
                <Col sm={4}>
                    <Nav.Item> <input type='radio' name='sort' id="price" value='price'/>
                    <label for="type"> Price Low-High</label> </Nav.Item>

                    <Nav.Item> <input type='radio' name='sort' id="price" value='price'/>
                    <label for="type"> Price High-Low</label> </Nav.Item>
                </Col>
            </Row>
        </Container>
        </Nav>
    );
}