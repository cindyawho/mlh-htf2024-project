import '../App.css';
import React from "react";
import PageHero from '../components/PageHero';
import resourceList from '../data/resources.json'

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
            fileURL={resource.fileURL} 
          />
        ))}
    </div>
    </>
  );
}

function ResourceItems({title, fileURL, imgURL, price, grades, subjects, type, format, size}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{fileURL}</p>
    </div>
  );
}

export default Resources;
