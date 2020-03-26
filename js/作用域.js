/*
* ×÷ÓÃÓòÏú»Ù
* */
function fn()
{
    var i = 10;
    return function(n)
    {
        console.log(n + ++i);
    }
}
/*
var f = fn();
f(10);
f(20);
fn()(10);
fn()(20);*/

function fn(i)
{
    return function(n)
    {
        console.log(n + i++);
    }
}
 var f = fn(13);
 f(12);
 f(14);
 fn(15)(12);
 fn(16)(13);