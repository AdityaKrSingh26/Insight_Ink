import React, { useState } from "react"
import sampleImg from "./images/sample_image.png"

export default function Card(props) {
    const [visibleArticles, setVisibleArticles] = useState(10);
    const [myStyle, setStyle] = useState({
        // backgroundColor: "#0E1E32",
        // color: "#F1F2F3",
    });

    const handleReadMoreClick = () => {
        setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 10);
        setStyle({
            backgroundColor: "#0E1E32",
            color: "#F1F2F3",
        });
    };

    const handleReadLessClick = () => {
        if (visibleArticles <= 10) {
            setStyle({
                color: "black",
                backgroundColor: "#F1F2F3"
            });
        }
        else {
            setVisibleArticles((prevVisibleArticles) =>
                Math.max(prevVisibleArticles - 10, 10)
            );
            setStyle({
                backgroundColor: "#0E1E32",
                color: "#F1F2F3",
            });
        }
    };

    return (

        <>
            <div>
                {props.articles.slice(0, visibleArticles).map((currElement) => (
                    <div className="card-container" key={currElement.url}>
                        <div className="card">
                            <div className="image-container">
                                <img
                                    src={currElement.urlToImage ? currElement.urlToImage : sampleImg}
                                    alt="Card"
                                />
                            </div>
                            <div className="text-container">
                                <h4>{currElement.title}</h4>
                                <p>{currElement.description}</p>
                                <a href={currElement.url} target="_blank" rel="noreferrer">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="read-more-articles">
                <button className="less-article" onClick={handleReadLessClick} style={myStyle}>
                    <p>Read Less</p>
                </button>
                <button className="more-article" onClick={handleReadMoreClick}>
                    <p>Read More</p>
                </button>
            </div>
        </>
    )
}