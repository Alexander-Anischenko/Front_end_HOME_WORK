

// сщздаем переменную priceArray, в которую складываем массив цен
const priceArray = [100, 400, 900, 300, 500];
console.log(priceArray);

// создаем переменные для связки js с html
const priceList = document.querySelector("#list-id");
const buttonFilter = document.querySelector("#filter-button");

// благодаря методу forEach создаем список цен из массива
const createList = (initialArr) => {
    initialArr.forEach((price) => {
        const showPriceList = document.createElement('li');
        showPriceList.textContent = price;
        priceList.append(showPriceList);
    });
};

createList(priceArray);

// функция filtratePrices сначала очищает содержимое ul, потом создает отфильтрованный массив и 
// создает новый список, согласно новому массиву
const recreateFiltratePrices = () => {
    priceList.innerHTML = '';
    const filteredPriceArray = priceArray.filter((price) => price > 400);
    createList(filteredPriceArray);
};

// отслеживаем клик кнопки
buttonFilter.addEventListener('click', recreateFiltratePrices);
