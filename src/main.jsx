import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Clientes, {loader as clientesLoader} from './pages/Clientes'
import ErrorHandler from './components/ErrorHandler'
import EditarCliente from './pages/EditarCliente'
import { loader as loaderEditar, action as actionEditar } from './pages/EditarCliente'
import { action as actionEliminar } from './components/RowCliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Clientes />,
        loader: clientesLoader,
        errorElement: <ErrorHandler />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction
      },
      {
        path: '/clientes/:clienteId/',
        element: <EditarCliente />,
        loader:loaderEditar,
        errorElement: <ErrorHandler />,
        action: actionEditar
      },
      {
        path: '/clientes/:clienteId/eliminar',
        errorElement: <ErrorHandler />,
        action: actionEliminar
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
