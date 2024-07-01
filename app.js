const progressEl = document.querySelector(".progress")



window.onscroll=()=>scrolllProgress()

function scrolllProgress(){
    const pageHeight   = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scroll = scrollTop/pageHeight
    const scrollPercentage = (scrollTop/pageHeight)*100
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollPercentage+"%"
    
}