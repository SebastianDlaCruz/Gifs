
import { useFetchGif } from "../../hook/useFetchGif";
import { GifItem } from "../pure/GifItem";
import '../../css/gifApp.css';
export const GifGrid = ({ category, dele }) => {

  const { imagenes, loading } = useFetchGif(category);

  return (
    <>
      <div className="contenedorCategoria">
        <h3>{category}</h3>
        <button onClick={() => dele(category)}>eliminar</button>
      </div>

      {/* Desplegar Listado */}
      <div className="card-grid">
        {
          loading ? <h2>Cargando...</h2> :
            imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
        }
      </div>
    </>
  )
}
