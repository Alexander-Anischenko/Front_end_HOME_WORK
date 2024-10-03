
const countdoun = document.querySelector(".countdown");

const mimuteCounter = () => {
    let second = 60;
    const countFunc = () => {
        countdoun.textContent = second;
        second--;
        
    };
    const intervalId = setInterval(countFunc, 1000);
    
    setTimeout(() => {
        clearInterval(intervalId);
        countdoun.textContent = 'Stop!';
    }, 61000);
}; 

mimuteCounter();