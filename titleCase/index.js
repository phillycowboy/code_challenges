console.log("Title case a string")


const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];

const titleCased = (string) => {
    // return tutorials.map(tutorial => {
    //     tutorial = tutorial.split(' ');
    //     for(let i = 0; tutorial.length; i++){
    //         tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    //     }
    //     return tutorial.join(' ');
    // })
    // string = string.toLowerCase().split(' ');
    // for(let i = 0; string.length; i++){
    //     string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    // }
    // return string.join(' ');
    return string.toLowerCase().split(' ').map((word) => {
        return word.replace(word[0], word[0].toUpperCase())
    }).join(' ')
}

console.log(titleCased("hello there how are you"))
console.log(titleCased("I'm a little Tea pot short and stout"))
console.log(titleCased("foo bar Baz"))

