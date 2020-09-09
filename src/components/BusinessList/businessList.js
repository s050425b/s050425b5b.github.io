import React from 'react';
import "./businessList.css";
import Business from "../Business/business.js";
import { render } from '@testing-library/react';

class BusinessList extends React.Component{
    render(){
        return(
            <div className="BusinessList">
                {this.props.business.map(business =>{
                    return <Business  key={business.id} business={business} />
                })}
            </div>
        )
    }
}

export default BusinessList;