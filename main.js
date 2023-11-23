console.log("aaaaaa"); // user: undefined

// 変数
// let 変数名 = 値;

let name = "Satou2";
console.log("name:", name);
// name: Satou
name = "Satou3";
console.log("name:", name);
// name: Satou2

// 定数
// const 定数名 = 値;
const name2 = "suzuki";
console.log("name2:", name2);

const userProfile = "aaaa";

// テンプレートリテラル
// `${変数名}`

const userId = "111";
const url = `https://localhosut:8080/user/${userId}`;
console.log(`url`, url);

// オブジェクト
// { キー: 値 }

const user = {
  name: "Satou",
  age: 20,
  gender: "female",
};

console.log(`user:`, user);

// String Number

const stringNumber = "123";
console.log(`stringNumber:`, stringNumber);

const number = Number(stringNumber);
console.log(`number:`, number);

const string = String(number);
console.log(`string:`, string);

// 演算子 === && || ! !! ?? 三項演算子

const number1 = 1;
const number2 = 2;
const number3 = 3;

//==  型の比較をしない（使わない）
console.log("==", number1 == "1"); //true

//===  型の比較をする（使う）
console.log("===", number1 === "1"); //false
console.log("===", number2 === 1); //false

// !=  型の比較をしない
console.log("!=", number1 != 1); //false

// !==  型の比較をする
console.log("!==", number1 !== "1"); //true
console.log("!==", number2 !== 1); //true

// && 両方trueの場合true
console.log("&&", number1 === 1 && number2 === 2); //true
console.log("&&", number1 === 1 && number2 === 1); //false

// || どちらかがtrueの場合true
console.log("||", number1 === 1 || number2 === 2); //true
console.log("||", number1 === 2 || number2 === 2); //true
console.log("||", number1 === 2 || number2 === 3); //false

// ! 否定
console.log("!", number1 === 1); //false
console.log("!", number1 === 2); //true

//!! 二重否定
console.log("!!", !!number1); //true
console.log("!!", !!undefined); //false

// ?? null合体演算子 nullは空の値
//??の前の値がnullの場合、??の後の値を返す
//??の前の値がnullでない場合、??の前の値を返す

const number4 = null;
const number5 = 100;
const number6 = 6;

console.log("??", number4 ?? number5); //100
console.log("??", number6 ?? number5); //6

// 三項演算子 条件式 ? trueの場合 : falseの場合
const number7 = 7;
const number8 = 8;

console.log("三項演算子", number7 === 7 ? "7です" : "7ではないです"); //7です
console.log("三項演算子", number8 === 7 ? "7です" : "7ではないです"); //7ではないです

// 関数 arrow関数
// (引数) => { 処理 }

const getHello2 = () => {
  return "Hello2";
};

const returnWord = (user) => {
  return user;
};

console.log("returnWord", returnWord(user));

// objectの中に関数を入れてみる

const Satou = {
  name: "Satou",
  age: 20,
  gender: "female",
  sayWord: () => "Hello",
  sayWord2: () => {
    return "Hello";
  },
  SayMyAge: (age) => `わたしの年齢は${age}です`,
};

console.log(`sayWord`, Satou.sayWord());
console.log(`sayWord2`, Satou.sayWord2());
console.log(`SayMyAge`, Satou.SayMyAge(Satou.age));

// Promise async await
// Promiseは非同期処理を行うための仕組み
// async awaitはPromiseを簡単に書くための構文

// Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功");
    // reject("失敗");
  }, 3000); //3秒後に実行
});

promise
  .then((success) => {
    console.log("success", success);
  })
  .catch((error) => {
    console.log("error", error);
  });

// if elseif else

// switch
const color = "red";

switch (color) {
  case "red":
    console.log("赤です");
    break;
  case "blue":
    console.log("青です");
    break;
  default:
    console.log("色がないです");
    break;
}

// for
for (let i = 0; i < 10; i++) {
  console.log("i", i);
}

// while
let j = 0;
while (j < 10) {
  console.log("j", j);
  j++;
}

// 配列 find

const users = [
  { name: "Satou", age: 20 },
  { name: "Suzuki", age: 30 },
  { name: "Takahashi", age: 40 },
];

const user2 = users.find((user) => {
  return user.name === "Satou";
});

console.log(`user2`, user2);

// some

const someUsers = [
  { name: "Satou", age: 20 },
  { name: "Suzuki", age: 30 },
  { name: "Takahashi", age: 40 },
];

const someUser = someUsers.some((user) => {
  return user.age === 20;
});

console.log(`someUser`, someUser);

// map

const mapUsers = [
  { name: "Satou", age: 20 },
  { name: "Suzuki", age: 30 },
  { name: "Takahashi", age: 40 },
];

const mapUser = mapUsers.map((user) => {
  return user.name;
});

const mapUser2 = mapUsers
  .map((user) => {
    return {
      ...user,
      isAdult: user.age > 20,
      isChecked: true,
    };
  })
  .filter((user) => {
    return user.name.match("Suzuki");
  });

console.log(`mapUser`, mapUser);
console.log(`mapUser2`, mapUser2);

// filter

const filterUsers = [
  { name: "Satou", age: 20 },
  { name: "Suzuki", age: 30 },
  { name: "Takahashi", age: 40 },
];

const filterUser = filterUsers.filter((user) => {
  return user.age === 20;
});

console.log(`filterUser`, filterUser);

// reduce 難易度高い

// sort

const sortUsers = [
  { name: "Satou", age: 20 },
  { name: "Suzuki", age: 30 },
  { name: "Takahashi", age: 40 },
];

const sortUser = sortUsers.sort((a, b) => {
  if (a.age > b.age) {
    return -1;
  } else {
    return 1;
  }
});

console.log(`sortUser`, sortUser);

// event

const button = document.getElementById("button");
const input = document.getElementById("input");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  console.log("button click");
  console.log("input", input.value);
  result.textContent = input.value;
  alert("クリックされました");
});

// alert

confirm;
if (confirm("削除しますか？")) {
  console.log("削除しました");
}

//setTimeOut

setTimeout(() => {
  console.log("setTimeout");
}, 3000);
