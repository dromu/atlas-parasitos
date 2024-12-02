// import Link from 'next/link'
import { notFound } from 'next/navigation'
import { parasites, ParasiteType} from '../../data/parasites'
// import { ImageModal } from '../../../components/ImageModal'

export default function ParasitePage({ params }: { params: { id: string } }) {
  const [category, parasiteId] = params.id.split('.'); // Divide el ID en categoría e identificador
  const parasite = (parasites[category as keyof typeof parasites] as ParasiteType)?.[parasiteId];
  
  if (!parasite) {
    notFound();
  }

  
}
