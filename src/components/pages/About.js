import React from 'react';
import Image from "../elements/Image";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <a href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true">
        <Image
          src={require("./../../assets/img/portaitportfolio.JPG")}
          alt="Github"
          width={300}
          href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true"
          height={400}
        />
      </a>
      <br />
      <br />
      <br />
      <p>
          I am new to web development.  These days I spend my time learning about HTML, CSS, 
          Javascript and Nodes. I am excited to continue to gain more skills as a developer 
          so that I can implement these into my new role in the workplace. 
          During my free time I like to spend time with my family and friends, cook, 
          do yoga and watch youtube videos on coding.
      </p>
    </div>
  );
}
