alert("Добро пожаловать");

function checkNumber(num) {
  if (num > 0) {
    alert(num + " Положительное");
  } else if (num < 0) {
    alert(num + " Отрицательное");
  } else {
    alert(num + " Равно нулю");
  }
}

function dayOfWeek(day) {
  switch (day) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
    default:
      return "Нет такого дня";
  }
}

function showDayOfWeek() {
  const dayInput = document.getElementById('dayInput').value;
  const day = parseInt(dayInput, 10);
  const dayName = dayOfWeek(day);
  document.getElementById('dayOutput').innerText = dayName;
}

function loopExamples() {
  for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log("for: " + i);
  }

  let i = 0;
  while (i < 5) {
    if (i === 3) break;
    console.log("while: " + i);
    i++;
  }

  i = 0;
  do {
    console.log("do..while: " + i);
    i++;
  } while (i < 5);
}

function exampleSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);

console.log(dayOfWeek(1));
console.log(dayOfWeek(5));
console.log(dayOfWeek(8));

loopExamples();

let array = [1, 2, 3, 4, 5];
console.log("Sum: " + exampleSum(array));
