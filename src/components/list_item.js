import React from 'react';

export default class ListItem extends React.Component {

    render() {
        const listData = this.props.itemDetails;
        console.log(listData);
        return (
            <div className="card col-6">
                <p className="built card-text">
                    <small className="text-muted">Built in {listData.built}</small>
                </p>
                <img className="card-img-top" src={listData.thumb} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">
                        <b>{listData.address}</b>
                    </h5>
                    <h1>
                        <p className="card-text">{listData.price}</p>
                    </h1>
                    <h6 className="card-text">{listData.beds} beds
                        <span className="dot"></span>
                        {listData.baths} baths
                        <span className="dot"></span>
                        {listData.sqft} sq ft
                    </h6>
                </div>
            </div>
        )
    }
}
