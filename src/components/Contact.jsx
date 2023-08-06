import React from "react"
import newspaper from "./images/newspaper_icon.png"
import youtube from "./images/youtube.png"
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"



export default function Contact() {
    return (
        <div className="contact">
            <div className="title">
                <img src={newspaper} alt="" />
                <h1>InsightInk</h1>
            </div>

            <div className="info">
                <p>Privacy Policy</p>
                <p>We are committed to safeguarding your personal information and respecting your privacy. We do not share, sell, or disclose any user data to third parties. Your trust is our priority.</p>
            </div>

            <div className="social_media">
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    <img src={youtube} alt="YouTube" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="Twitter" />
                </a>
            </div>

        </div>
    )
}