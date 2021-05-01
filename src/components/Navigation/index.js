import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

 //initialize the section state
 function Nav(props) {
  const tabs = ['Home', 'Projects','Skills', 'Contact'];

    const {
      sections = [],
      setCurrentSection,
      currentSection,
      contactSelected,
      setContactSelected
    } = props;
  
    return (
        <nav className='navbar'>
            <h1 className='name'>
                erika.is()
            </h1>
            <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
        </nav>
    );
};

export default Nav;