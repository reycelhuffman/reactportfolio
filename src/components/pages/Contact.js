import React from 'react';
import Image from "../elements/Image";


export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <a href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true">
        <Image
          src={require("./../../assets/img/48-486428_about-contact-us-wallpaper-hd.jpg")}
          alt="Github"
          width={300}
          href="https://docs.google.com/document/d/1liyCcq_EasESWtMTfsrcsYcqI-m5U1Nc/edit?usp=sharing&ouid=110244157607918638497&rtpof=true&sd=true"
          height={250}
        />
      </a>
        <p>
        I would love to hear from you!
        Let's Connect! </p>
        <p>Email: reycelhuffman@gmail.com</p>
        <p>Phone: 763-867-5309</p>

    </div>
  );
}
