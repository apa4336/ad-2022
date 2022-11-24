let rows = ['a', 'b', 'c'];
// console.log(rows[2]);

// for (let row of rows) {
//   console.log(row);
// }

// expected output: "a"
// expected output: "b"
// expected output: "c"

// let card1 = ['郭俊良', '0921560420', '台南市中西區西門路一段20號', '工程師']

// for of 只能用在陣列
// for(let value of card1){
//     console.log(value);
// }



let card = {
    name: '郭俊良',
    tel: '0921560420',
    addr: '台南市中西區西門路一段20號',
    '職稱': '工程師'
};

// for in 陣列或物件都可以做
for(let i in card){
    console.log(card[i]);
}