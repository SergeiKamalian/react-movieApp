import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from 'react'
import { getImagesById, getMovieById } from "../../../../Api/Api";
import { IImages } from "../../../../module";

const SelfMovie = ({ setImgFon }: { setImgFon: React.Dispatch<React.SetStateAction<string>> }) => {
    const [images, setImages] = useState<IImages[]>([])
    const params = useParams()
    const movieId = Number(params.id)

    const getAllInfo = useCallback(async () => {
        try {
            const imagesData = await getImagesById(movieId);
            console.log(imagesData);
            setImgFon(imagesData[0].file_path)
            setImages(imagesData)
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        getAllInfo()
        // setImgFon(images[0].file_path)
    }, [movieId])

    useEffect(() => {
        return () => {
            setImgFon('')
        }
    }, [])

    return (
        <div className="SelfMovie">
            {images.map((e, i) => <span> {i} </span>)}
        </div>
    )
}

export default SelfMovie;