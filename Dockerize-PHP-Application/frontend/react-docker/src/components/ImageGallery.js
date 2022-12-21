import React, { useEffect, useState } from "react";

function Search () {
    const [query, setQuery] = useState ("");
    const [data, setData] = useState([]);
    const [perPage, setPerpage] = useState(60);

    const getPhotos = async () => {
        await fetch(`http://localhost/api/read.php?query=${query}&per_page=${perPage}`, {
        })
            .then((resp) => {
                return resp.json();
            })
            .then((res) => {
                setData(res.photos);
            });
    };

    useEffect(() => {
        getPhotos();
    }, []);

    //Press Enter to search

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            getPhotos();
        }
    };

    return (
        <div>
            <input
                className="inputSearch"
                onKeyDown={onKeyDownHandler}
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    />
            <div className="container grid">
                {data?.map((item, index) => {
                    return (
                        <div className="box grid-item" key={index}>
                            <img src={item.src.large} alt={item.id} />
                        </div>
                    );
                })}
            </div>
                    </div>
                    );
                }

                    export default Search;