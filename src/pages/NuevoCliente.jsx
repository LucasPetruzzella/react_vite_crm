import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import ErrorMessage from "../components/ErrorMessage";
import { agregarCliente } from "../api/ClientesAPI";

export async function action({request}){
    const formData = await request.formData()

    const datos = Object.fromEntries(formData)

    // Validacion
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push("Todos los campos son obligatorios")
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    const email = datos.email

    if(!regex.test(email)){
        errores.push("El Email no es válido")
    }

    // Retorna datos si hay errores
    if(errores.length > 0){
        return errores
    }

    await agregarCliente(datos)

    return redirect('/')
}

const NuevoCliente = () => {
    const errores = useActionData()
    const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena todos los campos para crear un cliente</p>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-800 text-white px-3 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {
            errores?.length > 0 && errores.map((error, index)  => (
                <ErrorMessage key={index}>{error}</ErrorMessage>
            )
            )
        }
        <Form
            method="POST"
            action={action}
            noValidate
            >
            <Formulario />

            <input
                type="submit"
                className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                value="Registrar Cliente"></input>
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
