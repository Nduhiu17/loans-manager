import React from 'react';
import {Card, Table} from 'react-bootstrap';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


$.DataTable = require( 'datatables.net-bs' );
require( 'jszip' );
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');
require( 'datatables.net-autofill' );
require( 'datatables.net-buttons-bs' );
require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.flash.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' );
require( 'datatables.net-buttons/js/buttons.print.js' );
require( 'datatables.net-colreorder' );
require( 'datatables.net-keytable' );
require( 'datatables.net-responsive-bs' );
require( 'datatables.net-rowgroup' );
require( 'datatables.net-rowreorder' );
require( 'datatables.net-scroller' );
require( 'datatables.net-select' );
require( 'datatables.net-fixedcolumns' );
require( 'datatables.net-fixedheader' );

const names = [
    {
        "name": "Super admin",
        "description": "Super admin role",
        "createdby": "Patrick",
        "createdon": "2011/04/25",
        "action": "activate"
    },
    {
        "name": "Super admin",
        "description": "Super admin role",
        "createdby": "Patrick",
        "createdon": "2011/04/25",
        "action": "activate"
    },
   {
        "name": "Super admin",
        "description": "Super admin role",
        "createdby": "Patrick",
        "createdon": "2011/04/25",
        "action": "activate"
    },
    {
        "name": "Super admin",
        "description": "Super admin role",
        "createdby": "Patrick",
        "createdon": "2011/04/25",
        "action": "activate"
    }
];

function atable() {
    let tableButton = '#edited-user-group-table';
    let tableBtns = [
        {
            text: 'Clear Filters',
            className: "clr-filters-btn btn btn-danger",
            action: function ( e, dt, node, config ) {
                // make function clear all text inputs on page via jquery
                clearfilter()
            }
        },
        {
            extend: 'copyHtml5',
            text: 'Copy',
            className: "btn btn-secondary"
        },
        {
            extend: 'csvHtml5',
            text: 'CSV',
            className: "btn btn-secondary"
        },
        {
            extend: 'print',
            text: 'Print',
            className: "btn btn-secondary"
        }
    ];

    let buttonTable = $(tableButton).DataTable( {
        dom: 'Bfrti',
        data: names,
        order: [[ 0, "asc" ]],
        columns: [
            { "data": "name", render: function (data, type, row) {return data;}},
            { "data": "description", render: function (data, type, row) {return data;}},
            { "data": "createdby", render: function (data, type, row) {return data;}},
            { "data": "createdon", render: function (data, type, row) {return data;}},
            { "data": "action", render: function (data, type, row) {return data;}},
        ],
        buttons: tableBtns,
    });

    function clearfilter() {
        $('.search-it').find('input:text').val('');
        buttonTable
            .search( '' )
            .columns().search( '' )
            .draw();
    }

    new $.fn.dataTable.Buttons( buttonTable, {
        buttons: [
            {
                extend: 'columnsToggle',
                text: 'Toggle Cols',
            }
        ]
    });
    buttonTable.buttons( 1, null ).container().appendTo('#toggle');
}

class EditedUserGroupTable extends React.Component {

    componentDidMount() {
        atable()
    }

    render() {
        return (
                <Card.Body>
                    <Table ref="tbl" striped hover responsive bordered className="table table-condensed" id="edited-user-group-table">
                        <thead>
                        <tr>
                            <th>Role Name</th>
                            <th>Description</th>
                            <th>Created By</th>
                            <th>Created On</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                        <th>Role Name</th>
                            <th>Description</th>
                            <th>Created By</th>
                            <th>Created On</th>
                            <th>Action</th>
                        </tr>
                        </tfoot>
                    </Table>
                </Card.Body>
        );
    }
}

export default EditedUserGroupTable;