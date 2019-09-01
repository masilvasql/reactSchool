import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import university from './icon/university.png'
import './styles.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="primary" fixed light expand="md">
                    <NavbarBrand href="/">
                        <div className='divLogo'>
                            <div>
                                <img src={university} className = 'logo' />
                            </div>
                            <div className='divTitulo'>
                                <h3>React School</h3>
                            </div>
                        </div>
                        

                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className='navLink' href="#"><h3>Sobre</h3></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navLink' href="#"><h3>Como Chegar</h3></NavLink>
                            </NavItem>
                            <UncontrolledDropdown className='navLink' nav inNavbar>
                               <DropdownToggle nav caret>
                                    <label className='labelDetalhes'>Detalhes</label>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}