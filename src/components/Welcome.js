import React from 'react';
import welcomeGalleryData from "./data/welcomeGallery.json"


const Welcome = ()=>{
    return (
      <div className="scene" id="welcome">
        <article className="content">
          <div className="gallery">
            {
              welcomeGalleryData.map((imgData)=>
                <img className={imgData.class} src={imgData.src} alt={imgData.alt} />
              )
            }
          </div> // gallery
          <h1>Welcome to the Landon&nbsp;Hotel</h1>
          <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
        </article>
      </div>
    )
}

export default Welcome;