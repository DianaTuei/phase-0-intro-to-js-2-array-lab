// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop(cats.length-1);
}

function destructivelyRemoveFirstCat(){
    cats.shift(0);
}

function appendCat(name){
    var copyofCats = cats.slice();
    copyofCats.push(name);
    return copyofCats;
}

function prependCat(name){
    var copyofCats =cats.slice();
    copyofCats.unshift(name);
    return copyofCats;
}

function removeLastCat(){
    var copyofCats = cats.slice();
    copyofCats.pop(name);
    return copyofCats;
}

function removeFirstCat(){
    var copyofCats = cats.slice();
    copyofCats.shift(name);
    return copyofCats;
}