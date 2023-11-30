import {
  startEliminarServicio,
  startObtenerServicio,
} from "@/store/slices/servicio/thunks";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const dispatch: AppDispatch = useDispatch();

  const { servicios } = useSelector((state: RootState) => state.servicio);

  useEffect(() => {
    dispatch(startObtenerServicio());
  }, []);

  const handleEliminarDatos = (id: any) => {
    dispatch(startEliminarServicio(id));
  };

  return (
    <div>
      <div className="mt-20 container mx-auto flex flex-col">
        <h1 className="text-lg md:text-xl xl:text-2xl text-center font-extrabold text-orange-700">
          Servicios
        </h1>
      </div>
      <div className="relative overflow-x auto mt-5">
        <table className="w-full text-sm text-center text-black dark:text-black">
          <thead className="text-xs text-white uppercase bg-red-50 dark:bg-purple-800 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ver
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Anticipo
              </th>
              <th scope="col" className="px-6 py-3">
                Kilometraje
              </th>
              <th scope="col" className="px-6 py-3">
                Combustible
              </th>
              <th scope="col" className="px-6 py-3">
                Concepto
              </th>
              <th scope="col" className="px-6 py-3">
                Presupuesto
              </th>
              <th scope="col" className="px-6 py-3">
                Observaciones
              </th>
              <th scope="col" className="px-6 py-3">
                Prox. Servicio
              </th>
              <th scope="col" className="px-6 py-3">
                Actualizar
              </th>
              <th scope="col" className="px-6 py-3">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((service) => {
              return (
                <tr className="bg-white border-b dark:bg-purple-300 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    <Link href={`./servicios/${service._id}`}>
                      <button
                        type="button"
                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Ver
                      </button>
                    </Link>
                  </th>
                  <td className="px-6 py-4">{service.fecha}</td>
                  <td className="px-6 py-4">{service.anticipo}</td>
                  <td className="px-6 py-4">{service.kilometraje}</td>
                  <td className="px-6 py-4">{service.combustible}</td>
                  <td className="px-6 py-4">{service.concepto}</td>
                  <td className="px-6 py-4">{service.presupuesto}</td>
                  <td className="px-6 py-4">{service.observaciones}</td>
                  <td className="px-6 py-4">{service.proximo}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link href={`./servicios/actualizar/${service._id}`}>
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Actualizar
                      </button>
                    </Link>
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <button
                      type="button"
                      className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3"
                      onClick={() => handleEliminarDatos(service._id)}
                    >
                      Eliminar Datos
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <a href="http:./"><button className="bg-indigo-500 hover.bg-gray-500 text-white font-bold py-2 px-4 border-b-4">Regresar</button></a>
      </div>
    </div>
  );
}
