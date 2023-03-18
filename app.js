const game_button = document.querySelectorAll("#game_btn")
const game_text = document.getElementsByClassName('txt')
const game_input = document.getElementById('input_box')
const body_ = document.getElementById('body')
const low = document.getElementById("too_low")
const high = document.getElementById("too_high")
const correct = document.getElementById("bingo")

let secret_no;
let clicked = false

        function new_game() {
            secret_no = Math.floor(Math.random()*300)
            game_text[1].textContent = "Random number generated"
            clicked = true
            
        }
let guess_value = game_input.value
function check_user_guess() {
        
        if(clicked == true){
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
                body_.style.backgroundColor = "crimson"
                high.play()
            }else if(parseInt(guess_value) < secret_no) {
                game_text[2].textContent = (`---${guess_value} is too low---`)
                body_.style.backgroundColor = "cyan"
                game_input.value = ""
                low.play()
            }
        }
        else {
            game_text[1].textContent = "--start game by clicking new game button--"
        }
        game_input.value = ""
}
    
game_button[0].addEventListener('click', function() {
        new_game()
} )

 game_button[1].addEventListener('click' , function() {
        check_user_guess()
 })

document.addEventListener('keydown' , function(event){
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
