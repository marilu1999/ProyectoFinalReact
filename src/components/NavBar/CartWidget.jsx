import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
    const { count } = useContext (CartContext);


    return (
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '35px', fontSize: '1.8rem'}}>
    🛒
    <span style={{fontWeight: 'bold', fontSize: '1rem', color: '#069AEA'}}>{count}</span>
</div>
    )
}

export default CartWidget;