import React , {useState} from 'react'
import {Input, Button,Typography} from '@material-ui/core';
import FileUpload from '../../utils/FileUpload'

function ItemCarga() {

    const [nombre, setNombre] = useState("");

    const [descripcion, setDescripcion] = useState("");

    const [precio, setPrecio] = useState(0)

    const [marca, setMarca] = useState("")

    const [stock, setStock] = useState(0)

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


    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            "nombre": nombre,
            "precio":precio,
            "descripcion":descripcion,
            "marca":marca,
            "stock":stock
        }
        

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(variables)
        };
        
        fetch('http://localhost:4000/api/productos/add', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
            // .then(data => setState({ postId: data.id }));
    }

    return (
        <div style={{maxWidth:'700px', margin:'2rem auto', marginTop:'10REM'}}>
            <div style={{textAlign: 'center', marginBottom:'2rem'}}>
                <h2> Carga de productos</h2>
            </div>


            <form onSubmit={onSubmit}>

            {/* <FileUpload/> */}
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

        </div>
        
    )
}

export default ItemCarga
