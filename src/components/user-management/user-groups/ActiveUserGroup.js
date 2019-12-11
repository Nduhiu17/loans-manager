import React,{useState} from 'react';
import UserGroupTable from "../../../tables/UserGroupTable";
import data from '../../../tables/jsonData';
import PaginationComponent from "../../../tables/PaginationComponent";

const ActiveUserGroup = () => {

    const [currentPage,setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    const sortBy = (key) => {


        const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

        const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
                v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
        )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));


        document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
            const table = th.closest('table');
            Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
                .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
                .forEach(tr => table.appendChild(tr) );
        })));
    };

    const indexOfLastPage = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastPage - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem,indexOfLastPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return (
                <div>
                    <UserGroupTable data={currentItems} sortBy={sortBy}/>
                    <PaginationComponent itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate}/>

                </div>
        );
};


export default ActiveUserGroup;

