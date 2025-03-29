for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`)
}

const gifts = ['teddy bear', 'drone', 'doll']
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`wrapped ${gifts[i]} and added a bow!`);
}
return gifts
}
wrapGifts(gifts)

const names = ['Guadalupe', 'Ollie', 'Aki']
function writeCards(names, event) {
  let messages = []
  for (let q = 0; q < names.length; q++) {
    messages.push(`Thank you, ${names[q]}, for the wonderful ${event} gift!`)
  }
  return messages
}
console.log(writeCards(names, 'surprise'));

function countDown(int) {
  while (int >= 0) {
    console.log(int);
    int--
  }
}
countDown(10);