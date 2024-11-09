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
      <div class="resourcesHeader">
        <div class="filter">
          <p>Filter: </p>
          <button class="filterButton">Grade(s)</button>
          <button class="filterButton">Subject(s)</button>
        </div>
        <div class="create">
          <button>Upload a Resource</button>
        </div>
      </div>
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
        <a href={fileURL} target='_blank' rel='noopener noreferrer'><p>Resource Available for <strong>$ {price}</strong></p></a>
        <p>
          <strong>Best for grades</strong>: 
          {grades.map((grade, index) => (
            <span> {grade},</span>
          ))}
        </p>
        <p>
          <strong>Subjects</strong>: 
          {subjects.map((subject, index) => (
            <span> {subject},</span>
          ))}
        </p>
        
      </span>
    </div>
  );
}

export default Resources;
