
var line =11;
var max_star = line/2+1  // 정답 -> 3!!

for( var i=0; i<line; i++){
    // 별의 갯수(증가구간)
    var blank ='';
    var star = '';
    var star_cnt = i+1;
    // 감소구간의 공식이 다르다!!(감소구간)
    if(star_cnt>max_star){
        star_cnt = max_star-(i-(max_star-2)); // 3-(3-(3-1))=2
        
    }
    // 공백 갯구 구하기
    var blank_cnt = max_star-star_cnt;
    // 공백 만들기
    for(j=0;j<blank_cnt;j++){
        blank += ' ';
    }
    // 별만들기
    for(k=0; k<star_cnt;k++){
        star +='* ';
    }
    console.log(blank+star)
}