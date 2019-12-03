$(function(){
    // getting users names and choice of X or O !
    
    let sound = new Audio("../xo.mp3"); // when user play x
    let sound2 = new Audio("../xo2.mp3"); //  when user play o
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

    if (player1=='X') {
        console.log("You're O")
    }
    else console.log("You're X")


    function gameq(event){
        const target = $(event.target)
        
        target.off('click')
        

        // console.log(counter) setting the array
        if (counter%2==0){
            target.text(choose) 

        }
        else {
            target.text(chooseTwo)
        } 
        change(target)
        counter++
        //get the value & id => index
        // var value => content
        // var id => index
        // games[index] = value
        let value = target.text()
        let id = target.attr('id')
        
        // console.log(id)
        // console.log(value)
        game[id]=value 
        
        // set all values of the box in the array
        // console.log(games)

        // check who is winner
        console.log(game)
        if (game[0]==game[1]&&game[0]==game[2]&&game[0]!=''){
            alert('you win '+game[0])
            rest(game [0])
        }
        if (game[3]==game[4]&&game[3]==game[5]&&game[3]!=''){
            alert('you win '+game[3])
            rest(game [3])
        }
        if (game[6]==game[7]&&game[6]==game[8]&&game[6]!=''){
            alert('you win '+game[6])
            rest(game[6])
        }
        if (game[0]==game[3]&&game[0]==game[6]&&game[0]!=''){
            alert('you win '+game[0])
            rest(game[0])
        }
        if (game[1]==game[4]&&game[1]==game[7]&&game[1]!=''){
            alert('you win '+game[1])
            rest(game[1])
        }
        if (game[2]==game[5]&&game[2]==game[8]&&game[2]!=''){
            alert('you win '+game[2])
            rest(game[2])
        }
        if (game[0]==game[4]&&game[0]==game[8]&&game[0]!=''){
            alert('you win '+game[0])
            rest(game[0])
        }
        if (game[2]==game[4]&&game[2]==game[6]&&game[2]!=''){
            alert('you win '+game[2])
            rest(game[2])
        }
        if (counter==9) {
            alert('tie')
            rest()
        }
    }
           

    $('.tic').on('click',gameq)
    
    //function rest 

    function rest(win){
        
        $(".tic").css("background", "#AAB8CC")
        if(win ===choose) {
            v1++
            $(".gif").html(
                `<img src="../images/200.gif" alt="Smiley face" ></img>`
                )
            setTimeout(function(){
                $(".gif").html("")
            }, 5000);

        }
        else if(win ===chooseTwo) {
            
            v2++
            $(".gif").html(
                `<img src="../images/200.gif" alt="Smiley face"></img>`
                )

            setTimeout(function(){
                $(".gif").html("")
            }, 5000);
            }
        else {
            tie++
          
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
         $(target).css('background','#F1C4C8')
         && sound2.play();
         
      }

})
// 
// $(".img").append('<img src="../images/xo.jpg" alt="Smiley face">')