import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"


const ItemCount = () => { 
    const [countItem, setCountItem] = useState (1)
    const {count, setCount} = useContext(CartContext);

    const handleAdd = () => {
            setCountItem(countItem + 1);
    } 
    const handleRemove = () => {
            setCountItem(countItem - 1);
    }
  return (
    <div>
        <div style={{width: '50%', display: 'flex', alignItems: "center", justifyContent: "space-between", margin: "auto"}}>
      <Button onClick={handleRemove}>-</Button>
      <span>{countItem}</span>
      <Button onClick={handleAdd}>+</Button>
    </div>
    <Button style={{width: "100%", marginTop: "10px"}} 
    onClick={() => {
        setCount (count + countItem);
        setCountItem(1);
    }}
    >Agregar al Carrito</Button>
    </div>
  )
}

export default ItemCount
