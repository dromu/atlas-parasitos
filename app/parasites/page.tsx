import Link from 'next/link'
import { parasites } from '../data/parasites'

export default function ParasitesIndexPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      {/* <h1 className="text-3xl font-bold">Atlas de Parasitología</h1> */}
      <h2 className="text-3xl font-semibold">Contenido </h2>
    
      <div className="space-y-3">
        <section>
          <h3 className="text-xl font-semibold mb-4">Diagnóstico Parasitológico</h3>
          <p className="text-lg mb-4 ml-4">
            <Link href="/diagnostico-parasitologico" className="text-blue-600 hover:underline">
              Información sobre técnicas y métodos de diagnóstico parasitológico.
            </Link>
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Micrómetro de Ocular</h3>
          <p className="text-lg mb-4 ml-4">
            <Link href="/micrometro-ocular" className="text-blue-600 hover:underline">
              Detalles sobre el uso del micrómetro de ocular en parasitología.
            </Link>
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Protozoos</h3>
          {Object.entries(parasites.protozoos).map(([subtype, parasiteGroup]) => (
            <div key={subtype} className="ml-4 mb-4">
              <h4 className="text-lg font-medium mb-2 capitalize">{subtype}</h4>
              <ul className="space-y-2 ml-4">
                {Object.entries(parasiteGroup).map(([id, parasite]) => (
                  <li key={id} className="border-b border-gray-200 last:border-b-0">
                    <Link href={`/parasite/protozoos/${subtype}/${id}`} className="block py-2 text-blue-600 hover:underline">
                      {parasite.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Helmintos</h3>
          {Object.entries(parasites.helmintos).map(([subtype, parasiteGroup]) => (
            <div key={subtype} className="ml-4 mb-4">
              <h4 className="text-lg font-medium mb-2 capitalize">{subtype}</h4>
              <ul className="space-y-2 ml-4">
                {Object.entries(parasiteGroup).map(([id, parasite]) => (
                  <li key={id} className="border-b border-gray-200 last:border-b-0">
                    <Link href={`/parasite/helmintos/${subtype}/${id}`} className="block py-2 text-blue-600 hover:underline">
                      {parasite.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Leucocitos en Materia Fecal</h3>
          <p className="text-lg mb-4 ml-4">
            <Link href="/leucocitos-materia-fecal" className="text-blue-600 hover:underline">
              Información sobre la presencia y significado de leucocitos en muestras fecales.
            </Link>
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Artefactos</h3>
          <p className="text-lg mb-4 ml-4">
            <Link href="/artefactos" className="text-blue-600 hover:underline">
              Descripción de artefactos comunes en muestras parasitológicas y cómo identificarlos.
            </Link>
          </p>
        </section>
      </div>

      <div className="mt-8 space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Volver a la página de inicio</Link>
      </div>
    </div>
  )
}

