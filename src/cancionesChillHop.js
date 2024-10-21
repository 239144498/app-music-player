import { v4 as uuidv4 } from 'uuid';

function cancionesChillHop() {
  return [
    {
      id: uuidv4(),
      nombre: "随机",
      portada: "https://img.icons8.com/fluency/48/music.png", 
      artista: "随机",
      audio: "https://music.naiher.me/",
      colores: ["#FDD0BD", "#564E89"],
      reproduciendo: true
    }   
  ];
}

export default cancionesChillHop;
