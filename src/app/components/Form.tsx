'use client'

import { ChangeEvent, useState } from "react";
import { Photo } from "../types/photo";

type Props = {
  onUpdate(photo: Photo): void
}

export function Form({
  onUpdate
}: Props) {

  const [photo, setPhoto] = useState<Photo>({ avatar_url: '', id: 0 })

  function handlePhoto(e: ChangeEvent<HTMLInputElement>) {
    const url = URL.createObjectURL(e.target.files[0])
    setPhoto({
      ...photo,
      avatar_url: url,
    })
  }


  function handleClick() {
    setPhoto({ avatar_url: '', id: photo.id + 1 })
    onUpdate({ avatar_url: photo.avatar_url, id: photo.id })
  }
  console.log(photo.id)



  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="flex flex-col justify-between items-center sm:p-8 px-16 py-8 h-[440px]  bg-slate-700 rounded-3xl"
    >
      <h1>selecione imagem</h1>

      <img src={photo.avatar_url} alt="" className="rounded-[50%] mt-2 border text-center w-52 h-52 object-cover" />

      <input
        className="w-0"
        type="file"
        id="file"
        onChange={e => handlePhoto(e)}
      />

      <label
        htmlFor="file"
        className="p-3 bg-red-400 cursor-pointer hover:bg-red-500 transition-colors rounded-xl ">
        select photo
      </label>

      {photo.avatar_url.length > 0 && (

        <button onClick={() => handleClick()}
          className="bg-green-400 px-9 py-3 rounded-xl mt-1 cursor-pointer hover:bg-green-500 transition-colors">
          salvar
        </button>
      )}


    </form>
  )
}