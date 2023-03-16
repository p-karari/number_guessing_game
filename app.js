// alert("hello world")

const game_button = document.querySelectorAll("#game_btn")
const game_text = document.getElementsByClassName('txt')
const game_input = document.getElementById('input_box')
const body_ = document.getElementById('body')
const low = document.getElementById("too_low")
const high = document.getElementById("too_high")
const correct = document.getElementById("bingo")

let secret_no;
    // game_button[0].addEventListener('click' ,function(){
        function new_game() {
            secret_no = Math.floor(Math.random()*300)
            game_text[1].textContent = "Random number generated"
            
        }
        
    // })
    
    // game_button[1].addEventListener('click', check_user_guess{
        function check_user_guess() {
            let guess_value = game_input.value
            if(guess_value === ""){
                game_text[2].textContent = "---please provide a number!---"
            } else if(secret_no === parseInt(guess_value)){
                game_text[2].textContent = " ---bingo ,you gessed it right!---"
                game_input.textContent = secret_no
                body_.style.backgroundColor = "pink"
                correct.play()
            }else if(parseInt(guess_value) > secret_no) {
                game_text[2].textContent = (`---${guess_value} is too high---`)
                game_input.value = ""
                body_.style.backgroundColor = "red"
                high.play()
            }else if(parseInt(guess_value) < secret_no) {
                game_text[2].textContent = (`---${guess_value} is too low---`)
                body_.style.backgroundColor = "cyan"
                game_input.value = ""
                low.play()
            }
            game_input.value = ""
            game_text[1].textContent = ""
        }
        
    // } )


document.addEventListener('keydown' , function(event){
    // console.log(event)
    if (event.key== "Enter"){
        check_user_guess()
    }
})

document.addEventListener('keydown' , function(e){
    console.log(e)
    if (e.key== "n"){
        new_game()
    }
})