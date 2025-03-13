import Link from 'next/link'

export default function MicrometroOcularPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Link href="/explorer" className="inline-flex items-center text-blue-600 hover:underline mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Volver al índice</span>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Micosis desatendidas</h1>
      <p className="text-lg text-justify mb-4">


      <div className="flex justify-center my-6">

        
      </div>
            <p className="text-lg text-justify mb-2">
            Desde el año 2007, la Organización mundial de la Salud-OMS, considero los micetomas, la
            esporotricosis y la cromoblastomicosis, como parte de las 20 enfermedades clasificadas
            como Enfermedades Tropicales Desatendidas (ETD), pero actualmente se tienen en cuenta
            una lista más ampliada, que incluye enfermedades adicionales con las características
            crónicas y/o debilitantes como pueden presentarse las micosis. La OMS en el año 2022,
            publico la lista de los hongos patógenos prioritarios para guiar la investigación, desarrollo y
            acción de salud pública. De estos grupos según la epidemiologia de Colombia hay que tener
            en cuenta los hongos de los grupos de prioridad critica, los del grupo de alta prioridad y
            dentro de los de mediana prioridad hay que considerar al <em>Cryptococcus gattii, Pneumocystis 
            jirovecii</em> y <em>Paracoccidiodes restrepiensis</em>.</p>
            
            
            <p className="text-lg text-justify mb-2">
            En general las micosis en Colombia se pueden considerar desatendidas o subvaloradas. Su
            diagnóstico se basa principalmente en las manifestaciones clínicas que presenta el paciente,
            que generalmente dan un diagnóstico presuntivo, para lo cual se deben hacer diagnósticos
            diferenciales. Es de gran utilidad que el médico elabore una muy buena historia clínica que
            incluya, genero, edad, profesión u oficio y aficiones del paciente, procedencia y viajes
            realizados; tiempo de aparición de la lesión, signos y síntomas, evolución, tratamientos
            locales/generales administrados y su respuesta, antecedentes personales y clínicos,
            enfermedades de base, factores de riesgo, antecedentes de trauma y contacto con animales.</p>

            <p className="text-lg text-justify mb-2">
            La evaluación inicial y el reconocimiento visual de un caso sospechoso seguido de pruebas de 
            laboratorio como el cultivo para hongos o pruebas moleculares para su confirmación en 
            Colombia es muy limitado para regiones con dificultades en la atención médica y escasez 
            de laboratorios de microbiología. Pero existen los exámenes directos al microscopio, 
            los cuales tienen una muy buena sensibilidad y no requieren de una mayor infraestructura, 
            estos exámenes se agrupan en exámenes en fresco, con la utilización del Hidróxido de 
            potasio (KOH) al 10 o al 40% para muestras que requieran  lisar células epiteliales 
            para aclarar la muestra y  poder visualizar estructuras fúngicas, por ejemplo escamas, 
            esputo, secreciones;  Tinta china, técnica de contraste útil para la visualización de 
            <em>Cryptococcus</em> en el sedimento de LCR o Esputo y coloraciones como Giemsae para la 
            búsqueda de estructuras fúngicas pequeñas como <em>Histoplasma capsulatum</em> o <em>Pneumocystis 
            jirovecii</em>, y para el caso de la EFI, para la detección de antígenos circulantes, 
            se disponen de pruebas inmunocromatográficas de fase lateral, conocida como una de 
            las técnicas de inmunodiagnóstico más modernas cuyas principales ventajas son la 
            simplicidad y rapidez de la prueba. </p>
            
            <p className="text-lg text-justify mb-2">
            <strong>Nota:</strong> Las fotos aquí publicadas fueron tomadas bajo el consentimiento informado de los
            pacientes por la profesora Fabiola E González C. Laboratorio de Micologia-Facultad de
            Ciencias de la Salud-Universidad del Cauca. </p>

      </p>
    </div>
  )
}