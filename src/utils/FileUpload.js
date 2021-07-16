
// import React from 'react'
// import Dropzone from 'react-dropzone';
// import AddIcon from '@material-ui/icons/Add';

// function FileUpload() {

//     const onDrop = (files) => {
//         let formData = new FormData();
//         const config = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ title:  }),
//         }
//         formData.append('file', files[0])

//         fetch(`http://localhost:4000/api/productos/item/${id}`)
//         .then(res => res.json())
//         .then(data => setItems(data))
//     }

//     return (
//         <div style={{display:'flex', justifyContent:'space-between'}}>
//             <Dropzone onDrop={onDrop}>
//                 {({getRootProps, getInputProps}) => (
//                     <section>
//                     <div style={{width:'300px', height:'240px', border:'1px solid lightgray', display:'flex', alignItems:'center', justifyContent:'center'}}  {...getRootProps()}>
//                         <input {...getInputProps()} />
//                         <AddIcon style={{fontSize:'3rem'}}/>
//                         <p></p>
//                     </div>
//                     </section>
//                 )}
//             </Dropzone>

//             <div style={{display:'flex', width:'350px', height:'240px', overflow:'scroll' }}>
//                 <div onClick>
//                     <img/>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default FileUpload;
