// 1. Toán tử toán học: +, -, *, /
let numberA = 30;
let numberB = 20;

let numberC = numberA + numberB;

console.log("Tổng của hai số 10 và 20 = " + numberC);
console.log("Tổng của hai số " + numberA + " và " + numberB + " = " + numberC);
// template string. Ký hiệu: ``
console.log(`Tổng hai số ${numberA} và ${numberB} = ${numberC}`);

// Nếu biến là một chuỗi thì khi thực hiện phép cộng thì nó sẽ nối chuỗi

// Thực hiện các phép tính còn lại: -, *, /

let numberD = numberA - numberB;
console.log(`${numberA} - ${numberB} = ${numberD}`);

let numberE = numberA * numberB;
console.log(`${numberA} * ${numberB} = ${numberE}`);

// Toán tử chia lấy thương
let numberF = numberA / numberB;
console.log(`${numberA} / ${numberB} = ${numberF}`);

// Toán tử chia lấy dư
let numberG = numberA % numberB;
console.log(`${numberA} % ${numberB} = ${numberG}`);

// Toán tử a++ và ++a (Tăng lên một đơn vị cho biến number)
let age = 10;
let result = age++;
console.log("age = ", age);
console.log("result = ", result);

// ++age
// B1: Tăng giá trị của biến age lên 1 đơn vị
// B2: Trả về giá trị của age vừa được tăng lên

// age++
// B1: Tạo ra một biến age copy => age = 10
// B2: Tăng giá trị của biến age lên một đơn vị => age = 11
// B3: Trả về biến age copy
