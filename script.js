function changeContent(content) {
  let content_desc = [ "intro-desc", "about-desc", "contact-desc", "portfolio-desc"];
  content_desc.map((desc) => {
    document.getElementById(desc).style.display = "none";
  });

  let navLinks = document.querySelectorAll(".links a")
  
  for(let i=0 ;i<navLinks.length;i++){
navLinks[i].classList.remove("active")
  }
  
  if (content == "intro-desc") {
    document.getElementById("intro-desc").style.display = "flex";
    navLinks[0].classList.add("active");
  } else if (content == "about-desc") {
    document.getElementById("about-desc").style.display = "block";
    navLinks[1].classList.add("active");
  } else if (content == "portfolio-desc") {
    document.getElementById("portfolio-desc").style.display = "block";
    navLinks[2].classList.add("active");
  } else if (content == "contact-desc") {
    document.getElementById("contact-desc").style.display = "flex";
    navLinks[3].classList.add("active");
  }
}


gsap.from(["nav h1", ".links"], {
  y: 20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  ease: "power2.out",
});
<<<<<<< HEAD
=======


function navigate(a){
  if(a==1){
    window.open("https://amazon-clone-react-by-ashish.netlify.app/")
  }else if(a==2){
    window.open("https://ashishgirproject-eshop.netlify.app/")
  }else if(a==3){
    window.open("https://www.behance.net/ashishbawabawa")
  }

}
>>>>>>> 1930d18 (add portfolio)
