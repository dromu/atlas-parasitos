import Link from 'next/link'

export default function ArtefactosPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Link href="/parasites" className="inline-flex items-center text-blue-600 hover:underline mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Volver al índice</span>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Artefactos en Muestras Parasitológicas</h1>
      <p className="text-lg text-justify mb-4">
      Cuando se realiza un examen coproparasitologico las heces pueden venir acompañadas de residuos no digeridos de fibras vegetales o cristales 
      de electrolitos que provienen de la orina cuando no se ha tomado la muestra adecuadamente, estos elementos pueden ser confundidos con formas
      quisticas, larvarias o adultas de muchos parásitos intestinales.
      </p>

      <p className="text-lg text-justify mb-4">
      Estos son pelos vegetales que se confunden muy a menudo con larvas de Strongyloides stercoralis.
      </p>

      <div className="flex justify-center space-x-4 my-6">
      <img 
        src="/images/artefactos/pelo vegetal.jpg" 
        alt="pelo vegetal" 
        className="w-1/3 rounded-lg shadow-lg"
      />
      <img 
        src="/images/artefactos/pelo vegetal 02.jpg" 
        alt="pelo vegetal" 
        className="w-1/3 rounded-lg shadow-lg"
      />

    <img
        src="/images/artefactos/pelo vegetal 03.jpg" 
        alt="pelo vegetal" 
        className="w-1/3 rounded-lg shadow-lg"
      />
    </div>


    <p className="text-lg text-justify mb-4">
    Estos son restos de fibra y celulosa no digeridas que forman cumulos siendo confundidos muchas veces con huevos de nematodos y cestodos intestinales.
      </p>

      <div className="flex justify-center space-x-4 my-6">
      <img 
        src="/images/artefactos/artefacto.jpg" 
        alt="artefacto.jpg" 
        className="w-1/3 rounded-lg shadow-lg"
      />
      <img 
        src="/images/artefactos/artefacto 02.jpg" 
        alt="artefacto" 
        className="w-1/3 rounded-lg shadow-lg"
      />

    <img
        src="/images/artefactos/artefacto 03.jpg" 
        alt="artefacto " 
        className="w-1/3 rounded-lg shadow-lg"
      />
    </div>

    <p className="text-lg text-justify mb-4">
    Estas son formaciones cristalinas de muestras fecales contaminadas con orina, que en un momento dado pueden confundir la lectura del examen.
      </p>

      <div className="flex justify-center space-x-4 my-6">
      <img 
        src="/images/artefactos/cristal.jpg" 
        alt="artefacto.jpg" 
        className="w-1/3 rounded-lg shadow-lg"
      />
      <img 
        src="/images/artefactos/artefacto coca-cola.jpg" 
        alt="artefacto" 
        className="w-1/3 rounded-lg shadow-lg"
      />

    </div>


    <p className="text-lg text-justify mb-4">
    Estas son blastoconidias (foto 1) y macroconidias (foto2) que en algunas oportunidades 
    pueden estar contaminando la muestra de materia fecal, confundiendo el diagnostico 
    parasitológico, o dando indicios de una verdadera infección intestinal por hongos que 
    deberá ser confirmada con otro tipo de estudios.
      </p>

      <div className="flex justify-center space-x-4 my-6">
      <img 
        src="/images/artefactos/blastoconidias.jpg" 
        alt="blastoconidias." 
        className="w-1/3 rounded-lg shadow-lg"
      />
      <img 
        src="/images/artefactos/macroconidia.jpg" 
        alt="macroconidia." 
        className="w-1/3 rounded-lg shadow-lg"
      />

    </div>
      
    </div>
  )
}

