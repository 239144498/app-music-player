import { useState, useRef } from 'react';

import ListaCanciones from './ListaCanciones';
import CancionSonando from './CancionSonando';
import Reproductor from './Reproductor';
import '../Styles/App.scss'; // Contiene estilos importados de todos los componentes
import chillHop from '../cancionesChillHop'; 

const App = () => {
  // State
  const [canciones, setCanciones] = useState( chillHop() );
  const [cancionActual, setCancionActual] = useState( canciones[0] );
  const [estaSonando, setEstaSonando] = useState(false);  const [infoCancion, setInfoCancion] = useState({
    currentTime: 0,
    duration: 0,
  });

  // Handlers
  const manejoCambioTiempo = evento => {
    const {currentTime, duration} = evento.target;
    setInfoCancion( {...setInfoCancion, currentTime, duration} );
  }

  //Referencias
  const audioRef = useRef(null);
  
  return (
    <div className="app">
      <CancionSonando cancion={cancionActual} estaSonando={estaSonando} />
      <Reproductor 
        audioRef={audioRef}
        cancionActual={cancionActual} 
        setCancionActual={setCancionActual}
        canciones={canciones}
        setCanciones={setCanciones} 
        estaSonando={estaSonando}
        setEstaSonando={setEstaSonando}
        infoCancion={infoCancion}
        setInfoCancion={setInfoCancion}
      />
      <ListaCanciones 
        canciones={canciones} 
        setCanciones={setCanciones}
        cancionActual={cancionActual} 
        setCancionActual={setCancionActual} 
        audioRef={audioRef}
        estaSonando={estaSonando}
      />
      <audio 
        onTimeUpdate={manejoCambioTiempo} 
        onLoadedMetadata={manejoCambioTiempo}
        ref={audioRef} 
        src={cancionActual.audio} 
      />
    </div>
  );
}

    // ++ State o variable 'reproduciendo' para que el disco note cuando girar.
	// -- transiciones o transformaciones en las presiones de boton.
	// -- variables de colores de texto y fondo para "modo oscuro".

export default App;