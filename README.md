# Project <Tic Tac Toe>
This project is the first project in the GA Software Engineering Immersive course, To apply 
the skills we learned in the first two weeks. 

In this project I choose the Tic Tac Toe game, where two users can play together.
The players will enter their names to add their scores when one of them wins! 
and will be able to choose between X & O.

## My Project Deployment



## Technologies used : 
* Git
* JavaScript
* HTML
* Jquery
* CSS
* Css animate
* Responsive with Iphone X

## wireframes and user stories :
* Day 1 :
- Jquery
- HTML

* Day 2 :
- Jquery
- CSS

* Day 3 : 
- Responsive
- Animation

## Describe any lines or function in the code:
This function check the winner defining all the possibilites of winning the game 
using if statement method.
```js
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

```

## Challenges: 
-

## Unsolved problems which would be fixed in future iterations.
AI