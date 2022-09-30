function showMenu(){
    var x = document.getElementById("myLinks");
    var y = document.getElementById("hambut");
    var y_bf = y.style;
    
    if (x.style.display === "block") {
      x.style.opacity = 1;
      var intervalId = setInterval(function(){
      if(x.style.opacity == 0)
        {
          clearInterval(intervalId);
          x.style.display = "none";
        }else{
          x.style.opacity = parseFloat(x.style.opacity) - 0.1;
        }
      },50);
      y.style =  y_bf;
      
    } else {
      x.style.opacity = 0;
      x.style.display = "block";
      var intervalId = setInterval(function(){
        if(x.style.opacity >= 1)
        {
          clearInterval(intervalId);
        }else{
          x.style.opacity = parseFloat(x.style.opacity) + 0.1;
        }
      },50);
      y.style =  `color:red;
      border: 2px solid red;
      background-color: aliceblue;`;
    }
}