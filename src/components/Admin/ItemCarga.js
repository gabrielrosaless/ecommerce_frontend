import React , {useState, useEffect} from 'react'
import {Input, Button,Typography, Snackbar} from '@material-ui/core';
import useToken from '../../utils/useToken';
import { Alert } from '@material-ui/lab';
import { useParams } from "react-router-dom";

function ItemCarga() { //Es el ItemDetailAdmin

    /* ------------ VARIABLES ---------------- */
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0)
    const [marca, setMarca] = useState("")
    const [stock, setStock] = useState(0)
    const { token, setToken } = useToken();

    const [imagen, setImagen] = useState("");

    const onNombreChange = (event) => {
        setNombre(event.currentTarget.value);
    }

    const onDescripcionChange = (event) => {
        setDescripcion(event.currentTarget.value);
    }

    const onPrecioChange = (event) => {
        setPrecio(event.currentTarget.value);
    }

    const onMarcaChange = (event) => {
        setMarca(event.currentTarget.value);
    }

    const onStockChange = (event) => {
        setStock(event.currentTarget.value);
    }

    ///////--------------------------------

    const onFileChange = (e) => {
        // console.log('file to upload:', e.target.value);
        // let file = e.target.value;
        // if (file){
        //     let buf = Buffer.from(file, 'base64');
        //     console.log(buf.toString('base64'));
        // }
    }

    /* ----------------------------------- */

    
    /* -----Traigo los datos de un item ----- */ 
    const [flag, setFlag] = useState(false); // Lo uso para saber si es put o post -> True = Edit
    const { id } = useParams();

    useEffect(() =>{
        fetch(`http://localhost:4000/api/productos/item/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.length>0){
                    setFlag(true);
                    setNombre(data[0].nombre);
                    setDescripcion(data[0].descripcion);
                    setStock(data[0].stock);
                    setPrecio(data[0].precio);
                    setMarca(data[0].marca);
                }
            })
        },[])
        

    /* -------------------------------- */ 

    /*----- Alertas ------ */ 
    const [open, setOpen] = useState(false);
    const [alertExito, setAlertExito] = useState(false);
    const [mensaje, setMensaje] = useState("");
   
    const handleAlert = (exito) => {
        
        if (exito){
            setAlertExito(true);
        }else{
            setOpen(true);
        }
        
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        setAlertExito(false);
    };
    /*---------------------*/


    const onSubmit = (event) => {
        event.preventDefault();
        const preview = document.getElementById('picture');

        const variables = {
            "nombre": nombre,
            "precio":precio,
            "descripcion":descripcion,
            "marca":marca,
            "stock":stock,
            "imagen":imagen,
        }
        
        if (flag){
            
            const requestOptionsPUT = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json',
                            'authorize': token || "" },
                body: JSON.stringify(variables)
            };

            fetch(`http://localhost:4000/api/productos/update/${id}`, requestOptionsPUT)
            .then(response => {
                if (response.ok){
                    setMensaje("Producto editado correctamente.")
                    handleAlert(true)
                    console.log(response)
                }
                else{
                    setMensaje("Error! El producto no fue editado.");
                    handleAlert(false);
                    console.log('Respuesta de red OK pero respuesta HTTP no OK');
                }
            })
            .catch(error => {
                console.log("Hubo un problema con la petición Fetch: " + error.message);
            });
        }
        else{
            const requestOptionsPOST = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                            'authorize': token || "" },
                body: JSON.stringify(variables)
            };
            fetch('http://localhost:4000/api/productos/add', requestOptionsPOST)
                        .then(response => {
                            console.log(response.ok);
                            if (response.ok){
                                setMensaje("Producto agregado correctamente.")
                                handleAlert(true)
                                console.log(response)
                            }
                            else{
                                setMensaje("Error! El producto no fue agregado.");
                                handleAlert(false);
                                console.log('Respuesta de red OK pero respuesta HTTP no OK');
                            }
                        })
                        .catch(error => {
                            console.log("Hubo un problema con la petición Fetch: " + error.message);
                        });
        }

        

        
        preview.src = 'data:image/png;base64,' + imagen


    }
    
    return (
        <div style={{maxWidth:'700px', margin:'2rem auto', marginTop:'10REM'}}>
            <div style={{textAlign: 'center', marginBottom:'2rem'}}>
                <h2> Carga de productos</h2>
            </div>


            <form onSubmit={onSubmit}>
            
            <input type='text' name='image' id='file' onChange={onFileChange}></input>
            <image id='picture' src=""></image>

            <br/>
            <br/>

            <Typography variant='h5'>Nombre</Typography>
            <Input fullWidth='true' onChange={onNombreChange} value={nombre}/>
            

            <br/>
            <br/>
            <Typography variant='h5'>Descripcion</Typography>
            <Input fullWidth='true' onChange={onDescripcionChange} value={descripcion}/>

            <br/>
            <br/>
            <Typography variant='h5'>Precio ($) </Typography>
            <Input fullWidth='true' onChange={onPrecioChange} value={precio} type='number'/>


            <br/>
            <br/>
            <Typography variant='h5'>Marca </Typography>
            <Input fullWidth='true' onChange={onMarcaChange} value={marca}/>

            <br/>
            <br/>
            <Typography variant='h5'>Stock </Typography>
            <Input fullWidth='true' onChange={onStockChange} value={stock} type='number'/>

            <br/>
            <br/>
            <Button size='large' type='button' variant='contained' color='primaty' onClick={onSubmit}> 
                Guardar 
            </Button>

            </form>
            <Snackbar onClose={handleClose} open={open} autoHideDuration={3000}>
                <Alert onClose={handleClose} severity="error">{mensaje}</Alert>
            </Snackbar>
            <Snackbar onClose={handleClose} open={alertExito} autoHideDuration={3000}>
                <Alert onClose={handleClose} severity="success">{mensaje}</Alert>
            </Snackbar>
        </div>
        
    )
}

export default ItemCarga
