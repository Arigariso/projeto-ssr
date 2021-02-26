import React from 'react';
import {lazy, Suspense} from 'react';

const Imagem = lazy(() => import('./Imagem'));
const Frase = lazy(() => import('./Frase'));
const Footer = lazy(() => import('./Footer'));

function App() {
      return (
            

      <div className="App">

          <header>

            <Suspense fallback={<p>Aguarde...</p>}>
              <Imagem />
            </Suspense>
            
         </header>

          <main>
            <Suspense fallback={<p>Aguarde...</p>}>
              <Frase />
            </Suspense>
          </main>

          <Suspense fallback={<p>Carregando...</p>}>
            <Footer />
          </Suspense>

          
        </div> 
    );
}

export default App;


