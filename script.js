const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const reset = document.getElementById('reset');
const scoreplayer1 = document.getElementById('left-score');
const scoreplayer2 = document.getElementById('right-score');
const playUpto = document.querySelector('#playUpto');
let player1score = 0;
let player2score = 0;
let winningscore = 0;
let win = false;

function playerwon( won , lost) {
    win = true;
    won.style.color = 'green';
    lost.style.color = 'red';
    document.getElementById("player1").disabled = true;
    document.getElementById("player2").disabled = true;
    if(player1.disabled == true && player2.disabled == true)
    {
        player1.style.backgroundColor = '#bbdfc8';
        player2.style.backgroundColor = '#a7c5eb';
    }
}
player1.addEventListener('click', () => {
    if(!win){
        console.log(winningscore);
    if(player1score < winningscore){
        player1score++;
        scoreplayer1.innerHTML = `${player1score}`;
        if(player1score === winningscore)
         {
           playerwon(scoreplayer1, scoreplayer2 );
         }
    }
    }  
});
player2.addEventListener('click', () => {
    if(!win && winningscore) {
        if(player2score< winningscore){
            player2score++;
            scoreplayer2.innerHTML = `${player2score}`;
        }
        if(player2score === winningscore)
         {
           playerwon(scoreplayer2, scoreplayer1);
         }
    } 
});
playUpto.addEventListener('change', function() {
    winningscore = parseInt(this.value);
})


