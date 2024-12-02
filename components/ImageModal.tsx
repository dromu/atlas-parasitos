'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ZoomIn, ZoomOut, Home } from 'lucide-react'

interface ImageModalProps {
  imageUrl: string
  alt: string
  description: string
}

export function ImageModal({ imageUrl, alt, description }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleImageError = () => {
    setImageError(true)
  }

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.1, 3))
  }

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.1, 1))
  }

  const resetZoom = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const drag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && scale > 1) {
      const newX = e.clientX - dragStart.x
      const newY = e.clientY - dragStart.y
      setPosition({ x: newX, y: newY })
    }
  }

  const endDrag = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (scale === 1) {
      setPosition({ x: 0, y: 0 })
    }
  }, [scale])

  useEffect(() => {
    if (!isOpen) {
      resetZoom()
    }
  }, [isOpen])

  const isExternalImage = imageUrl.startsWith('http') || imageUrl.startsWith('https')

  return (
    <>
      {imageError ? (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
          Imagen no disponible
        </div>
      ) : (
        <div className="relative w-full h-64">
          <Image 
            src={imageUrl} 
            alt={alt} 
            fill
            style={{ objectFit: 'cover' }}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
            onError={handleImageError}
            unoptimized={isExternalImage}
          />
        </div>
      )}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{alt}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 relative">
            {imageError ? (
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-gray-500">
                Imagen no disponible
              </div>
            ) : (
              <>
                <div 
                  ref={imageRef}
                  className="relative w-full h-[400px] overflow-hidden cursor-move"
                  onMouseDown={startDrag}
                  onMouseMove={drag}
                  onMouseUp={endDrag}
                  onMouseLeave={endDrag}
                >
                  <Image 
                    src={imageUrl} 
                    alt={alt} 
                    fill
                    style={{ 
                      objectFit: 'contain',
                      transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                      transition: isDragging ? 'none' : 'transform 0.2s'
                    }}
                    onError={handleImageError}
                    unoptimized={isExternalImage}
                    draggable={false}
                  />
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button 
                    onClick={zoomIn}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Acercar"
                  >
                    <ZoomIn size={24} />
                  </button>
                  <button 
                    onClick={zoomOut}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Alejar"
                  >
                    <ZoomOut size={24} />
                  </button>
                  <button 
                    onClick={resetZoom}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Tamaño original"
                  >
                    <Home size={24} />
                  </button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

