/**https://www.youtube.com/watch?v=1DMolJ2FrNY */
var rockets = [
    { country:'India', launches:7 },
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'US', launches:88 },
    { country:'India', launches:4 },
    { country:'Russia', launches:2 },
    { country:'China', launches:1 },
];

var sum = rockets.reduce(function(output, current) {
    console.log('output',output, 'current',current)
    if(output[current.country])
        output[current.country] = {counter:output[current.country].counter+1,launches:output[current.country].launches+current.launches}
    else
        output[current.country] = {counter:1,launches: current.launches}
    
    return output;
}, { });

console.log(JSON.stringify(sum,null,2))