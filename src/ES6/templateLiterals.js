/*http://es6-features.org/#StringInterpolation*/

/**ECMAScript 6 — syntactic sugar: reduced | traditional **/
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message)

/**ECMAScript 5 — syntactic sugar: reduced | traditional**/
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message1 = "Hello " + customer.name + ",\n" +
"want to buy " + card.amount + " " + card.product + " for\n" +
"a total of " + (card.amount * card.unitprice) + " bucks?";
console.log(message1)