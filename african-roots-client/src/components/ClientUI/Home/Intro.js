// Intro on Home Page

import React from 'react'
import { Link } from 'react-router-dom'

class Intro extends React.Component {
    constructor(props) {
        super(props);
      }

    componentDidMount () {
    const script = document.createElement("script");

    script.src = "assets/js2/app.js";
    script.async = true;

    document.body.appendChild(script);
}  
    
    render() {
        return (
            <body className="demo-2">
            <main>
                <div className="message">Tilt your phone to see the effect.</div>
                <div className="frame">
                    <div 
                        id="gl" 
                        data-imageOriginal="assets/img/woman3_1.jpg" 
                        data-imageDepth="assets/img/woman3-map.jpg" 
                        data-horizontalThreshold="30" 
                        data-verticalThreshold="15">
                    </div>
                    <div className="frame__content">Roots</div>
                    <img src="assets/img/logo_icon.svg" className="homeImg" alt="Logo"></img>
                    
                    <h5 className="cafetxt">African Vegan café</h5>
                    <Link to='/menu' class="callToAction" style={{width:'200px'}}><h4>view menu<i class="material-icons float-right" style={{marginTop: '5px'}}>restaurant_menu</i></h4></Link>
                    <img src="assets/img/south-africa.svg" className="saImg" alt="Logo"></img>

                </div>
            </main>
            <script src="js/app.js"></script>
        </body>
//   <div>
//     <div className="background" style={{backgroundSize: '200px',backgroundImage: 'url(assets/img/Asset%203.svg)'}}></div>
//     <div className="container-fluid">
//         <div className="row">
//             <div className="col-12 firstRootsScrollCol" data-bs-parallax-bg="true" style={{backgroundImage: 'url(assets/img/ap-x-90-395040-unsplash.jpg)',backgroundPosition: 'center', backgroundSize: 'cover'}}>
//                 <div className="row headingLogoRow">
//                     <div className="col-4 col-md-auto ml-auto"><img src="assets/img/logo.svg" className="homeLogoImg" alt="African Roots Logo"></img></div>
//                     <div className="col-8 col-md-auto mr-auto">
//                         <h1 className="logoHeading1">ROOTS</h1>
//                         <h1 className="logoSubheading">African Vegan Cafe</h1>
//                     </div>
//                 </div>
//                 <div className="row homeActionRow">
//                     <div className="col-10 col-sm-6 col-lg-3 col-xl-2 mx-auto"><Link to='/menu'><button className="btn btn-dark btn-lg btnAction" type="button">Order Now</button></Link></div>
//                 </div>
//                 <div className="row homeActionRow">
//                     <div className="col-auto d-none d-lg-block mx-auto"><img src="assets/img/mouse.svg" className="scrollImageDT" alt="Mouse"></img></div>
//                     <div className="col-auto d-block d-lg-none mx-auto"><img src="assets/img/vertical-scroll.svg" className="scrollImageDT" alt="Hand"></img></div>
//                 </div>
//             </div>
//             <div className="col-12 RootsScrollCol" data-aos="fade-up">
//                 <h1 className="text-uppercase logoHeading1" style={{color: '#6C7C15'}}>Wortels<br></br></h1>
//             </div>
//             <div className="col-12 RootsScrollCol" data-aos="fade-up">
//                 <h1 className="text-uppercase logoHeading1" style={{color: '#90A61C'}}>Ireyisi<br></br></h1>
//             </div>
//             <div className="col-12 RootsScrollCol" data-aos="fade-up">
//                 <h1 className="text-uppercase logoHeading1" style={{color: '#B4CF23'}}>Digwete<br></br></h1>
//             </div>
//             <div className="col-12 RootsScrollCol" data-aos="fade-up">
//                 <h1 className="text-uppercase logoHeading1" style={{color: '#C1DB14'}}>Metso<br></br></h1>
//             </div>
//             <div className="col-12 RootsScrollCol" data-aos="fade-up">
//                 <h1 className="text-uppercase logoHeading1" style={{color: '#D1E902'}}>sí-hlahla<br></br></h1>
//             </div>
//             <div className="col-12 RootsScrollCol" data-aos="fade-up">
//                 <h1 className="text-uppercase logoHeading1" style={{color: '#DBD910'}}>Mintsu<br></br></h1>
//             </div>
//             <div className="col-12 RootsScrollCol" data-aos="fade-up">
//                 <h1 className="text-uppercase logoHeading1" style={{color: '#EDBF27'}}>modi<br></br></h1>
//             </div>
//             <div className="col-12 RootsScrollCol" data-aos="fade-up">
//                 <h1 className="text-uppercase logoHeading1" style={{color: '#FFA33F'}}>Tshimela<br></br></h1>
//             </div>
//             <div className="col-12 RootsScrollCol" data-aos="fade-up">
//                 <h1 className="text-uppercase logoHeading1" style={{color: '#ED874F'}}>iingcambu<br></br></h1>
//             </div>
//             <div className="col-12 RootsScrollCol" data-aos="fade-up">
//                 <h1 className="text-uppercase logoHeading1" style={{color: '#DE715B'}}>izimpande<br></br></h1>
//             </div>
//         </div>
//     </div>
//     <div data-bs-parallax-bg="true" className="AfricanDreamBG" style={{backgroundImage: 'url(assets/img/thomas-verbruggen-94814-unsplash.jpg)',backgroundSize: 'cover', backgroundPosition: 'center'}}>
//         <div className="container-fluid">
//             <div className="col d-md-none stufferCol"></div>
//             <div className="row africanDreamRow">
//                 <div className="col-lg-6 col-xl-6 d-none d-lg-block africanDreamIMG" style={{backgroundImage: 'url(assets/img/African%20Dream.png)',backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
//                 <div className="col-10 col-lg-4 offset-1 offset-lg-0 my-auto">
//                     <h1 className="d-xl-flex infoHeading">What is veganism</h1>
//                     <p className="infoParagraph">Veganism is a way of living which seeks to exclude, as far as is possible and practicable, all forms of exploitation of, and cruelty to, animals for food, clothing or any other purpose.</p>
//                     <h1 className="d-xl-flex infoHeading">Why Roots</h1>
//                     <p className="infoParagraph">At Roots we take veganism seriously, there is no better way for us to live our lives. Not only are we vegan but we are proudly African in our roots. Our meals are prepared only from crops made in Africa. Therefore if you choose to
//                         dine with us, you will have the pleasure of supporting African farms and delighting yourself with fresh products. </p>
//                 </div>
//                 <div className="col-1 col-lg-2 my-auto"></div>
//             </div>
//         </div>
//     </div>
//   </div>
        );
        }
    }

export default Intro