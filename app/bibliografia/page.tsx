import Link from 'next/link';

export default function BibliografiaPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Bibliografía</h1>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <p className="inline">
            Botero D y Restrepo M. <i>Parasitosis humanas.</i> 1992 2da Edición. Corporación Para Investigaciones Biológicas C.I.B, Medellín, Colombia.
          </p>
        </li>
        <li>
          <p className="inline">
            Universidad Nacional Autónoma de México. <i>Manuales departamentales, Facultad de Medicina, Microbiología y Parasitología, Fascículo IV Parasitología.</i> 1996. Comité Asesor de Publicaciones de la Facultad de Medicina de la Universidad Nacional Autónoma de México, DF México.
          </p>
        </li>
        <li>
          <p className="inline">
            GoldSmith R y Heyneman. <i>Parasitología y Medicina Tropical.</i> 1995. Editorial El Manual Moderno S.A. de CV, México DF, Santa Fe de Bogotá.
          </p>
        </li>
        <li>
          <p className="inline">
            Clark CG. <i>Entamoeba dispar and organism reborn.</i> Trans. R. Soc. Trop. Med Hyg. 1998, 92: 361–364.
          </p>
        </li>
        <li>
          <p className="inline">
            Ridley DS, Hawgood BC. <i>The value of formol – ether concentration of fecal cyst and ova.</i> J. Clin. Pathol. 1956: 9: 74–76.
          </p>
        </li>
        <li>
          <p className="inline">
            Perry JL, Mathews JS, Miller GR. <i>Parasite detection efficiencies of five stool concentration systems.</i> J. Clin. Microbiol. 1990, 28 (6): 1094–1097.
          </p>
        </li>
        <li>
          <p className="inline">
            Agualimpia C, Mejia WA, Paredes MR. <i>Investigación Nacional de Morbilidad de Parasitismo Intestinal.</i> 1969, Bogotá, Colombia.
          </p>
        </li>
        <li>
          <p className="inline">
            Corredor A, Arciniegas E, Hernández CA. <i>Parasitismo Intestinal.</i> 2000.
          </p>
        </li>
        <li>
          <p className="inline">
            Gonzalez–Ruiz A. <i>The Use of the Ocular Micrometer in Diagnostic Parasitology.</i> Parasitology Today 1995; 11: 83–85.
          </p>
        </li>
        <li>
          <p className="inline">
            Guhl F, Molina S, Delgado P. <i>Revisión del Estado Actual del Diagnóstico de Entamoeba histolytica en Santa Fe de Bogotá.</i> Tribuna Médica 1996, 93: 131–138.
          </p>
        </li>
        <li>
          <p className="inline">
            Alvarez CR, Valencia RS, Vazquez TO. <i>Manual de Procedimientos de Laboratorio Para el Diagnóstico de las Enfermedades Parasitarias.</i> Instituto Nacional de Pediatría, Servicio de Parasitología, 1997 México DF, México.
          </p>
        </li>
        <li>
          <p className="inline">
            Díaz T. <i>Parasitología, Manual de Laboratorio.</i> 1995, Barranquilla, Colombia.
          </p>
        </li>
        <li>
          <p className="inline">
            Marinkelle CJ. <i>Guías de Parasitología.</i> 1996, Universidad de los Andes, Santa Fe de Bogotá, Colombia.
          </p>
        </li>
        <li>
          <p className="inline">
            Carvajal H, Caro FF, Bonelo A. <i>El Diagnóstico Directo en Parasitología.</i> 1995, Primera Edición, Editorial Universidad del Valle, Cali, Colombia.
          </p>
        </li>
        <li>
          <p className="inline">
            Florez SAC, Colorado SCL. <i>Manual de Apoyo, Seminario Taller de Parasitismo Intestinal.</i> Instituto Nacional de Salud, Lab. Parasitología. 1998, Santa Fe de Bogotá, Colombia.
          </p>
        </li>
        <li>
          <p className="inline">
            Todd, Stanford, David John. <i>Diagnóstico y Tratamientos Clínicos por el Laboratorio.</i> 1984, Séptima Edición, Editorial Salvat.
          </p>
        </li>
        <li>
          <p className="inline">
            Vásquez ALR, González CFE, Burbano MD, et al. <i>Determination of Infection by Giardia lamblia in 2–5 children from the community house of Instituto Colombiano de Bienestar Familiar.</i> XV Congress for Tropical Medicine and Malaria 2000.
          </p>
        </li>
        <li>
          <p className="inline">
            Vásquez ALR, González CFE, Daza C, et al. <i>Prevalence of Intestinal Parasites in School Children of villages of Piendamó country.</i> XV Congress for Tropical Medicine and Malaria 2000.
          </p>
        </li>
      </ul>
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
