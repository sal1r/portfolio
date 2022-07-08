links = [["обо мне", "#about"], ["прайслист", "#price"], ["контакты", "#contact"]]
links.forEach(el => {
	document.getElementById("head_links").innerHTML += `<a class="head_link" href="${el[1]}">${el[0]}</a>`
});