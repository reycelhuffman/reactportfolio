import React from 'react';
import Image from "../elements/Image";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
            Thank you for checking out my page! Here are my links to my pages! 
      </p>
      <a href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true">
        <Image
          src={require("./../../assets/img/portfoliologo.png")}
          alt="Github"
          width={350}
          href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true"
          height={400}
        />
      </a>
      <br />
      <br />
      <br />
      <a href="https://github.com/reycelhuffman">Click for my GitHub Link</a>
      <br />
      <br />
      <a href="https://www.linkedin.com/in/reycel-huffman/">Click for my Linkedin Link</a>
      <br />
      <br />
    
    </div>
  );
}
