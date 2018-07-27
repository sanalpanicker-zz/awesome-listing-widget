import React from 'react';
import $ from 'axios';
import _ from 'lodash';

import ListItem from './list_item';

class ListPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="row">
                {_.map(this.props.listDetail, (value, key) => {
                    return <ListItem key={key} itemDetails={value}/>
                })}
            </div>
        )

    }
}

export default ListPanel;
