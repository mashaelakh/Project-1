$(function(){
    // getting users names and choice of X or O !

    let sound = new Audio("xo.mp3"); // when user play x
    let sound2 = new Audio("xo2.mp3"); //  when user play o
    let sound3= new Audio("sound.mp3");
    let counter=0;
    let game = ['','','',
                '','','',
                '','','']  
                let v1=0
                let v2=0 
                let tie = 0
    let player1 = prompt("Enter your name, please:", "");
    $('#n1').text(player1)
    

    let choose = prompt("choose X OR O","");
    let chooseTwo;
    // when the first player choose X or O set the other the other choice by default.
    if (choose.toUpperCase() =='X') {
        console.log("player1 is "+choose)
        choose = "X"
        chooseTwo = "O"
    }
    else {
        choose = "O"
        chooseTwo = "X"
        console.log("player 1 is O")
        
    }
    
    let player2 = prompt("Enter your name, please:","")
    $('#n2').text(player2)



    function gameq(event){
        const target = $(event.target)
        
        target.off('click')
        

        // setting the array, switching between x and o
        if (counter%2==0){
            target.text(choose) 

        }
        else {
            target.text(chooseTwo)
        } 
        change(target)
        counter++

        let value = target.text()
        let id = target.attr('id')
        
        game[id]=value 

        // check who is winner
        console.log(game)
        if (game[0]==game[1]&&game[0]==game[2]&&game[0]!=''){
            setTimeout(function(){
                alert('you win '+game[0])
                rest(game [0])
            }, 300);
            
        }
        if (game[3]==game[4]&&game[3]==game[5]&&game[3]!=''){
           setTimeout(function(){
            alert('you win '+game[3])
            rest(game [3]) 
               
            }, 300);

        }
        if (game[6]==game[7]&&game[6]==game[8]&&game[6]!=''){
            setTimeout(function(){
                alert('you win '+game[6])
                rest(game[6])
               
            }, 300);
        }
        if (game[0]==game[3]&&game[0]==game[6]&&game[0]!=''){
            setTimeout(function(){
                alert('you win '+game[0])
                rest(game[0])
            }, 300);
        }
        if (game[1]==game[4]&&game[1]==game[7]&&game[1]!=''){
            setTimeout(function(){
                alert('you win '+game[1])
            rest(game[1])
               
            }, 300);
        }
        if (game[2]==game[5]&&game[2]==game[8]&&game[2]!=''){
            setTimeout(function(){
                alert('you win '+game[2])
            rest(game[2])
               
            }, 300);
        }
        if (game[0]==game[4]&&game[0]==game[8]&&game[0]!=''){
            setTimeout(function(){
                alert('you win '+game[0])
            rest(game[0])
               
            }, 300);
        }
        if (game[2]==game[4]&&game[2]==game[6]&&game[2]!=''){
            setTimeout(function(){
                alert('you win '+game[2])
            rest(game[2])
               
            }, 300);
        }
        if (counter==9) {
            setTimeout(function(){
                alert('tie')
                rest()
            }, 300);
        }
    }
    

    $('.tic').on('click',gameq)


    //function rest 

    function rest(win){
        if(win){
            sound3.play();
        }
        $(".tic").css("background", "lightpink")
        if(win ===choose) {
            v1++
            $(".gif").html(
                `<img src="images/200.gif" alt="Smiley face" ></img>`
                )
            setTimeout(function(){
                $(".gif").html("")
            }, 5000);

        }
        else if(win ===chooseTwo) {
            
            v2++
            $(".gif").html(
                `<img src="images/200.gif" alt="Smiley face"></img>`
                )

            setTimeout(function(){
                $(".gif").html("")
            }, 4000);
            }
        else {
            tie++
            $(".gif2").html(
                `<img src="images/0.gif" alt="Smiley face"></img>`
                )
                setTimeout(function(){
                    $(".gif2").html("")
                }, 4000);
          
        }
        $(".one").text(v1)
        $(".two").text(v2)
        $(".tie").text(tie)

        counter=0;
        game = ['','','',
                '','','',
                '','','']

    $('.tic').html('')
    $('.tic').off()
    $('.tic').on('click',gameq)

    }
    // change background color and sound when user play
    function change (target){
        
        if($(target).text() == "X")
            $(target).css('background','#C3E3DF')
           && sound.play();
        else 
         $(target).css('background','#FFEFD5')
         && sound2.play();
         
      }

})

       