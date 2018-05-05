import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
    return (
        <div id="wrapper" >
            {children}
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.object
};

export default MainLayout;
