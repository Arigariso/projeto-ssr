import React from 'react';
import praia from '../src/praia.jpg'
import '../src/imagem.css'

export default function Imagem () {
    return (

        <div className="container-fluid">
            <div className='fundo'>        
            <img src={ praia } className="praia"/> 
        </div>
        
      </div>
                 
    )
}