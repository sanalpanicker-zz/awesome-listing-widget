import React from 'react';

class SortPanel extends React.Component {

    render() {
        return (
            <div className="s-panel">
                <div
                    className="b_price btn btn-primary"
                    onClick={() => this.props.onFilterClick(_.sortBy(this.props.list, 'price'))}>Price</div>
                <div
                    className="b_beds btn btn-secondary"
                    onClick={() => this.props.onFilterClick(_.sortBy(this.props.list, 'beds'))}>Beds</div>
                <div
                    className="b_sqft btn btn-danger"
                    onClick={() => this.props.onFilterClick(_.sortBy(this.props.list, 'sqft'))}>Sq.ft</div>
            </div>
        )
    }
}

export default SortPanel;
