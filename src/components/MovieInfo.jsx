import { useParams } from 'react-router-dom';
import { fetchFilmCast } from 'api/api';

export const Review = () => {
    const id = useParams()
    console.log(id)
    return <div> Review</div>
}
export const Cast = () => {
    const id = useParams()
    fetchFilmCast(id).then(console.log)
    return <div> Cast</div>
}