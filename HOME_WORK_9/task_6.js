let exampleStr = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота."
let words = exampleStr.split(" ")
console.log(words);
for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}
