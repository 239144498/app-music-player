import { useState } from 'react';

import ListaCanciones from './ListaCanciones';
import CancionSonando from './CancionSonando';
import Reproductor from './Reproductor';
import '../Styles/App.scss'; // Contiene estilos importados de todos los componentes
import chillHop from '../cancionesChillHop'; 

const App = () => {
  // State
  const [canciones, setCanciones] = useState( chillHop() );
  const [cancionActual, setCancionActual] = useState( canciones[0] );
  const [estaSonando, setEstaSonando] = useState(false);

  return (
    <div className="app">
      <h1>Reproductor Chill</h1>
      <CancionSonando cancion={cancionActual} estaSonando={estaSonando} />
      <Reproductor 
        cancionActual={cancionActual} 
        setCancionActual={setCancionActual}
        canciones={canciones}
        setCanciones={setCanciones} 
        estaSonando={estaSonando}
        setEstaSonando={setEstaSonando}       
      />
    </div>
  );
}

    // ++ State o variable 'reproduciendo' para que el disco note cuando girar.
	// -- transiciones o transformaciones en las presiones de boton.
	// -- variables de colores de texto y fondo para "modo oscuro".

export default App;