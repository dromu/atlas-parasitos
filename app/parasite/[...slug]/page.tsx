import Link from 'next/link'
import { notFound } from 'next/navigation'
import { parasites, ParasiteType, Parasite } from '../../data/parasites'
import { ImageModal } from '../../../components/ImageModal'

export default function ParasitePage({ params }: { params: { slug: string[] } }) {
  const [category, subcategory, parasiteId] = params.slug
  
  const getParasite = (category: string, subcategory: string, parasiteId: string): Parasite | undefined => {
    const categoryData = parasites[category as keyof typeof parasites]
    if (categoryData) {
      const subcategoryData = categoryData[subcategory as keyof ParasiteType]
      if (subcategoryData) {
        return subcategoryData[parasiteId]
      }
    }
    return undefined
  }

  const parasite = getParasite(category, subcategory, parasiteId)

  if (!parasite) {
    notFound()
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      <Link href="/parasites" className="inline-flex items-center text-blue-600 hover:underline mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Volver al índice</span>
      </Link>
      <h1 className="text-3xl font-bold italic">{parasite.name}</h1>
      <p className="text-xl text-gray-600">{parasite.type} - {parasite.subtype}</p>
      
      {Object.entries(parasite.categories).map(([categoryKey, category]) => (
        <section key={categoryKey} className="space-y-4">
          <h2 className="text-2xl font-semibold">{category.title}</h2>
          <p className="text-lg text-gray-700 text-justify">{category.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.images.map((image, index) => (
              <div key={index} className="space-y-4">
                <div className="border rounded-lg overflow-hidden shadow-lg">
                  <ImageModal 
                    imageUrl={image.url} 
                    alt={`${parasite.name} - ${category.title} - Imagen ${index + 1}`}
                    description={image.description}
                  />
                </div>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

