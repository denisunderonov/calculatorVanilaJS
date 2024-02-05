const $app = document.querySelector("#app");
$app.innerHTML = `
    <form action="" id="calculator">
            <input type="text" name="" id="input" readonly>
                <div class="buttons">
                    <div>
                        <button>C</button>
                        <button>\u{2BA8}</button>
                        <button>x\xb2</button>
                    </div>
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                    </div>
                    <div>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                    </div>
                    <div><button id="zero">0</button></div>
                    <div>
                        <button>\xf7</button>
                        <button>*</button>
                        <button>-</button>
                    </div>
                    <button id="bigplus">+</button>
                    <button id="result" type="submit">=</button>
                </div>
            </form>
`;
const $buttons = document.querySelectorAll("button");
const $input = document.querySelector("#input");
const $result = document.querySelector("#result");
let firstNum = 0;
let mathOperation;
$buttons.forEach(($button)=>{
    $button.addEventListener("click", (e)=>{
        e.preventDefault();
        if ($button.textContent === "C") $input.value = "";
        else if ($button.textContent === "\u2BA8") $input.value = $input.value.substring(0, $input.value.length - 1);
        else if ($button.textContent === "x\xb2") $input.value = Math.pow(Number($input.value), 2);
        else if ($button.textContent === "\xf7" || $button.textContent === "*" || $button.textContent === "+" || $button.textContent === "-") {
            firstNum = Number($input.value);
            mathOperation = $button.textContent;
            $input.value = "";
        } else if ($button.textContent === "=") {
            const secondNum = Number($input.value);
            switch(mathOperation){
                case "+":
                    $input.value = firstNum + secondNum;
                    break;
                case "-":
                    $input.value = firstNum - secondNum;
                    break;
                case "*":
                    $input.value = firstNum * secondNum;
                    break;
                case "\xf7":
                    $input.value = firstNum / secondNum;
                    break;
            }
            firstNum = 0;
        } else $input.value += $button.textContent;
    });
});

//# sourceMappingURL=index.672d4772.js.map
