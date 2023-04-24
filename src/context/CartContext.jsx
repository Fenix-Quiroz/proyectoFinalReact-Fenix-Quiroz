import { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const addProduct = (product) => {
     const cartProduct = products.find(p => p.id == product.id);
     if(cartProduct) return;
    setProducts([...products, { ...product, quantity: 1 }])
  };

  const changeProductQuantity = (productId, newQuantity) => {
    const cartProduct = products.find(p => p.id == productId);
    cartProduct.quantity = newQuantity;
    setProducts([...products])
  }
  const clearProducts = () => {
    setProducts([])
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Gracias por su compra!",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <CartContext.Provider value={{ addProduct , products, changeProductQuantity , clearProducts}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
