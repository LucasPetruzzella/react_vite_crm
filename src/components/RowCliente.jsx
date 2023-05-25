import { useNavigate } from "react-router-dom";
import { deleteCliente } from "../api/ClientesAPI";
import { Form, redirect } from "react-router-dom";

export async function action({ params }) {
  const respuesta = confirm("¿Confirma Eliminar al cliente?");

  const idCliente = params.clienteId;
  console.log(idCliente);
  if (respuesta) {
    deleteCliente(idCliente);
    return redirect("/");
  }

  return null
}

const RowCliente = ({ cliente }) => {
  const navigate = useNavigate();

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{cliente.nombre}</p>
        <p>{cliente.empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {cliente.email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {cliente.telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => {
            navigate(`/clientes/${cliente.id}`);
          }}
        >
          Editar
        </button>

        <Form method="POST" action={`/clientes/${cliente.id}/eliminar`}>
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default RowCliente;
