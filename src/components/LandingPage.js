import React from 'react';


function Page(){
var menuHolder = document.getElementById('menuHolder')
var siteBrand = document.getElementById('siteBrand')
function menuToggle(){
  if(menuHolder.className === "drawMenu") menuHolder.className = ""
  else menuHolder.className = "drawMenu"
}
if(window.innerWidth < 426) siteBrand.innerHTML = "MAS"
window.onresize = function(){
  if(window.innerWidth < 420) siteBrand.innerHTML = "MAS"
  else siteBrand.innerHTML = "MY AWESOME WEBSITE"
}
}

const LandingPage = () => {
    return(

   <>
<div class="p-3 bg-dark text-white">
  <div class="flexMain">
    <div class="flex1">
 
    </div>
    <div class="flex2 text-center">
      <div><strong>This site design is awesome. Try it</strong></div>
    </div>
    <div class="flex1">
 
    </div>
  </div>
</div>
<div id="menuHolder">
  <div role="navigation" class="sticky-top border-bottom border-top" id="mainNavigation">
    <div class="flexMain">
      <div class="flex2">
        <button class="whiteLink siteLink" style="border-right:1px solid #eaeaea" onclick="menuToggle()"><i class="fas fa-bars me-2"></i> MENU</button>
      </div>
      <div class="flex3 text-center" id="siteBrand">
        The Blog
      </div>
 
      <div class="flex2 text-end d-block d-md-none">
        <button class="whiteLink siteLink"><i class="fas fa-search"></i></button>
      </div>
 
      <div class="flex2 text-end d-none d-md-block">
        <button class="whiteLink siteLink">REGISTER</button>
        <button class="blackLink siteLink">Login</button>
      </div>
    </div>
  </div>
 
  <div id="menuDrawer">
    <div class="p-4 border-bottom">
      <div class='row'>
        <div class="col">
          <select class="noStyle">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="italian">Italian</option>
            <option value="hebrew">Hebrew</option>
          </select>
        </div>
        <div class="col text-end ">
          <i class="fas fa-times" role="btn" onclick="menuToggle()"></i>
        </div>
      </div>
    </div>
    <div>
      <a href="#" class="nav-menu-item"><i class="fas fa-home me-3"></i>Home</a>
      <a href="#" class="nav-menu-item"><i class="fab fa-product-hunt me-3"></i>Products</a>
      <a href="#" class="nav-menu-item"><i class="fas fa-search me-3"></i>Explore</a>
      <a href="#" class="nav-menu-item"><i class="fas fa-wrench me-3"></i>Services</a>
      <a href="#" class="nav-menu-item"><i class="fas fa-dollar-sign me-3"></i>Pricing</a>
      <a href="#" class="nav-menu-item"><i class="fas fa-file-alt me-3"></i>Blog</a>
      <a href="#" class="nav-menu-item"><i class="fas fa-building me-3"></i>About Us</a>
    </div>
  </div>
</div>
   
   
   
   
   
   
   
   
   </> 
   
   )
}

export default LandingPage;