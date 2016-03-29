// get the reference of the body
var body = document.getElementsByTagName('body')[0];

// set content
var initHtml = '<h4>Play with Tim, Come on!    ' + location.href + '</h4>';
var content = document.createElement('div');
content.setAttribute('id', 'timqian92Content');
body.appendChild(content);
content.innerHTML = initHtml;

// create toggle img
var toggle = document.createElement('img');
var imgSrc = chrome.extension.getURL('dog.png');
toggle.setAttribute('id', 'timqian92Toggle');
toggle.setAttribute('src', imgSrc);
body.appendChild(toggle);

// handle toggle event
var toggleFlag = false;
toggle.addEventListener('click', function () {
  if (toggleFlag) {
    content.style.width = '0';
    toggleFlag = !toggleFlag;
  } else {
    content.style.width = '100%';
    toggleFlag = !toggleFlag
  }
});

console.log(location.href);
