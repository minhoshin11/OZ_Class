
const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(`.numbers`)
const drawButton = document.querySelector(`#draw`)
const resetButton = document.querySelector(`#reset`)

let lottoNumbers = []

//클릭하면 랜덤숫자 여섯개가 배열에 추가된다!
drawButton.addEventListener("click", function(){
    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random() * 45) +1
        if(lottoNumbers.indexOf() === -1){
        lottoNumbers.push(rn)
         } }
        console.log(lottoNumbers)
})


//나중에 한번 더 들으러 오자..