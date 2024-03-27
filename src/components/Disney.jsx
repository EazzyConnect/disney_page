import React from 'react';
import RowA from './sub-components/RowA';
import RowB from './sub-components/RowB';
import RowC from './sub-components/RowC';
import RowD from './sub-components/RowD';
import RowE from './sub-components/RowE';
import disneyCSS from './css-files/Disney.module.css';

// thirdRowData and fourthRowData inherit RowA component because they are the same pattern


export const Disney = ({ }) => {

 const firstRowData = [
  {
   img: "./src/assets/images/A-one.png",
   title: ` "Pixar Best" `,
   desc: "The ultimate best albu m of Pixar music! CD release/digital distribution on March 20th"
  },
  {
   img: "./src/assets/images/A-two.png",
   title: ` Held nationawide from May to June! `,
   desc: ` "Disney on Classic ~ Gilt of Dreams and Magic 2024" Orchestral performance of many popular works `
  },
  {
   img: "./src/assets/images/A-three.png",
   title: `Focus on Minnie in March`,
   desc: "Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse! "
  },
  {
   img: "./src/assets/images/A-four.png",
   title: ` disney palpalooza `,
   desc: `Tokyo Disneyland "Disney Palpaloza" 2nd "Donald's Quacky Duck City" held`
  }
 ];

 const secRowData = [
  {
   img: "./src/assets/images/B-one.png",
   title: `NEWS`,
   desc: "The ultimate best albu m of Pixar music! CD release/digital distribution on March 20th",
   date: " March 26, 2024 "
  },
  {
   img: "./src/assets/images/B-two.png",
   title: `NEWS`,
   desc: ` "Disney on Classic ~ Gilt of Dreams and Magic 2024" Orchestral performance of many popular works `,
   date: " March 26, 2024 "
  },
  {
   img: "./src/assets/images/B-three.png",
   title: `NEWS`,
   desc: "Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse! ",
   date: " March 26, 2024 "
  },
  {
   img: "./src/assets/images/B-four.png",
   title: `NEWS`,
   desc: `Tokyo Disneyland "Disney Palpaloza" 2nd "Donald's Quacky Duck City" held`,
   date: " March 26, 2024 "
  }
 ];

 const thirdRowData = [
  {
   img: "./src/assets/images/C-one.png",
   title: ` This month's recommended works`,
   desc: "The ultimate best albu m of Pixar music! CD release/digital distribution on March 20th"
  },
  {
   img: "./src/assets/images/C-two.png",
   title: ` final season `,
   desc: ` "Disney on Classic ~ Gilt of Dreams and Magic 2024" Orchestral performance of many popular works `
  },
  {
   img: "./src/assets/images/C-three.png",
   title: `original series`,
   desc: "Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse! "
  },
  {
   img: "./src/assets/images/C-four.png",
   title: ` disney plus `,
   desc: `Tokyo Disneyland "Disney Palpaloza" 2nd "Donald's Quacky Duck City" held`
  }
 ];

 const fourthRowData = [
  {
   img: "./src/assets/images/D-one.png",
   title: ` Chip & Dale birthday commemorative goods`,
   desc: ``
  },
  {
   img: "./src/assets/images/D-two.png",
   title: ` Casual Mickey Items `,
   desc: ` URBAN RESEARCH and others `
  },
  {
   img: "./src/assets/images/D-three.png",
   title: `Recommended gift items for the welcome season`,
   desc: ``
  },
  {
   img: "./src/assets/images/D-four.png",
   title: ` Disney Plastic Gamaguchi and others `,
   desc: `Chara Marche`
  }
 ];

 const fifthRowData = [
  {
   img: "./src/assets/images/E-one.png",
   title: ` chip and dale `,
   desc: "The ultimate best albu m of Pixar music! CD release/digital distribution on March 20th"
  },
  {
   img: "./src/assets/images/E-two.png",
   title: `rapunzel`,
   desc: ` "Disney on Classic ~ Gilt of Dreams and Magic 2024" Orchestral performance of many `
  },
  {
   img: "./src/assets/images/E-three.png",
   title: `ducky and bunny`,
   desc: "Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse! "
  },
  {
   img: "./src/assets/images/E-four.png",
   title: ` rabbit `,
   desc: `Tokyo Disneyland "Disney Palpaloza" 2nd "Donald's Quacky Duck City" held`
  },
  {
   img: "./src/assets/images/E-five.png",
   title: ` Tonsuke `,
   desc: `Tokyo Disneyland "Disney Palpaloza" 2nd "Donald's Quacky Duck City" held`
  }
 ];

 const LastRowData = [
  {
   img: "./src/assets/images/G-1.png",
  },
  {
   img: "./src/assets/images/G-2.png",
  },
  {
   img: "./src/assets/images/G-3.png",
  },
  {
   img: "./src/assets/images/G-4.png",
  },
  {
   img: "./src/assets/images/G-5.png",
  },
  {
   img: "./src/assets/images/G-6.png",
  },
  {
   img: "./src/assets/images/G-7.png",
  },
  {
   img: "./src/assets/images/G-8.png",
  },
  {
   img: "./src/assets/images/G-9.png",
  },
  {
   img: "./src/assets/images/G-10.png",
  },
  {
   img: "./src/assets/images/G-11.png",
  },
  {
   img: "./src/assets/images/G-12.png",
  },
  {
   img: "./src/assets/images/G-13.png",
  },
  {
   img: "./src/assets/images/G-14.png",
  },
  {
   img: "./src/assets/images/G-15.png",
  },
  {
   img: "./src/assets/images/G-16.png",
  },
  {
   img: "./src/assets/images/G-17.png",
  },
  {
   img: "./src/assets/images/G-18.png",
  }
 ];


 return (
  <>

   <div id={disneyCSS.container}>

    <div>
     <img id={disneyCSS.heroImg} src="./src/assets/images/disney1.jpg" alt="img.png" />
    </div>


    <div id={disneyCSS.first}>
     {
      firstRowData.map((pic, index) => {
       return (
        <RowA key={index} firstImg={pic.img} firstTitle={pic.title} firstDesc={pic.desc} />
       )
      })
     }
    </div>


    <div id={disneyCSS.second}>

     <h3 id={disneyCSS.second1}>news</h3>

     <div id={disneyCSS.second2}>
      {
       secRowData.map((pic, index) => {
        return (
         <RowB key={index} secImg={pic.img} secTitle={pic.title} secDesc={pic.desc} secDate={pic.date} />
        )
       })
      }
     </div>

     <button id={disneyCSS.secondBtn}><a href="">Go to news list</a></button>

    </div>


    <div id={disneyCSS.third}>

     <h3 id={disneyCSS.third1}>Disney Plus recommended information</h3>

     <div id={disneyCSS.third2}>
      {
       thirdRowData.map((pic, index) => {
        return (
         <RowE key={index} firstImg={pic.img} firstTitle={pic.title} firstDesc={pic.desc} />
        )
       })
      }
     </div>

    </div>


    <div id={disneyCSS.fourth}>

     <h3 id={disneyCSS.fourth1}>Goods featuring popular characters are available!</h3>

     <div id={disneyCSS.fourth2}>
      {
       fourthRowData.map((pic, index) => {
        return (
         <RowA key={index} firstImg={pic.img} firstTitle={pic.title} firstDesc={pic.desc} />
        )
       })
      }
     </div>

    </div>


    <div id={disneyCSS.fifth}>

     <h3 id={disneyCSS.fifth1}>Character introduction</h3>

     <div id={disneyCSS.fifth2}>
      {
       fifthRowData.map((pic, index) => {
        return (
         <RowC key={index} thirdImg={pic.img} thirdTitle={pic.title} thirdDesc={pic.desc} />
        )
       })
      }
     </div>

     <button id={disneyCSS.fifthBtn}><a href="">Go to character list</a></button>

    </div>


    <div id={disneyCSS.sixth}>

     <div id={disneyCSS.sixth1}>
      <img src="./src/assets/images/FT-1.png" alt="img.png" />
      <img src="./src/assets/images/FT-2.png" alt="img.png" />
      <img src="./src/assets/images/FT-3.png" alt="img.png" />
      <img src="./src/assets/images/FT-4.png" alt="img.png" />
     </div>

     <h4 id={disneyCSS.sixth2}>Special</h4>

     <div id={disneyCSS.sixth3}>
      <img src="./src/assets/images/F-one.png" alt="img.png" />
      <img src="./src/assets/images/F-two.png" alt="img.png" />
      <img src="./src/assets/images/F-three.png" alt="img.png" />
      <img src="./src/assets/images/F-four.png" alt="img.png" />
      <img src="./src/assets/images/F-five.png" alt="img.png" />
     </div>

    </div>

    <div id={disneyCSS.seventh}>

     <h4 id={disneyCSS.seventh1}>character products</h4>

     <div id={disneyCSS.seventh2}>
      {
       LastRowData.map((pic, index) => {
        return (
         <RowD key={index} bottomImg={pic.img} />
        )
       })
      }
     </div>
    </div>


    <div id={disneyCSS.bottomDiv}>

     <div id={disneyCSS.bottomDiv1}>
      <i className="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-x-twitter"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-youtube"></i>
      <p>Go to SNS list</p>
     </div>

     <div id={disneyCSS.bottomDiv2}>

      <div id={disneyCSS.bottomDiv2a}>
       <h5 className={disneyCSS.bottomDivText}>disney store club</h5>
       <h5 className={disneyCSS.bottomDivText}>disney card club</h5>
       <h5 className={disneyCSS.bottomDivText}>MovieNEX CLUB</h5>
       <h5 className={disneyCSS.bottomDivText}>fantasy disney</h5>
      </div>

      <div id={disneyCSS.bottomDiv2b}>
       <h6 className={disneyCSS.bottomDivText}>Online Halp(Frequently Asked Questions)</h6>
       <h6 className={disneyCSS.bottomDivText}>Contact information</h6>
       <h6 className={disneyCSS.bottomDivText}>Company information</h6>
       <h6 className={disneyCSS.bottomDivText}>Recruitment information</h6>
      </div>

      <div id={disneyCSS.bottomDiv2c}>
       <h6 className={disneyCSS.bottomDivText}>Disney sites around the world</h6>
       <h6 className={disneyCSS.bottomDivText}>Social Responsibility</h6>
       <h6 className={disneyCSS.bottomDivText}>Privacy policy</h6>
       <h6 className={disneyCSS.bottomDivText}>Privacy policy supplement</h6>
      </div>

      <div id={disneyCSS.bottomDiv2d}>
       <h6 className={disneyCSS.bottomDivText}>terms of service</h6>
       <h6 className={disneyCSS.bottomDivText}>Copyright / Trademark</h6>
       <h6 className={disneyCSS.bottomDivText}>(Note) Regarding product listings of linked shop</h6>
       <h6 className={disneyCSS.bottomDivText}></h6>
      </div>

     </div>

     <p>disney account @Eazzy 2024</p>

    </div>

   </div>

  </>
 )
};

