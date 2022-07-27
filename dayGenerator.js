fs = require('fs')
let output = "";

for (let i = 1; i < 260; i++) {
    let numText = i < 10 ? "0" + i : "" + i;

    let text = `{ day: ${numText}, sopBook: 'GC', sopPages: '145-150b', sopChapter: 'Luther Before the Diet'},\n`

    output = output + text
}


fs.writeFile('days.txt', output, function(err) {
    if(err) {
        console.log(err)
    }
})