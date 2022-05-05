// Scripts

/* date sets below this point*/

const data = [
  {
    quote:
      '"The Universe is not only queerer than we suppose, but queerer than we can suppose."',
    cite: "— J.B.S Haldane",
    emoji: "🧠",
    image:
      "url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/eagle-nebula-pillars-of-creation-weston-westmoreland.jpg)"
  },
  {
    quote:
      '"We are all in the gutter, but some of us are looking at the stars."',
    cite: "— Oscar Wilde",
    emoji: "🌠",
    image:
      "url(https://www.fairfaxfamilyfun.com/wp-content/uploads/2016/05/1529602.png)"
  },
  {
    quote:
      '"Yet herein will I imitate the sun, who doth permit the base contagious clouds to smother up his beauty from the world."',
    cite: "— William Shakespeare",
    emoji: "🔆",
    image:
      "url(https://www.wallpaperup.com/uploads/wallpapers/2014/01/04/214848/fd73c029eea04ec2289ccbdcbc66572c.jpg)"
  }
];

/*quote & emoji below this point*/

const quote = document.querySelector("blockquote");

const cite = document.querySelector("cite");

const emoji = document.querySelector("p");

const bgImage = document.querySelector("body");

/* testing */
quote.innerHTML = "Testing. Testing. 1 2 3";
cite.innerHTML = "Who said that?";
emoji.innerHTML = "👽";
bgImage.style.backgroundImage =
  "url(https://th.bing.com/th/id/R.675f7e92a0462046bf590b43e4f84fc6?rik=jRlDVmU7fkKMcw&riu=http%3a%2f%2fdt.azadicdn.com%2fwp-content%2fuploads%2f2012%2f10%2f2012-10-24_003056.png%3f200&ehk=OjwzG0YT2qAQMa8eelzMkztPbtztZ%2bbCNc3%2bYME0XLA%3d&risl=&pid=ImgRaw&r=0)";

/* navigation + event listeners */

let itemNumber = 0;

const nextButton = document.querySelector(".next");

const prevButton = document.querySelector(".prev");

const ranButton = document.querySelector(".random");

/* next button event listner */
nextButton.addEventListener("click", function () {
  itemNumber = itemNumber + 1;
  if (itemNumber > data.length - 1) {
    itemNumber = 0;
  }

  quote.innerHTML = data[itemNumber].quote;
  cite.innerHTML = data[itemNumber].cite;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

/* previous button event listner */

prevButton.addEventListener("click", function () {
  itemNumber = itemNumber - 1;
  if (itemNumber < 0) {
    itemNumber = data.length - 1;
  }

  quote.innerHTML = data[itemNumber].quote;
  cite.innerHTML = data[itemNumber].cite;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

/* random button event listener */

ranButton.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * data.length);

  quote.innerHTML = data[randomNumber].quote;
  cite.innerHTML = data[randomNumber].cite;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
});

/* keypress event listener */

/* Right arrow = Next Button */
document.addEventListener("keyup", function () {
  if (event.keyCode === 39) {
    itemNumber = itemNumber + 1;

    if (itemNumber > data.length - 1) {
      itemNumber = 0;
    }

    quote.innerHTML = data[itemNumber].quote;
    cite.innerHTML = data[itemNumber].cite;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  /* Left arrow = previous button */

  if (event.keyCode === 37) {
    itemNumber = itemNumber - 1;

    if (itemNumber < 0) {
      itemNumber = data.length - 1;
    }

    quote.innerHTML = data[itemNumber].quote;
    cite.innerHTML = data[itemNumber].cite;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  /* space bar = random button */

  if (event.keyCode === 32) {
    randomNumber = Math.floor(Math.random() * data.length);

    quote.innerHTML = data[randomNumber].quote;
    cite.innerHTML = data[randomNumber].cite;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  }
});
