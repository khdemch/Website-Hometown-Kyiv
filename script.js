var images;


images = ['images/rusanivka.jpg','images/puppet-theatre.jpg', 'images/khmelnytskyi.jpg'];

let element_kyiv = document.getElementById('kyiv');
element_kyiv.setAttribute("src", images[0]);


document.getElementById('next_image').addEventListener('click', (event) => {
  let element_kyiv2 = document.getElementById('kyiv');
  images.push(images[0]);
  images.shift();
  let element_kyiv3 = document.getElementById('kyiv');
  element_kyiv3.setAttribute("src", images[0]);
});

document.getElementById('previous_image').addEventListener('click', (event) => {
  let element_kyiv4 = document.getElementById('kyiv');
  images.unshift(images.slice(-1)[0]);
  images.pop();
  let element_kyiv5 = document.getElementById('kyiv');
  element_kyiv5.setAttribute("src", images[0]);
});