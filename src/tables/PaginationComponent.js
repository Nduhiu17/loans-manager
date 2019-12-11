import React from 'react';
import Pagination from "react-js-pagination";


class PaginationComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemsCountPerPage:10,
            totalItemsCount:1
        };
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    render() {
        return (
            <div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={8}
                    onChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default PaginationComponent;