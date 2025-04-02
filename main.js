function setActive(obj){
    document.querySelectorAll(".navimg").forEach(button => button.classList.remove("active"))
    obj.classList.toggle("active")
}