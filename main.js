//Написать функцию strcmp
function strcmp(str1, str2) {
    return ((str1 === str2) ? 0 : ((str1 > str2) ? 1 : -1));
}
function strcmp2(str1, str2) {
    return str1.localeCompare(str2);
}

//Написать функцию суммирующую все элементы массива
function arrsum(arr) {
    var result = arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    return result;
}

function arrsum2(arr) {
    var result = null;
    for (var i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}

//Расширить стандартный класс String, добавив работающий метод reverse()
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

//Написать переворот строки/массива используя рекурсию
function rreverse(str1, len) {
    if (len !== 0) {
        str1 = str1 + str1[len - 1]
        return rreverse(str1, len - 1);
    }
    else {
        return str1.substr(str1.length / 2);
    }
}

//Написать функцию суммирующую все переданные в нее аргументы
function argarr() {
    var summ = null;
    for (var i = 0; i < arguments.length; i++) {
        summ = summ + arguments[i]
    }
    return summ;
}

//Написать модуль вычислений с функциями add, multiply, sqrt. Использовать инкапсуляцию

function Calc() {

    var operation = {
        "-": function (a, b) {
            return a - b;
        },
        "+": function (a, b) {
            return a + b;
        },
        "sqrt": function (a, b) {
            return Math.sqrt(a);
        },
        "*": function (a, b) {
            return a * b;
        }
    };

    this.calculate = function (str) {

        var split = str.split(' '), a = +split[0], op = split[1], b = +split[2];

        if (op == "sqrt") {
            b = 0
        }
        if (!operation[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return operation[op](+a, +b);
    }
    this.add = function (name, func) {
        operation[name] = func;
    };
}

var calc = new Calc;


//Создать компонент ввода пароля с кнопкой показать пароль/скрыть пароль (input д.б. type password)


function hidePass(id) {
    element = document.getElementById(id);
    if (element.type == 'password') {
        var inp = document.createElement("input");
        inp.id = id;
        inp.type = "text";
        inp.value = element.value;
        element.parentNode.replaceChild(inp, element);
    }
    else {
        var inp = document.createElement("input");
        inp.id = id;
        inp.type = "password";
        inp.value = element.value;
        element.parentNode.replaceChild(inp, element);
    }
}
