'use client'


import { useState } from "react"


import { Photo } from "../types/photo"


export function usePhoto(){

  const [photos, setPhotos] = useState<Photo[]>([])


  function handleUpdatePhotos(photo: Photo){

    setPhotos((prev) => ([
      ...prev,
      {
        avatar_url: photo.avatar_url,
        id: photo.id + 1
      }
    ]))
  }


  
  return {
    photos,
    handleUpdatePhotos
  }
  
}