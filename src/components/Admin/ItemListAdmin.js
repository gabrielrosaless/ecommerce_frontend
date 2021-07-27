import React, {useEffect, useState} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import useStyles from './styles';
import { Typography, Button, Modal } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom";
import useToken from '../../utils/useToken';




function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

 

export default function ItemListAdmin() {
    const classes = useStyles();

    let history = useHistory();

    function onClickEdit(item){
        history.push('/admin-items/' + item.Id);
    }

    const { token, setToken } = useToken();
    const [id, setId] = useState(0);
    const [items, setItems] = useState([]);
    const [render, setRender] = useState(false)

    /*---------------MODAL -----------------------*/
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);

    const handleClose = () => {
        setOpen(false);
    };
    /*---------------MODAL -----------------------*/
    
    useEffect(() =>{
        fetch(`http://localhost:4000/api/productos/all`) 
        .then(res => res.json())
        .then(data => setItems(data))
    },[render])

    const Grilla = () => {
        // Truco para poder tener un 'id' virtual, 
        //el datagrid necesita un campo id con minuscula, y en la bd viene con Mayuscula (Id)
        if (items.length > 0){  
            items.map((prod) => {
                prod['id'] = prod.Id
            })
            return (
                <DataGrid disableColumnSelector disableDensitySelector  disableSelectionOnClick rowsPerPageOptions={[5,10,20]} rows={items} columns={columns} pageSize={5}/>
            )
        }
        else{
            return (<Typography variant="h5" color="inherit" align="center" className={classes.vacio}> No hay productos cargados aún.</Typography>)
        }
        
    }

    const peticionDelete= (idProducto)=> {

        if (idProducto > 0){
            
            fetch(`http://localhost:4000/api/productos/delete/${idProducto}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  'authorize': token || ""
                }}) 
            .then(res => res.json())
            .then(setOpen(false))
            .then(setRender(!render))
            .catch( err => {
                console.log(err);
            })
        }
    }

    const body = (
        <div style={modalStyle} className={classes.modal}>
            <p>¿Estás seguro que deseas eliminar el producto? </p>
            <div align="right" className={classes.btnEliminar}>
                <Button variant="contained" type="button" color="secondary" onClick={() => peticionDelete(id)} >Sí</Button>
                &nbsp;
                <Button variant="contained" type="button" onClick={() => handleClose(id)}>No</Button>
            </div>
        </div>
    )

    function onClickDelete(item){
        console.log(item);
        setOpen(true);
        setId(item.Id);
    }
    
    const renderDetailsButton = (params) => {

        return (
            <strong>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{  }}
                    onClick={() => {
                        onClickEdit(params.row)
                    }}
                >
                    <EditIcon />
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    style={{ marginLeft: '10px'}}
                    onClick={() => {
                        onClickDelete(params.row)
                    }}
                >
                    <DeleteIcon />
                </Button>
                <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                {body}
                </Modal>
            </strong>
        )
    }

    const columns = [
        { field: 'Id', headerName: 'ID', width: 100 },
        {
          field: 'nombre',
          headerName: 'Nombre',
          width: 150,
        },
        {
          field: 'descripcion',
          headerName: 'Descripción',
          width: 200,
        },
        {
          field: 'marca',
          headerName: 'Marca',
          width: 150,
        },
        {
          field: 'precio',
          headerName: 'Precio',
          width: 150,
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 150,
        },
        {
            field: 'acciones',
            headerName: 'Acciones',
            renderCell: renderDetailsButton,
            width:150
        }
    ];
    
    console.log(render);
    return (
        <div className={classes.root}>
            <Typography variant="h4" color="inherit" align="left" className={classes.titulo} > Lista de items </Typography>
            <br/>
            <div className={classes.datagrid}>
                <Grilla/>
            </div>
        </div> 
  );
}

