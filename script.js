//your JS code here. If required.
document.addEventListener("DOMContentLoaded",display)
function display()
{
	let text=document.createElement("p")
	text.textContent="DOM load success"
	document.body.appendChild(text)
}