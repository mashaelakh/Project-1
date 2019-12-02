$(function(){
    let counter=0;
    let games = ['','','',
                '','','',
                '','','']


    $('.tic').on('click',function(event){
        const target = $(event.target)
        target.off('click')
        counter++



        // console.log(counter)
        if (counter%2==0){
            target.text('X')
          
        }
        else {
            target.text('O')
        } 
        //TODO: get the value & id => index
        // var value => content
        // var id => index
        // games[index] = value
        let value = target.text()
        let id = target.attr('id')
        // console.log(id)
        // console.log(value)
        games[id]=value // set all values of the box in the array
        // console.log(games)

        //TODO: check who is winner
        

    })













})