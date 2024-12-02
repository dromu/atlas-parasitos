import Link from 'next/link'

export default function LeucocitosMateriafecalPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Link href="/parasites" className="inline-flex items-center text-blue-600 hover:underline mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Volver al índice</span>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Leucocitos en Materia Fecal</h1>
      <p className="text-lg text-justify mb-4">
        La aparición de polimorfonucleares en heces, visualizados con la ayuda de la coloración de Wright ayuda a correlacionar el diagnostico clínico.
      </p>

      <h2 className="text-xl font-semibold mb-2"> Eósinofilos</h2>

      <div className="flex justify-center space-x-4 my-6">
      <img 
        src="/images/leucocitos/eosinofilo 02.jpg" 
        alt="eosinofilo 02.jpg" 
        className="w-1/3 rounded-lg shadow-lg"
      />
      <img 
        src="/images/leucocitos/eosinofilo.jpg" 
        alt="eosinofilo" 
        className="w-1/3 rounded-lg shadow-lg"
      />
    </div>

    <h2 className="text-xl font-semibold mb-2">  Neutrófilos</h2>

      <div className="flex justify-center space-x-4 my-6">
      <img 
        src="/images/leucocitos/neutrofilo.jpg" 
        alt="eosinofilo 02.jpg" 
        className="w-1/3 rounded-lg shadow-lg"
      />
      <img 
        src="/images/leucocitos/neutrofilo 02.jpg" 
        alt="neutrofilo 02" 
        className="w-1/3 rounded-lg shadow-lg"
      />
    </div>

    <h2 className="text-xl font-semibold mb-2">  Linfocitos</h2>

      <div className="flex justify-center space-x-4 my-6">
      <img 
        src="/images/leucocitos/linfocito.jpg" 
        alt="linfocito.jpg" 
        className="w-1/3 rounded-lg shadow-lg"
      />
      <img 
        src="/images/leucocitos/linfocito 02.jpg" 
        alt="linfocito 02.jpg" 
        className="w-1/3 rounded-lg shadow-lg"
      />
    </div>



 
    </div>
  )
}

