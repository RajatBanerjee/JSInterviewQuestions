/**https://www.youtube.com/watch?v=AHbRVJzpB54 */

var x =5 ;

/**impure function since it mutates the state and provides a different output everytime its called */
function add(params) {
    
    x =x +1
    console.log(x)
    return x
}

add()
add()
add()
add()
add()