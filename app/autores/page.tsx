import Link from 'next/link';

export default function DeclaracionPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Autores y Agradecimientos</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Autores</h2>
        <ul className="space-y-6">

        <li className="space-y-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">•</span>
              <span className="text-xl font-semibold">FABIOLA EUGENIA GONZALEZ CUELLAR</span>
            </div>
    
            <p className="text-gray-600 ml-8 text-justify">Bacterióloga y Laboratorista clínico, Especialización Epidemiologia general, Especialización Salud Familiar, M Sc
                                                Microbiología Clínica y Sanitaria, M Sc Micología Médica, PhD en Etnobiología y
                                                Estudios Bioculturales, línea Etnomicología. Grupo de investigaciónCentro de
                                                Estudios en Microbiología y Parasitología (CEMPA). Profesora Titular,
                                                Departamento de Medicina Interna, Facultad de Ciencias de la Salud,
                                                Universidad del Cauca</p>

          </li>


          <li className="space-y-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">•</span>
              <span className="text-xl font-semibold">JUAN GABRIEL HIDALGO ANDELA</span>
            </div>
            <p className="text-gray-600 ml-8"> Médico especializado en Auditoría Médica, Seguridad Social y Medicina del
            Trabajo</p>
          </li>

          <li className="space-y-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">•</span>
              <span className="text-xl font-semibold">JADER ALEJANDRO MUÑOZ GALINDEZ</span>
            </div>

            <p className="text-gray-600 ml-8 text-justify"> Ingeniero Fisico, Joven investigador, Sistemas Dinamicos Intrumentacion y Control
                                               (SIDICO), Universidad del Cauca
            </p>
            
            <p className="text-gray-600 ml-8"> </p>
          </li>


          <li className="space-y-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">•</span>
              <span className="text-xl font-semibold">RUBIEL VARGAS CAÑAS</span>
            </div>
            <p className="text-gray-600 ml-8 text-justify"> Ingeniero de Sistemas, Especialialista En Informatica Industrial, Magister En Ingenieria Enfasis En Electronica
            PhD in Biomedical Engineering, Profesor, Departamento de Fisica, Facultad ciencias naturales,exactas y de la educación,  
            Universidad del Cauca
            </p>
          </li>

          <li className="space-y-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">•</span>
              <span className="text-xl font-semibold">LUIS REINEL VÁSQUEZ ARTEAGA</span>
            </div>
            <p className="text-gray-600 ml-8 text-justify"> Licenciado en Biología y Química, Especialización Epidemiologia General,
                                                Especialización Entomología Magister Microbiología énfasis Parasitología. Grupo
                                                de investigaciónCentro de Estudios en Microbiología y Parasitología (CEMPA).
                                                Profesora Titular, Departamento de Medicina Interna, Facultad de Ciencias de la
                                                Salud, Universidad del Cauca</p>

          </li>
         

          

          


          
     
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Agradecimientos</h2>
        <p className="text-gray-600 ml-8"> 
        Profesor Gerardo Andrés Torres, Coordinador Area de Microscopia Electrónica de la Universidad del Cauca y a la profesional universitaria 
        Patricia Mosquera por su valiosa colaboración en la consecución del material fotográfico, de la misma manera al estudiante de medicina 
        Javier Dorado colaborador del Laboratorio de Genética Humana de la Facultad Ciencias de la Salud, Universidad del Cauca.
        </p>
        
      </section>
      <div className="mt-8">
        <Link 
          href="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}
