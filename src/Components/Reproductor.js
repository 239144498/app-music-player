const Reproductor = ({ audioRef, cancionActual, setCancionActual, canciones, setCanciones, estaSonando, setEstaSonando, infoCancion, setInfoCancion, modoOscuro, volumen, setVolumen }) => {
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolumen(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="reproductor">
      {/* 其他控件 */}
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        value={volumen} 
        onChange={handleVolumeChange} 
      />
    </div>
  );
};

export default Reproductor;
