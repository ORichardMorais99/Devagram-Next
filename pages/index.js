/*import Head from 'next/head';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Avatar from '../componentes/avatar';
import Botao from '../componentes/botao';
import { UploadImagem } from '../componentes/uploadImagem';*/

import Login from "../componentes/login";

export default function Index() {
  
  return (
    <>
    <Login />
    </>
  )
}


/* 
 <h1>Hello, World!</h1>
    <button onClick={() => referenciaInput?.current?.click()}>Abrir seletor de arquivos</button>

    <UploadImagem 
    setImagem={setImagem} 
    imagemPreview={imagem?.preview}
    aoSetarAReferencia={(ref) => referenciaInput.current = ref} />

    <div style={{width: 200}}>
    <Avatar />
    <Botao texto={'Login'} cor='invertido' manipularClick={() => console.log('Botão clicado!')} />
    </div>
*/


/*
const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);
  
  console.log(imagem); 
 */