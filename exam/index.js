function getFriendlyNumbers(start, end) {
    if (start > end && typeof start === 'string' && typeof end === 'string' && start % 1 == 0 && end % 1 == 0) {
        var temp = start;
        start = end;
        end = temp;
    }else {
        // return false;
    }
    result = new Array();
    var index = 0;
    for (let i = start; i <= end; i++) {
        result.push({
            num: i,
            divisors: new Array(),
        })
        for (let j = 1; j <= i; j++) {
            if (i % j == 0 && i != j) {
                result[index].divisors.push(j);
            }
        }
        index++;
    }
    return result;
    
}
getFriendlyNumbers(10, 100);

let arr = {
    number: [],
    sum: [],
};
let answer = [];
for (var d = 0; d < result.length; d++) {
    let p = 0;
    for (var m = 0; m < result[d].divisors.length; m++) {

        p += result[d].divisors[m];
    }
    arr.sum[d] = p;
    arr.number[d] = result[d].num;
}
for (let i = 0; i < arr.number.length; i++) {
    next:
    for (let z = 0; z < arr.sum.length; z++) {

        if (arr.number[i] == arr.sum[z] && arr.sum[i] == arr.number[z] && arr.number[i] != arr.number[z]) {
            answer.push([arr.number[i], arr.number[z]]);
        } else {
            continue next;
        }
    }
}
for (let i = 0; i < answer.length;) {
    for (let j = 1; j < 3; j++) {
        if (answer[i][0] == answer[i + 1][1]) {
            delete answer[j];
            i++;
            i++;
        } else {
        }
    }
}
if (answer.length < 1) {
    answer.push([]);
}
answer.sort(function (a, b) { return a - b });
console.log(answer);