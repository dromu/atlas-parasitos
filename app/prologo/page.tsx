import Link from 'next/link'

export default function PrologoPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Introducción</h1>
      <h2 className="text-2xl font-bold mb-2">Enfermedades tropicales desatendidas</h2>
      <p className="text-lg text-justify mb-2">
      Según indica la Organización Mundial de la Salud-OMS, las Enfermedades Tropicales
      Desatendidas (ETD) son aquellas infecciones causadas por diferentes agentes etiológicos
      como bacterias, virus, hongos y parásitos, además de los accidentes con animales
      venenosos y ponzoñosos. Afectan a mil millones de personas y aquellas comunidades que
      se encuentran en la zona tropical y subtropical causando un deterioro en la calidad de vida,
      asociadas a comunidades empobrecidas, que presentan deficiencias en el saneamiento
      básico, también relacionadas con el suministro de agua ya sea por la cantidad o baja
      calidad, deficiencias en la atención en salud y con un gran impacto económico.
      </p>
      <p className="text-lg text-justify mb-4">
      La OMS ha declarado como enfermedades desatendidas a los Micetomas, las cuales pueden
      ser producidos por bacterias como <em>Nocardia brasiliensis</em> (Actinomicetomas) o por hongos
      (Eumicetomas), esporotricosis, cromoblastomicosis y otras micosis cutáneas profundas, las
      cuales se limitan en gran medida a los trópicos y afectan a las comunidades pobres,
      generalmente en zonas rurales. También hay que tener en cuenta que el aumento del
      número de pacientes inmunocomprometidos es altamente susceptibles a las infecciones por
      hongos, con las llamadas micosis sistémicas que impactan profundamente la salud humana,
      entre estas la criptococosis, histoplasmosis y las micosis emergentes, las cuales no están
      formalmente reconocidas como ETD, pero son micosis de alta mortalidad que siguen
      siendo ignoradas por autoridades de salud pública y tomadores de decisiones.
    </p>

      <p className="text-lg text-justify mb-4">
      Las parasitosis humanas tienen un impacto negativo en la salud pública en diferentes partes
      del mundo durante décadas, lo que ha estimulado el desarrollo continuo de vacunas, nuevos
      medicamentos y pruebas de diagnóstico para la malaria, enfermedad del sueño,
      leishmaniasis, filariasis y enfermedad de Chagas.
      </p>


      <p className="text-lg text-justify mb-4">
      Hoy día existen diferentes metodologías para el diagnóstico de las ETD como la utilización
      de pruebas serológicas, moleculares o metodologías omicas pero en la zona tropical y
      subtropical por la lejanía de las comunidades no se cuentan con éstas tecnologías por eso
      hoy día sigue siendo relevante la determinación de los estadios que se pueden observar en
      el laboratorio clínico donde existan equipos básicos como un microscopio y así iniciar un
      tratamiento farmacológico que brinde un adecuado manejo.
      </p>


      <p className="text-lg text-justify mb-4">
      Su control y/o erradicación está relacionado con los Objetivos de Desarrollo Sostenible
      (ODS) 1, 3 y 6, y es directamente abordado con la meta 3.3, indicando que a 2030 se debe
      haber puesto “fin a las epidemias del SIDA, la tuberculosis, malaria y enfermedades
      tropicales desatendidas”.
      </p>

      <p className="text-lg text-justify mb-4">
      Con la presentación del atlas en ETD deseamos proporcionar una herramienta para el apoyo
      diagnóstico de este tipo de micosis y parásitosis intestinales frecuentes a nivel nacional
      como en el departamento del Cauca. El atlas podrá ser utilizado para consulta y apoyo en el
      laboratorio clínico, así como en el centro de atención en salud y la comunidad en general.
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

