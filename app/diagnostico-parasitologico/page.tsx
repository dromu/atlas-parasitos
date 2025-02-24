import Link from 'next/link'

export default function DiagnosticoParasitologicoPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Link href="/parasites" className="inline-flex items-center text-blue-600 hover:underline mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Volver al índice</span>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Diagnóstico Parasitológico</h1>
      <p className="text-lg text-justify mb-4">
      Para el diagnóstico de los parásitos intestinales, se emplean diferentes técnicas que van
      desde la serología, biología molecular, citometría de flujo o procedimientos de
      laboratorio que tienen la finalidad de confirmar el diagnóstico de una enfermedad
      parasitaria mediante el hallazgo del agente etiológico denominándose éstas como
      técnicas de diagnóstico parasitológico, para diferenciarlos de los procedimientos
      serológicos como ELISA, IFI, que consisten en la búsqueda de anticuerpos o antígenos
      presentes por el contacto del parásito con el sistema inmune.
      </p>

      <p className="text-lg text-justify mb-4">
      Cuando se emplea materia fecal, esta técnica se denomina examen coproparasitológico o
      coproparasitoscópico, que consiste en la búsqueda de huevos, larvas, trofozoitos o
      quistes en heces, generalmente esta técnica debe realizarse en forma seriada, o
      acompañándola de métodos de concentración como: Faust o flotación con sulfato de
      zinc, sedimentación de Ritchie-Frick, Flotación de Sheather, Técnica de Kato-Katz, que
      aumentan la probabilidad de encontrar algún estadio del parásito en la materia fecal.
        </p>
      
      <p className="text-lg text-justify mb-4">
      En el análisis bioquímico de la materia fecal se debe determinar el pH, azucares
      reductores, sangre oculta y cuantificación de leucocitos, para así confirmar el
      diagnóstico clínico realizado por el médico para así indicar el fármaco según la
      etiología.
      </p>


    </div>
  )
}

