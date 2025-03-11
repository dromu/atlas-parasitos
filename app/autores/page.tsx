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
              <span className="text-xl font-semibold">JUAN GABRIEL HIDALGO ANDELA</span>
            </div>
            <p className="text-gray-600 ml-8"> Estudiante Programa de Medicina</p>
            <p className="text-gray-600 ml-8"> Facultad Ciencias de la Salud- Universidad del Cauca</p>

          </li>
          <li className="space-y-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">•</span>
              <span className="text-xl font-semibold">LUIS REINEL VÁSQUEZ ARTEAGA</span>
            </div>
            <p className="text-gray-600 ml-8"> Licenciado en Biólogia y Química</p>
            <p className="text-gray-600 ml-8"> M.Sc. Microbiología - Parasitología</p>
            <p className="text-gray-600 ml-8"> Especialista Entomología</p>
            <p className="text-gray-600 ml-8"> Profesor Asistente, Departamento de Medicina Interna</p>
            <p className="text-gray-600 ml-8"> Facultad Ciencias de la Salud; Universidad del Cauca</p>
          
          </li>
          <li className="space-y-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">•</span>
              <span className="text-xl font-semibold">FABIOLA EUGENIA GONZALEZ CUELLAR</span>
            </div>
            <p className="text-gray-600 ml-8"> Bacteriologa y Laboratorista Clinico</p>
            <p className="text-gray-600 ml-8"> Master Microbiologia Sanitaria</p>
            <p className="text-gray-600 ml-8"> Especialista Salud Familiar</p>
            <p className="text-gray-600 ml-8"> Profesor Asistente, Departamento de Medicina Interna</p>
            <p className="text-gray-600 ml-8"> Facultad Ciencias de la Salud; Universidad del Cauca</p>


          </li>

          <li className="space-y-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">•</span>
              <span className="text-xl font-semibold">JADER ALEJANDRO MUÑOZ GALINDEZ</span>
            </div>
            <p className="text-gray-600 ml-8"> Ingeniero Fisico</p>
            <p className="text-gray-600 ml-8"> Joven investigador</p>
            <p className="text-gray-600 ml-8"> Universidad del Cauca</p>
          </li>

          <li className="space-y-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">•</span>
              <span className="text-xl font-semibold">RUBIEL VARGAS CAÑAS</span>
            </div>
            <p className="text-gray-600 ml-8"> Ingeniero de Sistemas</p>
            <p className="text-gray-600 ml-8"> Especialialista En Informatica Industrial</p>
            <p className="text-gray-600 ml-8"> Magister En Ingenieria Enfasis En Electronica</p>
            <p className="text-gray-600 ml-8"> PhD in Biomedical Engineering</p>
            <p className="text-gray-600 ml-8"> Profesor, Departamento de Fisica</p>
            <p className="text-gray-600 ml-8"> Facultad ciencias naturales,exactas y de la educación; Universidad del Cauca</p>


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
