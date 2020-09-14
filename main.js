function play(answer){
    let result ;
    if(answer){
        result = 'Ready Go 3 - 2 - 1 :'
    }else{
        result = 'See you later'
    }
    return result ;
}

let a = confirm('Do you want to play ?')

let b = play(a);

alert(b)
