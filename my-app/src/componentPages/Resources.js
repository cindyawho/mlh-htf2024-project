import '../App.css';
import React from "react";
import PageHero from '../components/PageHero';
import resourceList from '../data/resources.json'
import './resources.css'

function Resources() {
  return (
    <>
      <PageHero 
        title1={"Resources"}
        title2={"Library"}
        subtitle1={"All You Need to Teach,"}
        subtitle2={"All in One Place"}
      />
      <div class="resourcesMain">
        {resourceList.map((resource, index) => (
          <ResourceItems 
            key={index} 
            title={resource.title} 
            author={resource.author}
            fileURL={resource.fileURL} 
            imgURL={resource.imgURL} 
            price={resource.price} 
            grades={resource.grades} 
            subjects={resource.subjects} 
            type={resource.type} 
            format={resource.format} 
            size={resource.size} 
          />
        ))}
    </div>
    </>
  );
}

function ResourceItems({title, author, fileURL, imgURL, price, grades, subjects, type, format, size}) {
  return (
    <div class="resourceItem">
      <img
        src={imgURL}
        alt="screenshot of resource"
        class="resourceImg"
      />
      <span class="resourceText">
        <span class="resourceTextHeader">
          <h3>{title}</h3>
          <h4>By: {author}</h4>
        </span>
        <a href={fileURL} target='_blank' rel='noopener noreferrer'><p>Resource Available for $ {price}</p></a>
        
      </span>
    </div>
  );
}

export default Resources;
