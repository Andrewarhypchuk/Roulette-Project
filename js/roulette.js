
let totalWin = 0;
let showAttempt = 3;
let answer =confirm('Do you want to play a game?');
if( answer === true){
 question(8,100,50,25);
} else{
             alert( 'You did not become a billionaire, but can');
             
          }


          function question(pockets,prize1,prize2,prize3){

      let pocketNumber = Math.floor(Math.random()* pockets);
      console.log(pockets);
        console.log(pocketNumber);
        let playerTry = +prompt(`
                Choose a roulette pocket number from 0 to ${pockets}
                Attempts left : ${showAttempt}
                Possible prize on current attempt ${prize1}$
                Total prize : ${totalWin}$
                Enter a number of pocket on which the ball could  land,you have 3 attempts`);
                
               
                  
         if (playerTry === pocketNumber ){
         let answerTwo = confirm(`Congratulation, you won! Your prize is:${prize1}$. Do you want to continue?`);
         totalWin = totalWin + prize1;
         if( answerTwo === true){
        question(pockets +4,prize1*2,prize2*2,prize3*2);
        }else{
        alert(`Thank you for your participation. Your prize is:${totalWin}$`)
        }
        }else{
         playerTry = +prompt(`
            Choose a roulette pocket number from 0 to ${pockets}
            Attempts left : ${showAttempt - 1}
            Possible prize on current attempt ${prize2}$
            Total prize : ${totalWin}$
            Enter a number of pocket on which the ball could  land ,now you have 2 attempts`);
          
            if (playerTry === pocketNumber){
let answerTwo = confirm(`Congratulation, you won! Your prize is: ${prize2}$. Do you want to continue?`);
                totalWin = totalWin + prize2;
        
              if( answerTwo === true){
                  
                  question(pockets +4,prize1*2,prize2*2,prize3*2);
              }else{
                alert(`Thank you for your participation. Your prize is:${totalWin}$`)
            }
            }else{
                playerTry = +prompt(`
                Choose a roulette pocket number from 0 to ${pockets}
                Attempts left : ${showAttempt -2 }
                Possible prize on current attempt ${prize3}
                Total prize : ${totalWin} $
                Enter a number of pocket on which the ball could  land ,now you have 1 attempt`);
               
                if (playerTry === pocketNumber){
        let answerTwo= confirm(`Congratulation,you won!Your prize is:${prize3}$.Do you want to continue?`);
                    totalWin = totalWin + prize3;
        
              if( answerTwo === true){
                  
                  question(pockets +4,prize1*2,prize2*2,prize3*2);
              }else{
                alert(`Thank you for your participation. Your prize is:${totalWin} $`)
            }
                }else{
                    alert(`Thank you for your participation. Your prize is:${totalWin}$`);
                    let nextTry = confirm('Do you want to play a game?');
                    if(nextTry === true){
                     question(8,100,50,25);
                    }
                }
            }
        
        }
  
    
          

} 