// 자판기를 만들어보쟈!!
var treatments = [
    {item :"body care 50'" , price :132000 , qty : 4},
    {item :"facial care 60'" , price :132000 , qty : 3},
    {item :"couple package 90'" , price :380000 , qty : 2},
]

var select_item = "couple package 90'";
var myMoney = 500000;
var possible_item =[];
var select_itemIndex = -1; //내가 선택한 관리의 index
var balance = 0; //구매후 잔액
var isbuy = false; //구매 여부
var isEmpty = false; // 품절 여부


console.log("=== **  꿈과 희망의 나라 스파 시바 ** ===" )

for(i=0; i<treatments.length; i++){
    var d = treatments[i];
    console.log(`-> ${d.item}   ₩${d.price.toLocaleString()}  ${d.qty===0 ? '[품절]' : `[수량 : ${d.qty}]`}\n `);
    
// 1. 투입 금액에 따라 (아이템 선택X) => 선택 가능 아이템 표시
// 2. 투입 금액 ok!! 아이템 선택 ok!!
//  2-1) 잔액 부족 -> 잔액이 부족합니다! 집에 가서 빈대떡이나 잡솨!
//  2-2) same same -> (아이템)이 확정되었습니다!!
//                       편안한 시간되십시오!
//  2-3) balance 이 남은경우 -> (아이템)이 확정되었습니다!! 
//        var balance = mymoney-d.price 을 돌려드립니다!!

if(d.qty> 0 && myMoney >= d.price ){
    possible_item.push(d.item);
}

if(d.qty === 0){
    continue;
}
else if(select_item){//트리트먼트를 선택
    if(select_item === d.item){//이거 받을거야!
        select_itemIndex = i;
        balance = myMoney-d.price;

        if(balance >= 0 ){
            isbuy = true; // 구매완료!!
        }

    }
}
    
}//end of for

console.log(`투입 금액 : ${myMoney.toLocaleString()}`);
if(select_item){
    console.log(`관리 선택 : ${select_item}`);
//구매 완료
    if(isbuy){
        console.log(`${select_item}의 예약이 완료되었습니다.
        잔액은 ${balance.toLocaleString()}원 입니다`)
        console.log(`${select_item} 남은 수량: ${treatments[select_itemIndex].qty - 1}`)
    }
    //돈이 모지라!!
    else if (balance < 0){
        console.log(`잔액이 ${balance * -1}원 부족하여 ${select_item}을 이용할 수 없습니다`);

    }
} else{
    //선택가능한 관리를 보여주기!
    //하나도 안되면 빈대떡이나 붙여먹으러 집을 gogo~~!!
    if(possible_item.length === 0){
        console.log('돈없으면 집에가서 빈대떡이나 붙여먹지이~~');
    }else{
        console.log(`주문 가능 관리 : ${possible_item}. 관리를 선택하여 주세요`)
    }
}


