import Link from 'next/link'
import Image from 'next/image'

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white p-4">
      <main className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Atlas de enfermedades tropicales desatendidas</h1>
        <h2 className="text-3xl font-bold mb-6">Parásitos intestinales y hongos</h2>
        <Image
          src="/images/salud.png?height=200&width=200"
          alt="Icono representativo de parasitología"
          width={100}
          height={100}
          className="mx-auto mb-6"
        />
        <p className="text-xl mb-8">
          Explora nuestro compendio interactivo de parásitos intestinales y hongos, 
          diseñado para estudiantes, profesionales de la salud e investigadores.
        </p>
    
        <div className="flex flex-col items-center gap-4 mb-12">
          <Link 
            href="/parasites" 
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors duration-300 w-64"
          >
            Explorar el Atlas
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link 
              href="/prologo" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Introducción
            </Link>
            <Link 
              href="/declaracion" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              Declaración y Agradecimientos
            </Link>
            <Link 
              href="/dedicatoria" 
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors duration-300"
            >
              Dedicatoria
            </Link>
            <Link 
              href="/bibliografia" 
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              Bibliografía
            </Link>
          </div>
        </div>
      </main>

    </div>
  )
}

