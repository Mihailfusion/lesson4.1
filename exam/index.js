"use strict";
let result = [];
let arr = {
	number: [],
	sum: [],
};
let answer = [];
function getFriendlyNumbers(start, end) {
	if (start > end || start < 1 || end < 1 || typeof start === 'string' || typeof end === 'string' && start % 1 == 0 && end % 1 == 0 ){
		console.log(false);
			return false;
	} else {
		let index = 0;
		for (let i = start; i <= end; i++) {
			result.push({
				num: i,
				divisors: [],
			});
			for (let j = 1; j <= i; j++) {
				if (i % j == 0 && i != j) {
					result[index].divisors.push(j);
				}
			}
			index++;
		}
	};
	for (let d = 0; d < result.length; d++) {
		let p = 0;
		for (let m = 0; m < result[d].divisors.length; m++) {
			p += result[d].divisors[m];
		}
		arr.sum[d] = p;
		arr.number[d] = result[d].num;
	}
	for (let i = 0; i < arr.number.length; i++) {
		next: for (let z = 0; z < arr.sum.length; z++) {
			if (arr.number[i] == arr.sum[z] && arr.sum[i] == arr.number[z] && arr.number[i] != arr.number[z]) {
				answer.push([arr.number[i], arr.number[z]]);
			} else {
				continue next;
			}
		}
	}
	for (let i = 0; i < answer.length;) {
		if (answer[i][0] == answer[i + 1][1]) {
			delete answer[i + 1];
			i++;
			i++;
		}
	}
	answer = answer.filter(function (e) { //Удаляем пустые элементы.
		return e;
	});
	console.log(answer);
}

getFriendlyNumbers(1, 1211);



module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}