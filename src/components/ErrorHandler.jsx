import { useRouteError } from "react-router-dom";

const ErrorHandler = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold text-blue-900 mt-20">
        CRM Clientes
      </h1>
      <p className="text-center">Hubo un error</p>
      <p className="text-center">{error.message || error.statusText}</p>
    </div>
  );
};

export default ErrorHandler;
