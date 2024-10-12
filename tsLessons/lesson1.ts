const WORLD = 'world';

const hello = (who = WORLD): string => {
    return `Hello ${who}`;
}

console.log(hello('lol'));



