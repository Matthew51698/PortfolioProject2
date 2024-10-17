const info = document.getElementById('info');

// Convert the children of the 'info' div to an array
const children = Array.from(info.children);

// Hide each child element
children.forEach(element => {
    element.style.display = 'none'; // Set display to none to hide it
});

const skills= document.getElementById('codelanguage');

const images= Array.from(skills.children);

for(let i=0; i< images.length; i++ ){
    images[i].addEventListener('click', () =>{
        children[i].style.display= 'inline';
    })
}