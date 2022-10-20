export interface IImagePreview {
  src: string
  name: string
}

export class Image {
  public addImagesPreview(images: FileList): IImagePreview[] {
    const readyImages = [] as IImagePreview[]
    const arrayImages = Array.from(images)
    arrayImages.forEach((image: File) => {
      const previewImage = URL.createObjectURL(image)
      readyImages.push({ name: image.name, src: previewImage })
    })
    return readyImages
  }

  public removeImagePreview(source: IImagePreview[], target: IImagePreview) {
    return source.filter((image: IImagePreview) => image.name !== target.name)
  }
}
