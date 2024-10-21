import { v4 as uuidv4 } from 'uuid';

function cancionesChillHop() {
  return [
    {
      id: uuidv4(),
      nombre: "随机1",
      portada: "https://img.icons8.com/fluency/48/music.png", 
      artista: "随机1",
      audio: "https://music.naiher.me/random1",
      colores: ["#FDD0BD", "#564E89"],
      reproduciendo: true
    },{
      id: uuidv4(),
      nombre: "随机2",
      portada: "https://img.icons8.com/fluency/48/music.png", 
      artista: "随机2",
      audio: "https://music.naiher.me/random2",
      colores: ["#FDD0BD", "#564E89"],
      reproduciendo: true
    } 
  ];
}

export default cancionesChillHop;
