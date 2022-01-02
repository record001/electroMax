let plus = document.querySelectorAll(".questions__button")
let A = document.querySelectorAll(".A")


plus.forEach(el => {
  el.addEventListener("click", e => {

    e.target.lastElementChild.classList.toggle("opacity0")

    console.log(e.target.previousElementSibling.lastElementChild);

    e.target.previousElementSibling.lastElementChild.classList.toggle("opacity1")
  })
})

// modal

let experts__call = document.querySelector(".experts__call")
let close_btn  =document.querySelector(".close_btn")
let modal = document.querySelector(".modal")

experts__call.addEventListener("click", e => {
    modal.classList.add("open_modal")
})

close_btn.addEventListener("click", e => {
    modal.classList.remove("open_modal")
})

// our work corusel

let our_work_item = document.querySelectorAll('.work_carousel_item');
let work_item_array = []; //carouse items ga mos array yaratildi
for (let i = 0; i < our_work_item.length; i++) {
    work_item_array.push(i);
}
function work_carousel_init(array) {
    our_work_item[work_item_array[0]].style.left = `-100%`;
    our_work_item[work_item_array[0]].classList.add("d-none");
    
    our_work_item[work_item_array[1]].style.left = `-57%`;
    our_work_item[work_item_array[1]].classList.add("blur");
    let value = 0;

    for (let i = 2; i < our_work_item.length; i++) { //indexes : 2, 3, 4
        our_work_item[work_item_array[i]].style.left = `${value}%`
        value += 34;
        if (i === 5) {
            our_work_item[work_item_array[i]].classList.add("blur");
        } else if (i > 5) {
            our_work_item[work_item_array[i]].classList.add("d-none");
        }
    }
}
// event listener of next/prev buttons
document.querySelectorAll('.our_work_button').forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("arrow-prev")) { //prev bosilsa:
            our_work_item[work_item_array[0]].classList.remove("d-none");
            our_work_item[work_item_array[1]].classList.remove("blur");
            our_work_item[work_item_array[0]].classList.add("blur");
            work_item_array.unshift(work_item_array.pop())
        } else if (e.target.classList.contains("arrow-next")) { //next bosilsa:
            our_work_item[work_item_array[5]].classList.remove("blur");
            our_work_item[work_item_array[6]].classList.add("blur");
            our_work_item[work_item_array[6]].classList.remove("d-none");
            work_item_array.push(work_item_array.shift())
        }
        work_carousel_init(work_item_array)
    });
});
window.addEventListener("DOMContentLoaded", work_carousel_init(work_item_array));



// partners 

let items = document.querySelectorAll('.carousel-item');
let array = []; //carouse items ga mos array yaratildi
for (let i = 0; i < items.length; i++) {
    array.push(i);
}
//init carousel
function carousel_init(array) {
    let middle = array[Math.round(array.length / 2)-1]
    items[middle].style.left = `52%`//index: 3
    let value = 28;
    for (let i = Math.round(array.length / 2) - 2; i >= 0; i--) {//indexes: 0, 1, 2
        items[array[i]].style.left = `${value}%`
        value -= 24;
    }
    value = 76;
    for (let i = Math.round(array.length / 2); i < items.length; i++) { //indexes : 4, 5, 6
        items[array[i]].style.left = `${value}%`
        value += 24;
    }
}
// event listener of next/prev buttons
document.querySelectorAll('.carousel-items-arrow').forEach((btn) => {
    btn.addEventListener("click", (e) => {

        if (e.target.classList.contains("arrow-prev")) { //prev bosilsa:
            array.unshift(array.pop())
        } else if (e.target.classList.contains("arrow-next")) { //next bosilsa:
            array.push(array.shift())
        }
        carousel_init(array)
    });
});

window.addEventListener("DOMContentLoaded", carousel_init(array));