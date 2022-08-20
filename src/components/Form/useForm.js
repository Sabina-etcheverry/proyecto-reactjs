import { useState, useContext } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { cartContext } from "../../context/cartContext";

export const useForm = (initialForm, validateForm) => {
  const { cart, deleteAll, totalCart } = useContext(cartContext);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const order = {
    buyer: {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
    },
    items: cart.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      cantidad: item.cantidad,
    })),
    total: totalCart(),
  };


const modalBasico = (id) => {
  Swal.fire({
    title: "Gracias por tu compra!",
    text: `Su Orden se identifica: (${id}) y ha sido realizado con éxito!`,
    icon: "success",
    confirmButtonText: "OK",
  });
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value,});
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      handleClick();
      deleteAll();
    } else {
      Swal.fire('Por favor complete el formulario para confirmar su compra')
    }
  };

  function handleClick() {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      modalBasico(id);
    });
  }

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};