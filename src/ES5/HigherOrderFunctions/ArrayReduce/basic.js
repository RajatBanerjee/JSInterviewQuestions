/**https://www.youtube.com/watch?v=Wl98eZpkp-c */

var  orders = [
    {amount:200},
    {amount:300},
    {amount:400},
    {amount:100},
    {amount:500},
]


// var totalsum = 0 ;

// for (let index = 0; index < orders.length; index++) {
//    totalsum += orders[index].amount;
// }
// console.log(totalsum)

/**reduce takes the initial value ,set to 0 
 * the callbacl function takes 2 parameters
 * 1st is the returned value from previous iteration OR the initial value
 * 2nd is the current item value being iterated over
*/
// var total =   orders.reduce(function (sum, order) {
//    return sum +order.amount ; 
// },0)

var total =   orders.reduce((sum, order)=> sum +order.amount,0)

console.log(total)