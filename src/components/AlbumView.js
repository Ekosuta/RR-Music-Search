import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumView() {
    const { id } = useParams()
    const [ albumView, setAlbumView ] = useState([])

    return (
        <div>
            <h2>the id passedw was: {id}</h2>
            <p>albumView</p>
        </div>
    )
}

export default AlbumView