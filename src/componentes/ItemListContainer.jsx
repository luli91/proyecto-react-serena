import {useEffect, useState} from 'react'
import { getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';


const ItemListContainer = () => {

    const{id} = useParams() // obtengo ID del producto de la URL
    const [product, setProduct] = useState ([]) // Este es el estado donde guardarás los datos del producto
    console.log(product)

    useEffect(() => {
        const obtenerProductos = async () => {
            const db = getFirestore();
            const productosCollection = collection(db, "temporada 2023");
            const productosSnapshot = await getDocs(productosCollection);
            const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProduct(productosList);
        }
        obtenerProductos();
    }, []);


    return (
        <div>
            <h1>Productos</h1>
            {product.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>Precio: {producto.precio}</p>
                    <p>Descripción: {producto.descripcion}</p>
                    <p>Categoría: {producto.categoria}</p>
                    {/* Si tienes una URL de imagen, puedes descomentar la siguiente línea */}
                    {/* <img src={producto.imagen} alt={producto.nombre} /> */}
                </div>
            ))}
        </div>
    )
}

export default ItemListContainer