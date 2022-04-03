var delayInMilliseconds = 1000; //1 second

setTimeout(function() {

// DOM Element's
const counters = document.querySelectorAll('.counter');

/*** Using forEach() ***/

/*
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 5000;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCount();
})

*/

/*** Same functionality, now using for...of ***/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
for (let n of counters) {
    const updateCount = () => {
        const target = +n.getAttribute('data-target');
        const count = +n.innerText;

        // add these two lines
        const divider = 5000;
        const speed = 50; // 1000 millisecond => 1 second;

        const inc = target / divider;

        if (count < target) {
             n.innerText = Math.ceil(count + inc);

             // and then, pass speed variable as a parameter here
             setTimeout(updateCount, speed);
        } else {
             n.innerText = target;
        }
    };
    updateCount();
}
}, delayInMilliseconds);