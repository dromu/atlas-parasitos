import Link from 'next/link'

export default function PrologoPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Prólogo del Atlas de Parasitología</h1>
      <p className="text-lg text-justify mb-4">
      En 1969, en Colombia se presentaron los resultados de la Primera Encuesta
      Nacional sobre Morbilidad del Parasitismo Intestinal, aplicando el diagnóstico
      parasitológico por medio del coprológico y el método de Graham; los datos mas
      destacados indicaron que la prevalencia encontrada fue del 88%, donde el 80.4%
      poseía parásitos patógenos, además las frecuencias de las parasitosis mas
      relevantes fueron, Ascaris lumbricoides 53.8%, Trichuris trichiura 50.2%
      Uncinarias 22.7%, Enterobius vermicularis 5.9% Entamoeba histolytica 23.7% y
      Giardia lamblia 12.2%.
      </p>
      <p className="text-lg text-justify mb-4">
      Se realizo una Segunda Encuesta entre 1977 a 1980, donde solamente se aplico el
      coprológico como técnica de diagnóstico, los resultados indicaron que el 81.8%
      de la población colombiana presentaba parásitos y además que el  63.3% de la
      población estudiada presentaba agentes patógenos, destacándose Ascaris
      lumbricoides 33.6%, Trichuris trichiura  37.%, Uncinarias 21.1%, Enterobius
      vermicularis 0.1%, Entamoeba histolytica 12.1% y  Giardia lamblia 13.7%
      </p>
      <p className="text-lg text-justify mb-4">
      De los diferentes trabajos de campo realizados por los estudiantes de la Facultad
      Ciencias de la Salud, Universidad del Cauca en colaboración con docentes de la
      Unidad de Enfermedades Infecciosas se observo por ejemplo en un estudio realizado en 1999
      con escolares de tres veredas de Piendamo (Cauca), una  frecuencia de parásitos intestinales 
      del 90%; en otro estudio realizado para la búsqueda de Giardia lamblia en niños adscritos a hogares 
      comunitarios de la comuna San José (1999) se hallo una frecuencia de 43% para este agente intestinal
      </p>


      <p className="text-lg text-justify mb-4">
      Entonces como se puede apreciar la situación no ha cambiado mucho y esto es
      debido a que todavía existen deficiencias en saneamiento ambiental, medidas
      sanitarias, falta de programas de promoción y prevención de los parásitos
      intestinales y en alguna medida las técnicas de laboratorio clínico no son
      solicitadas con la regularidad necesaria.
      </p>


      <p className="text-lg text-justify mb-4">
      En este atlas deseamos dar una ayuda dar una ayuda para el diagnóstico de los
      parásitos intestinales más frecuentes en el departamento del Cauca y en
      Colombia, y esperando a que este manual pueda ser utilizado como una
      herramienta de consulta no solo para los estudiantes de la parasitología si no para
      todo aquel que se desempeñe como trabajador en el área de la salud.
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

