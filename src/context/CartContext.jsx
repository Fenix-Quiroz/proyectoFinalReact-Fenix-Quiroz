import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const cartProduct = products.find((p) => p.id == product.id);
    
    if (cartProduct) return;
    setProducts([...products, { ...product, quantity: 1 }]);
    Toastify({
      text: "Producto agregado",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "left", 
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, red , blue ",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  };

  const changeProductQuantity = (productId, newQuantity) => {
    const cartProduct = products.find((p) => p.id == productId);
    cartProduct.quantity = newQuantity;
    setProducts([...products]);
  };
  const clearProducts = () => {
    setProducts([]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Gracias por su compra!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const removeProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts([...updatedProducts]);
  };

  return (
    <CartContext.Provider
      value={{
        addProduct,
        products,
        changeProductQuantity,
        clearProducts,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
