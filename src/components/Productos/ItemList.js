import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Item from './Producto/Item'
import useStyles from './styles';
import { Pagination } from '../index';

export default function ItemList() { //{pagination:{size , page}}
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] =useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() =>{
      fetch(`http://localhost:4000/api/productos/?size=${rowsPerPage}&page=${page+1}`) 
      .then(res => res.json())
      .then(data => setItems(data))
  },[rowsPerPage, page])
  
  useEffect(() =>{
    fetch(`http://localhost:4000/api/productos/totalProductos`) 
    .then(res => res.json())
    .then(data => setTotal(data[0].total))
  },[])


  return (

    <div className={classes.root}>
      <Pagination page={page} rowsPerPage={rowsPerPage} setPage={setPage} setRowsPerPage={setRowsPerPage} total={total}/>
      <Grid container justifyContent="center" spacing={3}>
        {items.map(item => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item item={item}/>
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
}
