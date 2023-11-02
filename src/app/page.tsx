'use client'

import { Form, Image } from "./components"

import { usePhoto } from "./hooks/usePhotos"




export default function Home() {

  const {
    photos,
    handleUpdatePhotos
  } = usePhoto()


  return (
    <main className="flex  min-h-screen flex-col items-center justify-between gap-4 p-10">

      <Form onUpdate={handleUpdatePhotos} />

      <section className="flex justify-between flex-wrap bg-[#2a2a2a] p-4 gap-1 mt-6 rounded-xl">

        {photos.map(photo => (
          <Image key={photo.id} photo={photo} />
        ))}
      </section>

    </main>
  )
}