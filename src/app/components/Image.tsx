import { Photo } from "../types/photo"


type Props = {
  photo: Photo
}



export function Image({
  photo
}: Props) {

  return (
    <img
      src={photo.avatar_url}
      alt=""
      className="w-32 h-32 object-cover rounded-[50%]"
    />
  )
}