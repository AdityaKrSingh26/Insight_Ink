import React, { useState, useEffect } from "react";
import nextImg from "./images/right-arrow.png";
import prevImg from "./images/left-arrow.png";
import loading from "./images/loading-headline.gif"
import sampleImg from "./images/sample_image.png"

const fetchDataFromAPI = async () => {
    const response = await fetch("https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=f1a7785d657b4d8687d55a08b3ec2550");
    const result = await response.json();
    return result;
};


export default function Headline(props) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchDataFromAPI()
            .then((apiData) => {
                setData(apiData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);





    // console.log(data.articles[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const btnPressNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.articles.length);
        console.log(currentIndex);
    };

    const btnPressPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.articles.length) % data.articles.length);
        console.log(currentIndex);
    };

    if (isLoading) {
        return (
            <div className="loading-headline">
                <img src={loading} alt="" />
            </div>
        );
    }


    return (

        <div className="headline">


            <button className="pre-btn" onClick={btnPressPrev}>
                <p><img src={prevImg} alt="" style={{ height: "50px" }} /></p>
            </button>


            <div className="box">
                <div className="image">
                    <img src={data.articles[currentIndex].urlToImage ? data.articles[currentIndex].urlToImage : sampleImg} alt="" />
                </div>

                <div className="text-container-heading">
                    <div>
                        <h2>{data.articles[currentIndex].title}</h2>
                        <p>{data.articles[currentIndex].description}</p>
                    </div>
                    <a href={data.articles[currentIndex].url} target="_blank" rel="noreferrer">
                        Read More
                    </a>
                </div>
            </div>


            <button className="next-btn" onClick={btnPressNext}>
                <p><img src={nextImg} alt="" style={{ height: "50px" }} /></p>
            </button>


        </div>


    );
}
