import React from 'react';


const Nav = () => {
    return(
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">The Blog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog Articles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resources</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Social Media</a></li>
            <li><a class="dropdown-item" href="#">Google Ads</a></li>
            <li><a class="dropdown-item" href="#">Facebook Ads</a></li>
          </ul>
        </li>
        
      </ul>
      <div class="d-flex">

        <ul>
        <li><span class="social-icon social-facebook"><i class="fa fa-facebook"></i></span></li>
        <li><span class="social-icon social-google"><i class="fa fa-google"></i></span></li>
        <li><span class="social-icon social-linkedin"><i class="fa fa-linkedin"></i></span></li>
        <li><span class="social-icon social-instagram"><i class="fa fa-instagram"></i></span></li>
        <li><span class="social-icon social-twitter"><i class="fa fa-twitter"></i></span></li>
    </ul>
        
      </div>
    </div>
  </div>
</nav>

{/* Carousel Bootstrap 5 */}
<div id="carousel-2" class="carousel slide carousel-fade" data-ride="carousel" data-interval="6000">
        <ol class="carousel-indicators">
            <li data-target="#carousel-2" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-2" data-slide-to="1"></li>
            <li data-target="#carousel-2" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          
            <div class="carousel-item active">
                <a href="https://journals.sagepub.com/doi/10.1111/1467-954X.12082">

                 <img src="https://images.pexels.com/photos/5911136/pexels-photo-5911136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="responsive image" class="d-block img-fluid"/>

                    <div class="carousel-caption">
                        <div>
                            <h2>The Sociology of Love</h2>
                            <p>Romance and Love In Sociological Discussion.</p>
                            <p>By:Julia Carter</p>
                            <span class="btn btn-sm btn-outline-secondary"><a href="https://thesociologicalreview.org/collections/interviews/the-sociology-of-love/">Learn More</a></span>
                        </div>
                    </div>
                </a>
            </div>
          
          
            <div class="carousel-item">
                <a href="https://www.sandiegouniontribune.com/topic/hello-gen-z">
                 <img src="https://images.pexels.com/photos/3419731/pexels-photo-3419731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="responsive image" class="d-block img-fluid"/>

                    <div class="carousel-caption justify-content-center align-items-center">
                        <div>
                            <h2>Gen-Z and Friendships Post Pandemic and You.</h2>
                            <p>Why Gen Z is the most connected generation but also the loneliest.</p>
                            <p>By:Gael Aitor</p>
                            <span class="btn btn-sm btn-outline-secondary"><a href="https://www.sandiegouniontribune.com/opinion/commentary/story/2020-07-24/hello-genz-pandemic-mental-health">Read More</a></span>
                        </div>
                    </div>
                </a>
            </div>
           
            <div class="carousel-item">
                <a href="https://www.pewresearch.org/social-trends/2019/02/14/millennial-life-how-young-adulthood-today-compares-with-prior-generations-2/">
  
                 <img src="https://images.pexels.com/photos/3617872/pexels-photo-3617872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="responsive image" class="d-block img-fluid"/>


                    <div class="carousel-caption justify-content-center align-items-center">
                        <div>
                            <h2>Research Shows That Millennials Approaching Family More Differently Than Other Generations.</h2>
                            <p>New Pew Research Shows Millennials Approach to Parenthood Much Unique Than Other Age Groups.</p>
                            <p>By:Amanda Barroso, Kim Parker, Jesse Bennett</p>
                            <span class="btn btn-sm btn-secondary"><a href="https://www.pewresearch.org/social-trends/2020/05/27/as-millennials-near-40-theyre-approaching-family-life-differently-than-previous-generations/">Read More.</a></span>
                        </div>
                    </div>
                </a>
            </div>
            
        </div>

        <a class="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-2" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</> 
   
   )
}

export default Nav;