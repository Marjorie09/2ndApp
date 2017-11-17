function save(){
window.localStorage['foods'] = document.getElementById('foods').value;
}
function remember(){
document.getElementById('foods').value = window.localStorage['foods'];
}
