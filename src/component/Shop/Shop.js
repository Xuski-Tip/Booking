import React from 'react';
import HeaderUpper from '../HeaderUpper';

import FooterInfo from '../FooterInfo';
import Tapbar from './Tapbar';
import PageContainer from './PageContainer';
class Header extends React.Component {
    render() {
        return (
            <>
                <Tapbar />
                <HeaderUpper />
                <div className="container-fluid">
                    <PageContainer />
                </div>
                <FooterInfo />
            </>
        );
    }
}
export default Header;
