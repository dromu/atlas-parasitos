import Link from 'next/link'

export default function MicrometroOcularPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Link href="/parasites" className="inline-flex items-center text-blue-600 hover:underline mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Volver al índice</span>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Micrómetro de Ocular</h1>
      <p className="text-lg text-justify mb-4">


      <div className="flex justify-center my-6">

          <img
            src="/images/micrometro_ocular.jpg"
            alt="Micrómetro de Ocular"
            className="w-full max-w-sm rounded-lg"
          />
        
      </div>

      Para realizar el diagnóstico diferencíal con base en el tamaño de las formas del parásito, es fundamental la utilización del micrómetro de ocular, esté instrumento
      se coloca en el ocular del micróscopio y se calibra con el micrómetro de platina, para dar sus medidas en micras que son unidades de medida internacional. Esté metodo 
      permite diferenciar quistes de <em>Entamoeba histolytica/E.dispar/E.moshkovskii</em> con quistes de <em>Entamoeba hartmanni</em>; ooquistes de <em>Cryptosporidium parvum</em> de 
      <em>Cyclospora cayetanensis</em> y los huevos de <em>Fasciola sp</em> de <em>Paragonimus sp.</em>
        
        
      </p>
    </div>
  )
}

