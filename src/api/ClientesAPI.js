const obtenerClientes = async () => {
  const URL = import.meta.env.VITE_API_URL;
  const response = await fetch(URL);
  const respuesta = await response.json();

  return respuesta;
};

const getClientes = async (id) => {
  const URL = `${import.meta.env.VITE_API_URL}/${id}`;
  const response = await fetch(URL);
  const respuesta = await response.json();

  return respuesta;
};

const agregarCliente = async (cliente) => {
  try {
    const URL = import.meta.env.VITE_API_URL;
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await response.json();
  } catch (error) {
    console.log(error);
  }
};

const editarCliente = async (idCliente, cliente) => {
  try {
    const URL = `${import.meta.env.VITE_API_URL}/${idCliente}`;
    const response = await fetch(URL, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await response.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteCliente = async (id) => {
  const URL = `${import.meta.env.VITE_API_URL}/${id}`;
  const response = await fetch(URL, {
    method: "DELETE",
  });
  const respuesta = await response.json();

  return respuesta;
};

export {
  obtenerClientes,
  agregarCliente,
  getClientes,
  editarCliente,
  deleteCliente,
};
