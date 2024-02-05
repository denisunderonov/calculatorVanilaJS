
export function back($input) {
    $input.value = $input.value.substring(0, $input.value.length - 1);
}

export function sqrt($input) {
    $input.value = Math.pow(Number($input.value), 2);
}

export function base(state ,$input, $button) {
    state.firstNum = Number($input.value);
    state.mathOperation = $button.textContent;
    $input.value = '';
}

export function calcBase(state, $input) {
    const secondNum = Number($input.value);
            switch (state.mathOperation) {
                case '+': $input.value = state.firstNum + secondNum
                break;
                case '-': $input.value = state.firstNum - secondNum
                break;
                case '*': $input.value = state.firstNum * secondNum
                break;
                case '÷': $input.value = state.firstNum / secondNum
                break;
            }
            state.firstNum = 0;
}

