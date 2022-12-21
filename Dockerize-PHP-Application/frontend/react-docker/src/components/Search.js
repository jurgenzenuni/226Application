import React, { useEffect, useState } from "react";
// import axios from "axios";

function SearchTwo () {

    const [query, setQuery] = useState ("");
    const [data, setData] = useState([]);
    const [pageUrl, setPageUrl] = useState ('');

    const handle_submit = e => {
        e.preventDefault()

        if(query !== ''){

            let oururl = pageUrl !== '' ? pageUrl + `&query=${query}` : `http://localhost/api/read.php?query=${query}`

            axios.get ( oururl, {
                headers: {
                    Authorization: '563492ad6f91700001000001eb1029727f5f4b82889fef00ad8f8efd'
                }
            }).then(res => {
                if(res.data.photos.length >= 1){
                //
                let params = (new URL(res.data.next_page)).searchParams
                    let page = params.get("page")
                let per_page = params.get("per_page")

                let url = `https://api.pexels.com/v1/search/?page=${page}&per_page=${per_page}`

                setPageUrl(url)

                setData(res.data.photos)

            }
        })
    }
}

return (
    <div>
        <form onSubmit={handle_submit} action="">
            <input className="" width={"100%"} type="text" name="" onChange={e => {
                setQuery(e.target.value)
            }} id="" />
        </form>
        <div className="container grid">

            {
                data.map((val, key) => {
                return (
                <div className="grid-item">
                <img className="" key={key} src={val.src.original} width={"100%"} alt="" />
                </div>
                )
            })
            }
        </div>

        <div className="btn">
            <button style={{ borderRadius: '40px', padding: '17px', border: '2.5px solid black' }} onClick={e => {
                if(query !== ''){

                    let oururl = pageUrl !== '' ? pageUrl + `&query=${query}` : `https://api.pexels.com/v1/search?query=${query}`

                    axios.get( oururl, {
                        headers: {
                            Authorization: '563492ad6f91700001000001eb1029727f5f4b82889fef00ad8f8efd'
                        }
                    }).then(res => {
                        if(res.data.photos.length >= 1){
                        //
                        let params = (new URL(res.data.next_page)).searchParams
                            let page = params.get("page")
                        let per_page = params.get("per_page")

                        let url = `https://api.pexels.com/v1/search/?page=${page}&per_page=${per_page}`

                        setPageUrl(url)

                        setData(res.data.photos)

                    }
                })
            }
            }}> Load More </button>
    </div>
</div>
);
}

export default SearchTwo;