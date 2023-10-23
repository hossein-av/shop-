let Sindex = 1
let remTime = 50000;

function setTime() {
    if (remTime == 0) return;
    let h = Math.floor((remTime / 3600))
    let m = Math.floor((remTime % 3600) / 60)
    let s = Math.floor((remTime % 3600) % 60)
    document.querySelector('#hours').innerHTML = h
    document.querySelector('#minutes').innerHTML = m
    document.querySelector('#seconds').innerHTML = s
}
setInterval(() => {
    remTime -= 1
    setTime()
}, 1000)


function set(input, index) {
    Sindex = index
    let x = document.querySelector(`#${input}`)
    let item = [...document.querySelector('.slides').children]
    item.forEach((element) => {
        element.classList.remove('active')
    })


    x.classList.add('active')

}
setInterval(() => {
    Sindex += 1
    if (Sindex == 4) {
        Sindex = 1;
    }
    set(`slide${Sindex}`, Sindex)
}, 4000)