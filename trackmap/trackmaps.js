var scale = 1;

function onLoad(){
	scale = 1
	var image = document.getElementById("image");
	image.src="SPB-ru.svg";
	document.getElementById('scale').innerHTML= scale + "x";
}

function refresh(){
	location.reload(true);
	alert("reloaded");
}

function changeImage(mapname){
	var image = document.getElementById("image");
	image.src= "";
	image.src= mapname+".svg";
}

function zoomIn(){
        var image = document.getElementById("image");
		var currWidth = image.clientWidth;
        if(scale == 20) {
			document.getElementById("+").disabled = true;
			return false;
		}
		else{
			document.getElementById("-").disabled = false;
            image.style.width = (currWidth + 100) + "px";
			scale++;
			document.getElementById('scale').innerHTML= scale + "x";
        } 
    }
    function zoomOut(){
		document.getElementById("+").disabled = false;
		var image = document.getElementById("image");
		var currWidth = image.clientWidth;
        if(scale==1 || currWidth == window.innerWidth){
			document.getElementById("-").disabled = true;
			return false
			}
		 else if (scale==2){
			document.getElementById("-").disabled = true;
			}	
		image.style.width = (currWidth - 100) + "px";
		scale--;
		document.getElementById('scale').innerHTML= scale + "x";
        
    }

    function zoomDefault(){
		document.getElementById("-").disabled = true;
        var image = document.getElementById("image");
        image.style.width = window.innerWidth;
		scale = 1;
		document.getElementById('scale').innerHTML= scale + "x";
    }

function changeTheme()
{
	if(document.getElementById("darktheme").innerHTML == "Светлая тема") 
		{document.getElementById("darktheme").innerHTML = "Темня тема";}
	else
		{document.getElementById("darktheme").innerHTML = "Светлая тема";}
	var element = document.body;
	element.classList.toggle("dark-mode");
}