import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export default function Pagination({page, rowsPerPage, setPage, setRowsPerPage, total}) {


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
      
  return (
    <TablePagination
      component="div"
      count={total}
      rowsPerPageOptions={[5,8,10,20]} 
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
