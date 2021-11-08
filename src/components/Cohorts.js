import React from 'react'
import '../css/cohort.css';

const Cohorts = () => {
    return (
        <div class="">
            <div class="conatainer">
        
        <nav class="navbar navbar-expand-md navbar-dark fixed-top container-fluid">
            <a class="navbar-brand" href="#">
                <img src="images/code queen.png" alt="code-queen logo" class="logo-header"/>
            </a>
        
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
                
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="homepage">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="form" target="_blank">APPLY NOW</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login">LOGIN</a>
                    </li>
                </ul>
            </div>
        </nav>
       
    </div>
    

    <div class="cohort-intro-div">
        <h2 class="section-title text-center">What are Code Queen Cohorts?</h2>
        <p class="cohort-paragraph">Our cohorts consist of aspiring developers, IX designers, project managers and so much more. 
            Our previous cohorts have resulted in graduates going on to work internationally for Tata and locally at Trustful Trade, Kanzu Code and Laboremus. 
            We run a total of three cohorts per year. 
            <div class="row">
                <div class="col-md-6">
                    <ul class="cohort-dates">
                        <li><i class="far fa-calendar-check"></i> March to May</li>
                        <li><i class="far fa-calendar-check"></i> June to August</li>
                        <li><i class="far fa-calendar-check"></i> September to November</li>
                    </ul>
                </div>
                <div class=" col-md-6">
                    <ul class="cohort-hours">
                        <li><i class="fa fa-clock-o"></i> 70 Hours of online lessons</li>
                        <li><i class="fa fa-clock-o"></i> 75 Hours of mentoring</li>
                        <li><i class="fa fa-clock-o"></i> 205 Hours of self-study</li>
                    </ul>
                </div>
            </div>
            
        </p>
        
    </div>

    <div class="container-fluid gallery">
        <h2 class="section-title text-center">Gallery</h2>
        <div id="gallery-section" class="row">
            <div class="col-md-4">
                <img src="./images/pic9.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic1.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic2.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic3.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic4.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic5.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic6.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic7.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic8.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic10.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic12.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/background.jpg" class="picss" alt=""/>
            </div>

        </div>
    </div>
    
    <footer>
        <div class="">
            <div class="row">
                <div class="col-md-3 ">
                    <div class="footer-logo mb30"> <img src="../images/side-logo.png" alt="" class="logo-ft"/></div>
                    <address class="footer-list"><i class="fa fa-map-marker location"></i> 
                        Plot 31 Ntinda - Kisaasi Road
                            Ntinda Shopping Complex 
                            Block B&C 3rd Floor
                    </address>
                    <ul class="footer-list contact">
                        <li><i class="fa fa-phone"></i> 0393241297</li>
                        <li><i class="fa fa-envelope-o"></i> team@etc.education</li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h3 class="footer-title">Information</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-angle-right"></i> <a href="https://twitter.com/etceducation" target="_blank">Twitter</a></li>
                        <li><i class="fas fa-angle-right"></i> <a href="https://www.facebook.com/etceducation/?ref=br_rs" target="_blank">Facebook</a></li>
                        <li><i class="fas fa-angle-right"></i> <a href="https://www.linkedin.com/groups/9012051/" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>

                <div class="col-md-4">
                    <h3 class="footer-title">Newsletter</h3>
                    <p>Subscribe to our newsletter to get the latest 
                        updates to your inbox.</p>

                        <form>
                            <div class="input-group">
                            <input type="email" class="form-control" placeholder="Email Address"/>
                            <span class="input-group-btn">
                            <button class="btn btn-ft" type="button">subscribe</button>
                            </span>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Cohorts
