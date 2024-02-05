import { back, base, calcBase, sqrt } from "./utils";

export class App {
    constructor() {
        
    }

    render() {
        const $app = document.querySelector('#app');
        $app.innerHTML = `
        <form action="" id="calculator">
            <input type="text" name="" id="input" readonly>
                <div class="buttons">
                    <div>
                        <button>C</button>
                        <button>⮨</button>
                        <button>x²</button>
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
                        <button>÷</button>
                        <button>*</button>
                        <button>-</button>
                    </div>
                    <button id="bigplus">+</button>
                    <button id="result" type="submit">=</button>
                </div>
            </form>
    `
    }

    on() {
        const $buttons = document.querySelectorAll('button');
        const $input = document.querySelector('#input');


        const state = {
            firstNum: 0,
            mathOperation: null
        }

        $buttons.forEach(($button) => {
            $button.addEventListener('click', (e) => {
                e.preventDefault();
                if ($button.textContent === 'C') {
                    $input.value = '';
                } else if ($button.textContent === '⮨') {
                    back($input);
                } else if ($button.textContent === 'x²') {
                    sqrt($input);
                } else if ($button.textContent === '÷' || $button.textContent === '*' || $button.textContent === '+' || $button.textContent === '-') {
                    base(state, $input, $button)
                } else if ($button.textContent === '=') {
                    calcBase(state, $input)
                } else {
                    $input.value += $button.textContent;
                }
            });
        });
    }
}
