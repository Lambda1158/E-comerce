// import React from "react";
// import { useDispatch } from 'react-redux';
// import { filteredCat } from "../../actions";


// export function FilteredCat(){
//     const dispatch= useDispatch();
    
    
//     function handleCatFilter(e){
//         e.preventDefault();
//         dispatch(filteredCat(e.target.value));
//     };

//     return (
//          <div>
//              <span>Categorias: </span>
//              <select onChange= {(e) => handleCatFilter(e)}>
//              <option value='todas'>Todas</option>
//              <option value='Programación y Tecnologias'>Programación y Tecnologias</option>
//              <option value='Arte'>Arte</option>
//              <option value='Botánica'>Botánica</option>
//              <option value='Cocina'>Cocina</option>
//              <option value='Negocios'>Negocios</option>
//              <option value='Deporte'>Deporte</option>
//              <option value='Música y Audio'>Música y Audio</option>
//              <option value='Ilustración, Video y Fotografia'>Ilustración, Video y Fotografia</option>
//              <option value='Marketing'>Marketing</option>
//              <option value='Escritura y Traducción'>Escritura y Traducción</option>
//              <option value='Idioma'>Idioma</option>
//              <option value='Baile'>Baile</option>
//              <option value='Historia y Cultura'>Historia y Cultura</option>
//              <option value='Educación'>Educación</option>
//              <option value='Mantenimiento del hogar'>Mantenimiento del hogar</option> 
//             </select>
//         </div>
//            )
//     };