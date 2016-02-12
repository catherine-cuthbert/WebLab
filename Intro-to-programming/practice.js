var lookup = 
[A: 1,
B: 2,
D: 1,
O: 1,
P: 1,
Q: 1,
R: 1,
a: 1,
b: 1,
d:1,
e: 1,
g: 1,
o: 1,
p: 1,
q: 1,
4: 1,
6: 1,
8: 2,
9: 1,
0: 1];

function countHoles (str) {
	vare holeCount = 0;
	str.split("").forEach(function(char) {
		if(lookup[char]) {
			holeCount += lookup[char];
		}
	})
}

//alternatively:
['ABDOPQRabdegopq46890', 'B8'].forEach(function(group, idx) {
	group.split("").forEach(function (char) {
		lookup[char] = idx + 1
	})
})