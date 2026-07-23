const heading = document.querySelectorAll('p strong');
alert('dubble click for knowing Content')
let content = ''
for (const el of heading) {
    content += el.textContent + ' | ';
}

window.addEventListener("dblclick", () => {
    alert(content);
});