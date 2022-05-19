"use strick";

let n;
do {
    n = prompt("Enter numeber N");
    if (isNaN(n)) {
        alert("Wrong!! Enter number");
    } else n = Math.round(n);
} while (isNaN(n));

let m;
do {
    m = prompt("Enter numeber M");
    isNaN(m) ? alert("Wrong!! Enter number") : (m = Math.round(m));
} while (isNaN(m));

let sum = 0;
if (confirm("Skip even numbers?")) {
    for (let i = n; i <= m; i++) {
        if (i % 2 == 0) {
            continue;
        }
        sum += i;
    }
} else {
    for (let i = n; i <= m; i++) {
        sum += i;
    }
}

alert(sum);