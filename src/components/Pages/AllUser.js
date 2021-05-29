import React from 'react';
import {DataGrid} from '@material-ui/data-grid'
const rows = [
    { id:1,col1: 1, col2: 'Hello', col3: 'World' },
    { id:2,col1: 2, col2: 'XGrid', col3: 'is Awesome'},
    { id:3,col1: 3, col2: 'Material-UI', col3: 'is Amazing'},
    { id:3,col1: 3, col2: 'Material-UI', col3: 'is Amazing' }
];

const columns= [
    { field: 'col1', headerName: 'ID', width: 150 },
    { field: 'col2', headerName: 'First Name', width: 150 },
    { field: 'col3', headerName: 'Last Name', width: 150 }
];
const AllUser = () => {
    return (
        <div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} />
            </div>
        </div>
    );
};

export default AllUser;
