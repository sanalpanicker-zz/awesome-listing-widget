import React from 'react';
import $ from 'axios';
import _ from 'lodash';

import Header from './header';
import SortPanel from './sort_panel';
import ListPanel from './listing_panel';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listdata: {}
        };
    }
    //can be extended for multiple APIs
    dataMapper = (key, data) => {
        const batmanToSupermanMapper = {
            "cost": "price",
            "sq_ft": "sqft",
            "img": "thumb",
            "beds": "beds",
            "baths": "baths"
        }

        if (key === "batman") {
            return _.map(data, (items, address) => {
                const resultItemObj = _.mapKeys(items, function (value, key) {
                    if (value == "" | null | undefined) {
                        return;
                    }
                    return batmanToSupermanMapper[key];
                });
                return _.assign({}, {
                    address: address
                }, resultItemObj);
            });
        }
    }
    componentDidMount = () => {
        $.all([
            $.get('../../batmanRealty.json'),
            $.get('../../supermanRealty.json')
        ]).then((apiResponse) => {
            return apiResponse.reduce((initArray, item) => {
                return initArray.concat(item.data);
            }, [])
        }).then((dataArray) => {
            const formattedBatmanData = this.dataMapper('batman', dataArray[0]);
            const supermanData = dataArray[1].items;
            this.setState({
                listdata: _.merge({}, supermanData, formattedBatmanData)
            });
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <SortPanel
                    onFilterClick={listdata => this.setState({listdata})}
                    list={this.state.listdata}/>
                <ListPanel listDetail={this.state.listdata}/>
            </div>
        )
    }
}
export default App;
