/*Botão para recolher Sidebar*/
let setaSidebar = document.querySelector(".seta")

setaSidebar.addEventListener("click", function(){
  let sidebar = document.querySelector(".sidebar")/*Div Sidebar*/
  let logoSidebar = document.querySelector(".logo")/*Div Logo Sidebar*/

  if(sidebar.style.width === "100px"){
    sidebar.style.width = "220px"
    setaSidebar.style.rotate = "360deg"
    logoSidebar.style.width = "190px"
    logoSidebar.style.backgroundImage = "url('assets/images/logo.png')"
    logoSidebar.style.backgroundSize = "190px 40px"
  } else {
    sidebar.style.width = "100px"
    setaSidebar.style.rotate = "180deg"
    logoSidebar.style.width = "80px"
    logoSidebar.style.backgroundImage = "url('assets/images/logoelv.png')"
    logoSidebar.style.backgroundSize = "80px 40px"
  }
})