export const chequearContinuar = (estaSonando, audioRef) => {
  if(estaSonando) {
    const promesaReproducir = audioRef.current.play();
    if(promesaReproducir !== undefined)
      promesaReproducir.then( audio => audioRef.current.play() );
  };
};