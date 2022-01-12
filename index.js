//vid inputet nummer kan jag trycka enter för att trigga räkna knappen countVat/räkna
document.getElementById("nummer");
nummer.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("countVat").click();
  }
});

function operation() {
  let ans = document.getElementById("answer");
  if (document.getElementById("25").checked) {
    ans.value = calculate("25");
  }
  if (document.getElementById("12").checked) {
    ans.value = calculate("12");
  }
  if (document.getElementById("6").checked) {
    ans.value = calculate("6");
  }
}

//mindre error än den inbyggda toFixed
function toFixed(num, precision) {
  return (+(Math.round(+(num + "e" + precision)) + "e" + -precision)).toFixed(
    precision
  );
}

function calculate(action) {
  let nummer = document.getElementById("nummer").value;
  let result;
  switch (action) {
    case "25":
      result = nummer * 0.2;
      break;
    case "12":
      result = (nummer / 1.12) * 0.12;
      break;
    case "6":
      result = (nummer / 1.06) * 0.06;
      break;
  }
  toFixed();
  return result.toFixed(2);
}
