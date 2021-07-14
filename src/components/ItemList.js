import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Item from './Item'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:theme.spacing(3),
    paddingTop: '5rem'
  },
}));

export default function ItemList() {
  const classes = useStyles();

  const [items, setItems] = useState([])

  useEffect(() =>{
      fetch("http://localhost:4000/api/productos/")
      .then(res => res.json())
      .then(data => setItems(data));
    
  },[])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {items.map(item => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item item={item}/>
          </Grid>
        ))}
        
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item/>
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item/>
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item/>
        </Grid> */}
      </Grid>
    </div>
  );
}
