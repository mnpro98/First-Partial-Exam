document.getElementById("submit").addEventListener("click", addContent);

function addContent(event){
	if(document.querySelector('.userName').value == "" || document.getElementById('userComment').value == ""){
		event.preventDefault();
	}else{
		event.preventDefault();
		document.querySelector('.seccionComments').innerHTML += 
		`<h1>` + document.querySelector('.userName').value + `</h1>
		<p>` + document.getElementById('userComment').value + `</p>`;
	}
}