/*
var reducers = {
    totalInEuros: function (state, item)
    {
        return state.euros += item.price * 0.897424392;
    },
    totalInYen: function (state, item)
    {
        return state.yens += item.price * 113.852;
    }
};
var manageReducers = function (reducers)
{
    return function (state, item)
    {
        return Object.keys(reducers).reduce(
            function (nextState, key)
            {
                reducers[key](state, item);
                return state;
            }, {}
        );
    }
};
var bigTotalPriceReducer = manageReducers(reducers);
var initialState = {euros: 0, yens: 0};
var items = [{price: 10}, {price: 120}, {price: 1000}];
var totals = items.reduce(bigTotalPriceReducer, initialState);
console.log(totals);*/

// var result = [
//     {
//         subject: 'math',
//         score: 88
//     },
//     {
//         subject: 'chinese',
//         score: 95
//     },
//     {
//         subject: 'english',
//         score: 80
//     }
// ];
// var nSum = result.reduce(function (prev, cur)
// {
//     return prev + cur.score;
// }, 0);
// console.log(nSum);


let i;
for (i = 1; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    })
}
