import { AppDispatch, RootState } from "@/store/store";
import { startProximoServicio } from "@/store/slices/servicio/thunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {

  const dispatch: AppDispatch = useDispatch();

  const { servicios } = useSelector((state: RootState) => state.servicio);

  useEffect(() => {

    dispatch(startProximoServicio());
  }, []);
  return (
    <div>
      <div className="mt-20 container mx-auto flex flex-col">
        <h1 className="text-lg md:text-xl xl:text-2xl text-center font-extrabold text-orange-700">
          {" "}
          Proximos Servicios
        </h1>
      </div>
      <div className="relative overflow-x auto mt-5">
        <table className="w-full text-sm text-center text-white dark:text-white">
          <thead className="text-xs text-white uppercase bg-red-50 dark:bg-green-700 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Proximo Servicio
              </th>
              <th scope="col" className="px-6 py-3">
                Moto
              </th>
              <th scope="col" className="px-6 py-3">
                Cliente
              </th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((service) => {
              return (
                <tr className="bg-white border-b dark:bg-green-800 dark:border-green-700">
                  
                  <td className="px-6 py-4">{service.proximo}</td>
                  <td className="px-6 py-4">{service.moto.modelo}</td>
                  <td className="px-6 py-4">{service.moto.cliente.nombres} {service.moto.cliente.apellidos}</td>
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
