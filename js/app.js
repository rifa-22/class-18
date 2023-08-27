for(let i=1; i <= 10000; i++){
    if( i % 2 == 0){
        document.write( i + 'The Number is even' + '<br>');
    }
    else if( i % 2 == 1){
        document.write( i + 'The Number is odd' + '<br>');
    }
    else{
        document.write('invalid Number' + '<br>');
    }
}