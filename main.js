function setActive(obj){
    document.querySelectorAll("i").forEach(button => button.classList.remove("active"))
    obj.classList.toggle("active")
}