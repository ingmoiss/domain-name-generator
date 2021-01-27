let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.org', '.moiss'];

function randomDomain() {

    let pronounR = Math.floor(Math.random() * pronoun.length);
    let adjR = Math.floor(Math.random() * adj.length);
    let nounR = Math.floor(Math.random() * noun.length);
    let extensionsR = Math.floor(Math.random() * extensions.length);

    return pronoun[pronounR] + adj[adjR] + noun[nounR] + extensions[extensionsR];

}

for (let i = 0; i < 10; i++) {
    console.log(randomDomain());
}

