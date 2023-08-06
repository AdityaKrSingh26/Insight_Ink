import React, { useState, useEffect } from "react"
import Headline from './Headline';
import Contact from "./Contact";
import Card from "./Card";
import Loading from "./images/loading.gif"
import newspaper from "./images/newspaper_icon.png"

async function fetchDataFromAPI(keyword) {
    const response = await fetch(`https://newsapi.org/v2/everything?q=` + keyword + `&sortBy=publishedAt&language=en&apiKey=aa10aa5a58194145bb54428eecbcc34a`);
    const result = await response.json();
    return result;
};

export default function Page() {

    const myStyle = {
        border: "solid",
        borderWidth: "0px 0px 2px"
    }

    const [keyword, changeKeyword] = useState("trending");
    const [highlightedKeyword, setHighlightedKeyword] = useState("trending");
    const [message, setMessage] = useState('');

    console.log(keyword)

    function handleSearch(e) {
        setMessage(e.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            changeKeyword(message);
        }
    };

    function handleKeyword(e) {
        changeKeyword(e.target.id)
        const keywordId = e.target.id;

        // Toggle the highlighted keyword
        setHighlightedKeyword((prevKeyword) => {
            return (prevKeyword === keywordId ? null : keywordId)
        });
    }

    // Helper function to determine if a keyword is currently highlighted
    function isHighlighted(keywordId) {
        return keywordId === highlightedKeyword;
    }




    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchDataFromAPI(keyword)
            .then((apiData) => {
                setData(apiData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [keyword]);


    if (isLoading) {
        return (
            <div className="loading">
                <img src={Loading} alt="" />
            </div>
        );
    }

    return (
        <>
            <nav>
                <div className="wrap">


                    <div className="heading">
                        <img src={newspaper} alt="#" />
                        <h1>InsightInk</h1>
                    </div>

                    <div className="search-div">
                        <input
                            type="text"
                            name="Search"
                            id="search"
                            placeholder="Enter the keyword"
                            onChange={handleSearch}
                            onKeyDown={handleKeyDown}
                        />
                        <input type="submit" value="Search" id="submit" />
                    </div>


                </div>





                <div className="keyword-div">
                    <div className="keyword">


                        <p
                            id="trending"
                            onClick={handleKeyword}
                            style={isHighlighted("trending") ? myStyle : {}}
                        >
                            Trending
                        </p>

                        <p
                            id="politics"
                            onClick={handleKeyword}
                            style={isHighlighted("politics") ? myStyle : {}}
                        >
                            Politics
                        </p>

                        <p
                            id="sport"
                            onClick={handleKeyword}
                            style={isHighlighted("sports") ? myStyle : {}}
                        >
                            Sports
                        </p>

                        <p
                            id="business"
                            onClick={handleKeyword}
                            style={isHighlighted("business") ? myStyle : {}}
                        >
                            Business
                        </p>

                        <p
                            id="travel"
                            onClick={handleKeyword}
                            style={isHighlighted("travel") ? myStyle : {}}
                        >
                            Travel
                        </p>

                        <p
                            id="science"
                            onClick={handleKeyword}
                            style={isHighlighted("science") ? myStyle : {}}
                        >
                            Science
                        </p>

                        <p
                            id="health"
                            onClick={handleKeyword}
                            style={isHighlighted("health") ? myStyle : {}}
                        >
                            Health
                        </p>


                    </div>
                </div>



            </nav>

            <Headline />

            <Card  {...data} />

            <Contact />
        </>
    );
}