import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faQuestionCircle, faEnvelope, faFolderOpen, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Bootstrap Sidebar</h2>
        <Nav vertical>
          <NavItem>
            <NavLink href="#"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><FontAwesomeIcon icon={faInfoCircle} /> About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><FontAwesomeIcon icon={faFolderOpen} /> Pages <FontAwesomeIcon icon={faCaretDown} /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><FontAwesomeIcon icon={faFolderOpen} /> Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><FontAwesomeIcon icon={faQuestionCircle} /> FAQ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><FontAwesomeIcon icon={faEnvelope} /> Contact</NavLink>
          </NavItem>
        </Nav>
      </div>

      {/* Mobile View */}
      <div className="mobile-view">
        <Navbar color="faded" light>
          <NavbarToggler onClick={toggleMobile} className="mr-2" />
          <NavbarBrand href="/">Bootstrap Sidebar</NavbarBrand>
          <Collapse isOpen={isMobileOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><FontAwesomeIcon icon={faInfoCircle} /> About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><FontAwesomeIcon icon={faFolderOpen} /> Pages <FontAwesomeIcon icon={faCaretDown} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><FontAwesomeIcon icon={faFolderOpen} /> Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><FontAwesomeIcon icon={faQuestionCircle} /> FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><FontAwesomeIcon icon={faEnvelope} /> Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Sidebar;
