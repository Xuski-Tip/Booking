import React from 'react';
import HeaderUpper from '../HeaderUpper';

import FooterInfo from '../FooterInfo';
import Tapbar from './Tapbar';
import PageContainer from './PageContainer';
const Header = (props) =>  {
        return (
            <>
                <HeaderUpper />
                <div className="container-fluid">
                    <PageContainer _history={props.history}/>
                </div>
                <FooterInfo />
            </>
        );

}
export default Header;
