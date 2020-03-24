
function init(){
    let image = document.createElement("img");
    image.src="flower2.png";
    var src = document.getElementById("new_element");
    src.appendChild(image);

	let spans =["rainbow"]          
	let colors = ["red", "orange","yellow","green","blue","purple","pink"];

	for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color =console.log( colors[i]);
    }

}