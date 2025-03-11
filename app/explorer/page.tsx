import Link from 'next/link'
import { parasites } from '../data/parasites'
import { Micosis } from '../dataMicosis/micosis'

export default function ParasitesIndexPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      {/* <h1 className="text-3xl font-bold">Atlas de Parasitología</h1> */}
      <h2 className="text-3xl font-semibold">Contenido </h2>
    
      <div className="space-y-3">


      <section>
          <h3 className="text-xl font-semibold mb-4">Introducción al parasitismo intestinal</h3>
          <p className="text-lg mb-2 ml-4">
            <Link href="/parasitismo-intestinal" className="text-blue-600 hover:underline">
              Parasitismo intestinal
            </Link>
          </p>

          <p className="text-lg medium mb-2 ml-4">
            <Link href="/diagnostico-parasitologico" className="text-blue-600 hover:underline">
              Información sobre técnicas y métodos de diagnóstico parasitológico.
            </Link>
          </p>

          <p className="text-lg medium mb-2 ml-4">
            <Link href="/micrometro-ocular" className="text-blue-600 hover:underline">
              Detalles sobre el uso del micrómetro de ocular en parasitología.
            </Link>
          </p>

        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Protozoos</h3>
          {Object.entries(parasites.protozoos).map(([subtype, parasiteGroup]) => (
            <div key={subtype} className="ml-4 mb-1">
              <h4 className="text-lg font-medium mb-1 capitalize">{subtype}</h4>
              <ul className="space-y ml-4">
                {Object.entries(parasiteGroup).map(([id, parasite]) => (
                  <li key={id} className="border-b border-gray-200 last:border-b-0">
                    <Link href={`/parasite/protozoos/${subtype}/${id}`} className="block py-2 text-blue-600 hover:underline italic">
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
            <div key={subtype} className="ml-4 mb-1">
              <h4 className="text-lg font-medium mb-1 capitalize ">{subtype}</h4>
              <ul className="space-y-2 ml-4">
                {Object.entries(parasiteGroup).map(([id, parasite]) => (
                  <li key={id} className="border-b border-gray-200 last:border-b-0">
                    <Link href={`/parasite/helmintos/${subtype}/${id}`} className="block py-2 text-blue-600 hover:underline italic">
                      {parasite.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Otros elementos</h3>
          <p className="text-lg mb-4 ml-4">
            <Link href="/leucocitos-materia-fecal" className="text-blue-600 hover:underline">
            Leucocitos en Materia Fecal
            </Link>
          </p>

          <p className="text-lg mb-4 ml-4">
            <Link href="/artefactos" className="text-blue-600 hover:underline">
            Artefactos en Muestras Parasitológicas
            </Link>
          </p>

        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Micologia clínica humana</h3>
          <p className="text-lg mb-2 ml-4">
            <Link href="/micosis_intro" className="text-blue-600 hover:underline">
              Micosis desatendidas
            </Link>
          </p>
          </section>

          <section>
          <h3 className="text-xl font-semibold mb-4">Micosis superficiales</h3>
          {Object.entries(Micosis.Superficiales).map(([subtype, MicosisGroup]) => (
            <div key={subtype} className="ml-4 mb-1">
              <h4 className="text-lg font-medium mb-1 capitalize ">{subtype}</h4>
              <ul className="space-y-2 ml-4">
                {Object.entries(MicosisGroup).map(([id, Micosis]) => (
                  <li key={id} className="border-b border-gray-200 last:border-b-0">
                    <Link href={`/Micosis/Superficiales/${subtype}/${id}`} className="block py-2 text-blue-600 hover:underline ">
                      {Micosis.nameMic}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>


        <section>
          <h3 className="text-xl font-semibold mb-4">Micosis profundas</h3>
          {Object.entries(Micosis.Profundas).map(([subtype, MicosisGroup]) => (
            <div key={subtype} className="ml-4 mb-1">
              <h4 className="text-lg font-medium mb-1 capitalize ">{subtype}</h4>
              <ul className="space-y-2 ml-4">
                {Object.entries(MicosisGroup).map(([id, Micosis]) => (
                  <li key={id} className="border-b border-gray-200 last:border-b-0">
                    <Link href={`/Micosis/Profundas/${subtype}/${id}`} className="block py-2 text-blue-600 hover:underline ">
                      {Micosis.nameMic}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>


        <section>
          <h3 className="text-xl font-semibold mb-4">Micosis del tracto respiratorio y enfermedades fúngicas invasoras</h3>
          {Object.entries(Micosis.RespiratorioInvasoras).map(([subtype, MicosisGroup]) => (
            <div key={subtype} className="ml-4 mb-1">
              <h4 className="text-lg font-medium mb-1 capitalize ">{subtype}</h4>
              <ul className="space-y-2 ml-4">
                {Object.entries(MicosisGroup).map(([id, Micosis]) => (
                  <li key={id} className="border-b border-gray-200 last:border-b-0">
                    <Link href={`/Micosis/RespiratorioInvasoras/${subtype}/${id}`} className="block py-2 text-blue-600 hover:underline ">
                      {Micosis.nameMic}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>







      </div>

  
      <div className="mt-8">
        <Link 
          href="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
        >
          Volver a la página principal
        </Link>
      </div>


    </div>
  )
}

