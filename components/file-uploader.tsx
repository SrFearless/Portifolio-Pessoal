"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface FileUploaderProps {
  onFileSelected: (file: File | null) => void
  acceptedFileTypes: string[]
  maxFileSize: number
  label: string
}

export default function FileUploader({ onFileSelected, acceptedFileTypes, maxFileSize, label }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0]

      if (selectedFile) {
        if (!acceptedFileTypes.includes(selectedFile.type)) {
          toast.error("Tipo de arquivo não suportado")
          return
        }

        if (selectedFile.size > maxFileSize) {
          toast.error(`O arquivo deve ter no máximo ${maxFileSize / (1024 * 1024)}MB`)
          return
        }

        setFile(selectedFile)
        setPreview(URL.createObjectURL(selectedFile))
        onFileSelected(selectedFile)
      }
    },
    [acceptedFileTypes, maxFileSize, onFileSelected],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": acceptedFileTypes,
    },
    maxSize: maxFileSize,
    multiple: false,
  })

  const removeFile = () => {
    if (preview) {
      URL.revokeObjectURL(preview)
    }
    setFile(null)
    setPreview(null)
    onFileSelected(null)
  }

  return (
    <div className="w-full">
      {!file ? (
        <div
          {...getRootProps()}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-6 transition-colors",
            isDragActive
              ? "border-primary/50 bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/5",
          )}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center text-xs text-muted-foreground">
            <Upload className="mb-2 h-10 w-10 text-muted-foreground" />
            <div className="text-center font-medium">{label}</div>
            <p className="mt-2">Arraste e solte uma imagem aqui, ou clique para selecionar</p>
            <p className="mt-1 text-xs text-muted-foreground">
              JPG, PNG ou WEBP (máx. {maxFileSize / (1024 * 1024)}MB)
            </p>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="relative aspect-video overflow-hidden rounded-md">
            <Image src={preview! || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
          </div>
          <button
            type="button"
            onClick={removeFile}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-white shadow-sm"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}

