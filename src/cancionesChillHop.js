import { useState, useEffect } from 'react';
import axios from 'axios';

interface Cancion {
  id: string;
  nombre: string;
  portada: string;
  artista: string;
  audio: string;
  colores: string[];
  lyric: string;
  reproduciendo: boolean;
}

function useCancionesChillHop() {
  const [canciones, setCanciones] = useState<Cancion[]>([]);

  useEffect(() => {
    const fetchCanciones = async () => {
      try {
        // 获取 ID 列表
        const response = await axios.get('https://music-api.naiher.me/mlist');
        const ids = response.data;

        // 获取每个 ID 的详细信息
        const cancionesPromises = ids.map(async (id: string) => {
          const detailResponse = await axios.get(`http://222.132.234.76:5000/Song_V1?ids=${id}&level=jymaster&type=json`);
          const songData = detailResponse;

          return {
            id: id,
            nombre: songData.name,
            portada: songData.pic,
            artista: songData.ar_name,
            audio: songData.url,
            colores: songData.colores || ["#FDD0BD", "#564E89"], // 默认颜色
            lyric: songData.lyric,
            reproduciendo: false
          };
        });

        const cancionesData = await Promise.all(cancionesPromises);
        setCanciones(cancionesData);
      } catch (error) {
        console.error("Error fetching songs:", error);
        // 如果 API 请求失败，可以设置一些默认数据
        setCanciones([
          {
            id: "default",
            nombre: "默认歌曲",
            portada: "https://img.icons8.com/fluency/48/music.png",
            artista: "未知艺术家",
            audio: "https://music-api.naiher.me/music/random",
            colores: ["#FDD0BD", "#564E89"],
            string: "歌词未找到",
            reproduciendo: false
          }
        ]);
      }
    };
    fetchCanciones();
  }, []);

  return canciones;
}

export default cancionesChillHop;
