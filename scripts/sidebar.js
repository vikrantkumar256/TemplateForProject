document.getElementById("muSidenav").style.width="250px";
function openNav() {
    if(document.getElementById("mySidenav").style.width == "250px")
    {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }
    else
    {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "white";
    }
    
  }
  
 