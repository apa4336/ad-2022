let card = {
    name: '鄭名翔',
    tel: '0970325363',
    addr: '高雄市阿蓮區民族路345號',
    '職稱': '工程師'
};

// let x ='name'
// console.log(card.name)

//for (let i in card){
// console.log(i);  顯示 name,tel,addr,職稱
//}

// for(let i in card){
//     console.log(i);
//     console.log(typeof i);
//     console.log(card[i]);
// }

/* 顯示的值都是鄭名翔
    let x = 'name';
console.log(card['name']);
console.log(card.name);
console.log(card[x]);
*/

for(let i in card){
    // console.log(i); // 顯示name, tel, addr, 職稱;
    // console.log(typeof i); // 顯示string
    console.log(card[i]);  // 顯示鄭名翔, 0970325363, 高雄市阿蓮區民族路345號, 工程師
}
