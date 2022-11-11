import { useState , useEffect} from 'react'

/* import './App.css' */
import axios from 'axios'
import CardPeliculas from './components/CardPeliculas';
import Navbar from './components/NavarPelicula/Navbar';
import Busqueda from './components/SearchPelicula/Busqueda';
function App() {
  const [pelicula,setPelicula] = useState([]);
  const [tablaPelicula, setTablaPelicula] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  //JALANDO LA DATA DEL API
  const getPelicula = async () =>{
    const response = await axios.get("https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json")
    setPelicula(response.data.entries)
  }


  const handleChange = e =>{ 
    setBusqueda(e.target.value);
    console.log("busqueda: "+ e.target.value)
    filtrar(e.target.value)
  }

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaPelicula.filter((elemento)=>{
      if(elemento.tittle.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      
      ){
        return elemento;
      }
    });
    setPelicula(resultadosBusqueda);
  }

  useEffect(() => {
    getPelicula()
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Busqueda handleChange={handleChange} busqueda={busqueda}></Busqueda>
      <CardPeliculas pelicula={pelicula}></CardPeliculas>
    </div>
  )
}

export default App
