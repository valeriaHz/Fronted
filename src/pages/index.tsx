import Link from "next/link";

export default function Home() {
  

  return (
    <div className="flex flex-col items-center justify-center px-6 py-4">
    
      <>
      <Link href="/nuevo"><button className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded mt-3">Nuevo Servicio</button></Link>
      <Link href="/clientes"><button className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded mt-3">Clientes</button></Link>
      <Link href="/motos"><button className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded mt-3">Motos</button></Link>
      <Link href="/servicios"><button className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded mt-3">Servicios</button></Link>
      <Link href="/proxServicios"><button className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded mt-3">Proximos Servicios</button></Link>
      </>
    </div>
  )
}