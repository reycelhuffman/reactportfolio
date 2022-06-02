import React from 'react';
import Image from "../elements/Image";


export default function Work() {
  return (
    <div>
      <h1>My Work</h1>
      <a href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true">
        <Image
          src={require("./../../assets/img/laptop-home-office.webp")}
          alt="Github"
          width={450}
          href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true"
          height={350}
        />
      </a>
      <p>
        Here are some of my recent works: 
      </p>
            <li><a href="https://reycelhuffman.github.io/Refactor-Homework1-/">GitHub Horiseon - Very first work in editing a web page</a></li>
            <li><a href="https://reycelhuffman.github.io/Password-Generator-Project-/">Password Generator - Easy way to generate your password without too much hustle</a></li>
            <li><a href="https://alecdziwanowski.github.io/Project1/">Ron Swonson Inspiration - Anytime, any day get your inspirational quotes from Ron Swonson with images of cats to match it with. If you like Ron Swonson and cats then this is for you!</a></li> 
            <li><a href="https://github.com/reycelhuffman/dayscheduler.git/">Day Planner - Looking for an easy app for a day planner, try this out, nothing has to be complicated. Just type down what your day looks like. </a></li>
            <li><a href="https://github.com/reycelhuffman/notetakerhw.git/">Note Taker App - Take notes like never before, fast quick and easy type as much as you want.</a></li> 
            <li><a href="https://github.com/reycelhuffman/Employee-Tracker-HW.git/">Employee Tracker - Application makes easier to add and edit an employee. </a></li> 
            <li><a href="https://github.com/reycelhuffman/therecipeforsuccess.git/">The Recipe for Success - Looking for a simple recipe? Type what your diet restrictions are and we'll tell you what you should make! Added bonus there's a cocktail that pairs with your meal.</a></li> 
    </div>
  );
}
