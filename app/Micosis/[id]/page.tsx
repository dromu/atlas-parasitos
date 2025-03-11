// import Link from 'next/link'
import { notFound } from 'next/navigation'

import {Micosis, MicosisType } from '../../dataMicosis/micosis'
// import { ImageModal } from '../../../components/ImageModal'

export default function ParasitePage({ params }: { params: { id: string } }) {
  const [category, micosisId] = params.id.split('.'); // Divide el ID en categoría e identificador
  const micosis1 = (Micosis[category as keyof typeof Micosis] as MicosisType)?.[micosisId];
  
  if (!micosis1) {
    notFound();
  }

  
}
