const assert = require('assert');

function sum(a, b) {
    // 条件   不满足条件的提示
    assert(arguments.length == 2, '必须传俩个参数');
    assert(typeof a == 'number', '第一个参数必须是数字');
    assert(typeof b == 'number', '第二个参数必须是数字');

    console.log(a + b);
}

sum(10, 'as');
