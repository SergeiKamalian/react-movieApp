import { IGenres, IMenuNavigateItems } from "../model";
import { getGenresList } from "../Api/Api";

export const sprintData = (activeGenres: number[], allGenres: IGenres[]) => {
    const genre1 = allGenres.find((genre) => genre.id === activeGenres[0])
    const genre2 = allGenres.find((genre) => genre.id === activeGenres[1])
    if (genre2) {
        return genre1?.name! + ', ' + genre2?.name!
    } else {
        return genre1?.name!
    }
}

export const getGenres = async () => {
    try {
        const genresList = await getGenresList()
        localStorage.setItem('genres', JSON.stringify(genresList))
        // console.log(localStorage);

    } catch (e) {
        console.log(e);
    }
}