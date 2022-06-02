import React from 'react';
import Image from "../elements/Image";

export default function Home() {
  return (
    <div className='backgroundimage'>
      <a href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true">
        <Image
          src={require("./../../assets/img/portfoliologo.png")}
          alt="Github"
          width={100}
          href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true"
          height={100}
        />
      </a>
      <h1>Home Page</h1>
      <br />
      <p>
            Thank you for checking out my page! Here are my links to my pages! 
      </p>
      <a href="https://github.com/reycelhuffman">
        <Image
          src={require("./../../assets/img/Octocat.png")}
          alt="Github"
          width={100}
          href="https://github.com/reycelhuffman"
          height={100}
        />
      </a>
      <a href="https://www.linkedin.com/in/reycel-huffman">
        <Image
          src={require("./../../assets/img/cutelinkedin.webp")}
          alt="Github"
          width={100}
          href="https://www.linkedin.com/in/reycel-huffman"
          height={100}
        />
      </a>
      <a href="https://github.com/reycelhuffman/reactportfolio/raw/main/reycelresume2022.docx
">
        <Image
          src={require("./../../assets/img/resume.png")}
          alt="Github"
          width={100}
          href="https://github.com/reycelhuffman/reactportfolio/raw/main/reycelresume2022.docx
          "
          height={100}
        />
      </a>
      
      <br />
      <br />
      <br />
      
      <br />
      <br />
      
    </div>
  );
}
