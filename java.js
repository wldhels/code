
    // for(var j = 2; j <=9; j++){
    //     console.log(`구구단${j}단 출력`)
    //     for(var i = 1; i <=9; i++){
    //         if(i!=(j*j) && i!=j)
    //             console.log(`${j} * ${i} = ${i*2}`);
    //         }
    //         //곱하는 수가(i)  단(j)이 제곱이 아닌 경우 출력해라 
    //         //단과 곱하는 수가 다른 경우 출력해라
    //         //단과 곱하는 수가 같은 경우 출력하지 마라
    //     }
        



// var star_cnt = 1;
// var line = 4;

// for(var i=0; i<line;i++){
//     var blank_cnt = line-(i+1);
//     var blank ='';
//     for(var j=0; j<blank_cnt; j++){
//         blank +=' ';
//     }
//     // 별만들기
//     var star ='';
//     for (var k=0; k<star_cnt; k++){
//         star +='*';
//     }
//     star_cnt +=2;
//     console.log(blank+star)
// }

var star_cnt = 5;
var line =5;
for(i=0; i<line; i++){
    var star = ' ';
    for(var j=0; j<star_cnt; j++){
        star +='* '
    }
    // for(var k=0; k<blank_cnt; k++){
    //     var blank_cnt = line-(k+1);
    //     var blank =' ';
    // }
    
    star_cnt -=1;
    console.log(star)
}