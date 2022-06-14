let days = [
{ day: 160, sopBook: 'GC', sopPages: '145-150b', sopChapter: 'Luther Before the Diet'},
{ day: 160, sopBook: 'GC', sopPages: '145-150b', sopChapter: 'Luther Before the Diet'},
{ day: 161, sopBook: 'GC', sopPages: '150c-155a', sopChapter: 'Luther Before the Diet'},
{ day: 162, sopBook: 'GC', sopPages: '155b-160c', sopChapter: 'Luther Before the Diet'},
{ day: 163, sopBook: 'GC', sopPages: '160d-164c', sopChapter: 'Luther Before the Diet'},
{ day: 164, sopBook: 'GC', sopPages: '164d-170', sopChapter: 'Luther Before the Diet'},
{ day: 165, sopBook: 'GC', sopPages: '171-178a', sopChapter: 'The Swiss Reformer'},
{ day: 166, sopBook: 'GC', sopPages: '178b-184', sopChapter: 'The Swiss Reformer'},
{ day: 167, sopBook: 'GC', sopPages: '185-190c', sopChapter: 'Progress of Reform in Germany'},
{ day: 168, sopBook: 'GC', sopPages: '190d-196', sopChapter: 'Progress of Reform in Germany'},
{ day: 169, sopBook: 'GC', sopPages: '197-201c', sopChapter: 'Protest of the Princes'},
{ day: 170, sopBook: 'GC', sopPages: '201d-205d', sopChapter: 'Protest of the Princes'},
{ day: 171, sopBook: 'GC', sopPages: '205e-210', sopChapter: 'Protest of the Princes'},
{ day: 172, sopBook: 'GC', sopPages: '211-215c', sopChapter: 'The French Reformation'},
{ day: 173, sopBook: 'GC', sopPages: '215d-222b', sopChapter: 'The French Reformation'},
{ day: 174, sopBook: 'GC', sopPages: '222c-226b', sopChapter: 'The French Reformation'},
{ day: 175, sopBook: 'GC', sopPages: '226c-230', sopChapter: 'The French Reformation'},
{ day: 176, sopBook: 'GC', sopPages: '231-236', sopChapter: 'The French Reformation'},
{ day: 177, sopBook: 'GC', sopPages: '237-240d', sopChapter: 'The Netherlands and Scandinavia'},
{ day: 178, sopBook: 'GC', sopPages: '240e-244', sopChapter: 'The Netherlands and Scandinavia'},
{ day: 179, sopBook: 'GC', sopPages: '245-249a', sopChapter: 'Later English Reformers'},
{ day: 180, sopBook: 'GC', sopPages: '249b-253a', sopChapter: 'Later English Reformers'},
{ day: 181, sopBook: 'GC', sopPages: '253b-256d', sopChapter: 'Later English Reformers'},
{ day: 182, sopBook: 'GC', sopPages: '256e-260b', sopChapter: 'Later English Reformers'}]

chapters = {
    'Luther Before the Diet': '08',
    'The Swiss Reformer': '09',
    'Progress of Reform in Germany': '10',
    'Protest of the Princes': '11',
    'The French Reformation': '12',
    'The Netherlands and Scandinavia': '13',
    'Later English Reformers': '14'
}
let getDay = function() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    console.log('Day of year: ' + day);
    return day;
}
let today = days.find((day) => day.day === getDay())

console.log(getDay())
let readingsElement = document.body.querySelector('#readings')

let title = document.createElement('a')
title.innerText = '' + today.day + ' ' + today.sopBook + ' ' + today.sopChapter + ' ' + today.sopPages
title.setAttribute('href', `https://www.preparingforeternity.com/${today.sopBook.toLowerCase()}/${today.sopBook.toLowerCase()}${chapters[today.sopChapter]}.htm`)

readingsElement.appendChild(title)
