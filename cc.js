line =10;
for(var i=0; i<line; i++){
    var star = '';
    var blank = '';
    for(var j=0; j<(line-(i+1)); j++){
        blank +=' ';
    }
    for(var k=0; k<(i+1); k++){
        star += '* ';
    }
    console.log(blank+star);

}

line = 9;

for(var i=0; i<line; i++){
    var blank = '';
    var star = '';
    for(var j=0; j<i; j++){
        blank +=' ';
    }
    for(var k=0; k<(line-i); k++){
        star +=' *';
    }
    console.log(blank+star);
}