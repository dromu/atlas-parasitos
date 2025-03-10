import Link from 'next/link'

export default function DedicatoriaPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Dedicatoria</h1>
      
      
      <p className="text-lg">
      <p className="text-gray-600 ml-8"> A mis padres y mi hermana por seguirme apoyando a pesar de todo.</p>
      <p className="text-xl text-right"><strong>Juan Gabriel</strong></p>
      </p>
      <p className="text-lg">

      <p className="text-gray-600 ml-8">A mis padres: Reinaldo y Margarita</p>
      <p className="text-gray-600 ml-8"> A mis hermanos: Norma Edith, Mario Javier y Nelson</p>
      <p className="text-gray-600 ml-8">A mi esposa e hijos: Olga Lucia, Isabela y Joan Sebastián</p>
      <p className="text-gray-600 ml-8">Por su incondicional apoyo</p>
      <p className="text-gray-600 ml-8">A mi profesor de Parasitología: C J Marinkelle, Ph D, por su gran enseñanza y guía</p>
      </p>
      <p className="text-xl text-right"><strong>Luis Reinel</strong></p>
     

      <p className="text-lg">
      <p className="text-gray-600 ml-8"> A mi familia y amigos verdaderos, por estar junto a mí en todo momento</p>
      <p className="text-xl text-right"><strong>Fabiola Eugenia</strong></p>
      </p>

      <p className="text-lg">
      <p className="text-gray-600 ml-8"> A mi familia y amigos, por su apoyo constante y por creer en mí en todo momento</p>
      <p className="text-xl text-right"><strong>Jader Alejandro</strong></p>
      </p>

      <p className="text-lg">
      <p className="text-gray-600 ml-8"> A quienes siempre han estado a mi lado, familia y amigos, gracias por su apoyo inquebrantable.</p>
      <p className="text-xl text-right"><strong>Rubiel</strong></p>
      </p>




      <div className="mt-8">
        <Link 
          href="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  )
}

