import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Micosis, MicosisType, MicosisGen } from '../../dataMicosis/micosis'
import { ImageModal } from '../../../components/ImageModal'

export default function MicosisPage({ params }: { params: { slug: string[] } }) {
  const [category, subcategory, micosisId] = params.slug

  const getMicosis = (category: string, subcategory: string, micosisId: string): MicosisGen | undefined => {
    const categoryData = Micosis[category as keyof typeof Micosis]
    if (categoryData) {
      const subcategoryData = categoryData[subcategory as keyof MicosisType]
      if (subcategoryData) {
        return subcategoryData[micosisId]
      }
    }
    return undefined
  }

  const micosis = getMicosis(category, subcategory, micosisId)

  if (!micosis) {
    notFound()
  }

  // Función para formatear texto: maneja cursivas y saltos de línea
  const formatText = (text: string, changeSize: boolean = false) => {
    return text.split("\\n").map((line, index) => (
      <p key={index} className={`text-gray-700 text-justify ${changeSize ? "text-lg" : ""}`}>
        {line.split(/(\*[^*]+\*)/g).map((segment, i) =>
          segment.startsWith("*") && segment.endsWith("*") ? (
            <em key={i}>{segment.slice(1, -1)}</em>
          ) : (
            segment
          )
        )}
      </p>
    ));
  };




  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      <Link href="/explorer" className="inline-flex items-center text-blue-600 hover:underline mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Volver al índice</span>
      </Link>

      <h1 className="text-3xl font-bold italic">{micosis.nameMic}</h1>
      <p className="text-xl text-gray-600">{micosis.type} - {micosis.subtype}</p>

      {Object.entries(micosis.categories).map(([categoryKey, category]) => (
        <section key={categoryKey} className="space-y-4">
          <h2 className="text-2xl font-semibold">{category.title}</h2>
          {formatText(category.description, true)}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.images.map((image, index) => (
              <div key={index} className="space-y-4">
                <div className="border rounded-lg overflow-hidden shadow-lg">
                  <ImageModal 
                    imageUrl={image.url} 
                    alt={`${micosis.nameMic} - ${category.title} - Imagen ${index + 1}`}
                    description={image.description}
                  />
                </div>
                <p className="text text-gray-600">{formatText(image.description)}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
