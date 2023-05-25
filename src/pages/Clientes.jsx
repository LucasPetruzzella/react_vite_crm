import { useLoaderData } from "react-router-dom";
import RowCliente from "../components/RowCliente";
import { obtenerClientes } from "../api/ClientesAPI";

export async function loader() {
  const clientes = await obtenerClientes();
  return clientes
}

const Clientes = () => {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Cliente</p>

      {clientes.length > 0 ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead>
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <RowCliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        "No Hay Clientes"
      )}
    </>
  );
};

export default Clientes;
