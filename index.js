// Your code goes here
document.addEventListener('DOMContentLoaded', function(){
    console.log('The DOM has loaded...')
    updateDOM()
})

function updateDOM() {
    para = document.getElementById('text').innerHTML = "This is really cool!"
}
