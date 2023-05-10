const url = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1pSfBJwwN_mzI6S1_6McCq2JNbm4Y-eBCQ&usqp=CAU",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAMAAAD0WI85AAAAFVBMVEX////OKTlHcFDKABnvysvO1s8uYTrLv8JkAAAAeUlEQVR4nO3PgQ2DAAzAsA4G/5+8JyYRFfuCZD5LzNMB/2KkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipmXOJ+S4xAAAAAAAAb3MtMfcScyxhpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqVkz8gOiyVkRPGMexAAAAABJRU5ErkJggg==",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABPCAMAAADmzqp4AAAAFVBMVEX///8AkkbOKzcAjz53tYrdf4PNHy0nfAy/AAAAQklEQVRoge3NNwEAMAADoHT6l1wLOXqCATIqa6dz7qzE6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1ej+9D5V+KL3tQk2pAAAAAElFTkSuQmCC",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABPCAMAAADmzqp4AAAAS1BMVEUNXq////8AWq20wt5ihcAAUarK1OcCXK4AUqotarQAVayTrNJ7lscAV6x/ncuQqtHz9voATqmLptAAS6i6yeLC0OWsvdt1ksYhZLJOs/beAAABAklEQVRoge2ZYRNCQBCGDwmHRIn//0vLFGXVZOs1Zs77DDfm9sPjw96xe8YI8oP3oMhlbEnopXcrXh+HxuvvcGi89ujBoJdep7xWUGZ9qCpF6IT0poLi3IfqQoYCHEb1kmEc3674Pg5P36fGQ3ervEk0SYefoZfetb1RGaIwmaC59JagkaF6D2P8z5T7fjzsz1X4Mt2NpQvfBXrp3ag3SnBovCbCofIuCb1ueWWi2afXAvN3ks9yYbVV701b4HqdrF/cFqSCXnrpBXhxJYCuXoBVPMr6iBCX+NRQezc1rzk3r18H7Dku1p9E7pP00kvv/17gGafqPBR4pqth7c8DIS5wBQpKPUsZfqEFAAAAAElFTkSuQmCC",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ojXUL046YeOZkIGc94GYzBCHw_cAqQ0LDyQDYCE&usqp=CAE&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0A4YqWCMLwiCn1UwuWeLwIfMaQVrkdgAKJvAIKbw&usqp=CAE&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiIRoE4_qyZFSNw8aBCWbZ7MEERXf1kRkfr00DuM&usqp=CAE&s",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA8CAMAAABreNUXAAAAn1BMVEX////IEC4BIWnICiz9+vrJJDbmrbLGABoAAFEADWORkq3DAAAAH2gAAF4AAGAAAFfHACfGACEAFGTFAA8AEGPEAAjk5etYXorr7PDy1NaAhKP45+j13+D67u/x8vV5fZ7vzM5qcJWjpbtiZ5CrrcHb3OQgLG4AAETZeoGYm7PVZ3HbgYjSWmTQUFrXcHfPSFPej5TMNULNPUzsv8LinKH1jrzbAAAD0UlEQVRYhe2ZaXuiMBSFo9AyFAibaV1qq9a2rri0//+3TW4SIBcBldHxmWd6P3WBvJ7D4r0nZPFM8ur2PbtdX/YDP+7eaqVl3fPfH46e5fW7hAyWAZwSOKseCeKVTn7p0/o1mnBt2n/h1MQKgRpzKiGAX2Cy33EvyHU7PlCHMxamWqGCVgnZqyafyXU7ntA6cxCVkCSGP4Qxvs6vldf5PK7tvXZBq3J43csZzwtHak4wucLtM7jcYUFdOqEBgPVINxXIDMihU9RcRj6Zyx1OqSCL6Vo5NZqbnLyKBTlOBto/Hzm5MZdTH4GqHN7oWs15RFxK5/zH3sqRmmeY7EduA64b+YK6ZdJhRCVzSl3CD6K21CzdZkhzd+xFZ3MjbywcjqXDBa025VKI+HjUnYDmtXTbmg11zZh8nMupXKu5VQ7vkdaJS4WBRBlD7Um122PN7SNc7vAYOfyFqDZVC5HsBBrpmuMCOdNcz5Vah1KrUdQa0ezjZ1wgtwV5I6+ztdTdfn/zo6PcyH97B4dDC7TGO6y1TbVbVOMCuTPlR4zW4LYROkt8nQW5misdNqXDhrNH1GmHogcDcYXmqX6HFTRzt6u4kZdqlQ5japsWHscCl5O9D6F5z4TmAvnJ90q5nv8E1O8AHDbiO0z98A5efAdccYcht7eY3C/h9iWVCSrD13UaFbVWcIEsNW9i49DtlxLui9QqHC5QP8qonPurvD79CX+HjXaOLPRUHXL5k6MObOlUc+J/VqxPGtUB9y/VP8w1G1SB22iJu0ZlZFyj2QLEaFStvJotQFq3qR/uD/eHewHurd4bt3pP3up74Vbfg/8bt7avy+qrpfo22dRWcwczdeBuVN/X1fSxOXUnGlor+DYr+9is1IhvyBG/so+t7Ns1KoN23GJArenbc/JWD1JO7NvVnJJT72JBDSS1dk5BmoHM9lLz0TlFzWU5dS8dDrfmSXNZ0W0VWR2Zy9QcqlEd0BoyoJ44h2pk5Hb1HKrmbv1ugsEs1Xry3H2gmW1Ac8XcrbKVrEZ7NZTBk3NmzpDVYBZrbpfkDCpXybVu5BDKJPXsXEUj64FoIVcp0SrHfXldUWp3PEfqYM1DrDnPkVRullNVsBLD2NstZoWn5GYymcw1JzJ6ZpCwp7mZygk1quZwSSp7Wk4ok9gqtyEnjApatUDlT3NRrFm5LTVH6NXaW6tAOHX4AjlwVs8LFQhD2qxTUWx1wdw7JyfO4a4CCkUvnPNrmtWuQpJS9UD0CvsauttCM6Iy0HqlfZwCWVCVw8ngqvtWOZkDU62tYDm4+j6dpvk393yPkgnovacAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABPCAMAAADmzqp4AAAAG1BMVEUAK3/OESb80RYAI4F3bWj/2QD/2RXcZSLNACYzdeAQAAAARElEQVRoge3NBwEAIBAEoHfbP7ERvABQgKrImKsn9rktkrVer9fr9Xq9Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X+/cAwjUswLKWo9AAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABnCAMAAAANMS0jAAAAFVBMVEUAAADvM0D92iV9axL/4ifzdDnvLEFlyyytAAAATklEQVRoge3NMQEAIAwDsAED/5JnoQdnYiBVmdM70fetSNh6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/34DlNONevz851XAAAAAElFTkSuQmCC",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAHlBMVEXaKRz////XAAD0zMv11NTtq6r22Nj0z83zyMf88O+im5UgAAAAmklEQVRoge3aQQ6DMAwAQUogCf//cHuvqZSqyBGdPQPD0Za8LJIkSfrL1rjL2b1u79X9anhtj6h2uVtCt3C5XC6Xy+VyuRO4J1vBqx66/fyFIXZvJa4foXv0k+fb0Cax1vDr31SH3O1n7sblcrlcLpc7lZs1XyXNk1nz84cfuueewuVyuVwul8u9u5t1v5F0r5J1nyNJkqQ5ewKnJhDeQfq+DAAAAABJRU5ErkJggg==",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkc-cvNrIYKjvIlP3-UP-0FMXGz1Si7xPInw&usqp=CAU",
    
  ];
  const correctAnswers = [
    '',
    'Hungary',
    'Italy',
    'Greece',
    'Austria',
    'Germany',
    'Netherland',
    'United Kingdom',
    'Romania',
    'Belgium',
    'Switzerland',
    'Ireland',
  ];
  const content = document.getElementById('content');
  const nextButton = document.getElementById('nextBtn');
  const previousBtn = document.getElementById("previousBtn");
  const startBtn = document.getElementById("startBtn");
  let currentUrlIndex = 0;
  
  function preloadImage(url) {
    let img = new Image();
    img.src = url;
}
  function showImage(url) {
      fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          } else {
              let img = document.createElement('img');
              img.src = url;
              img.style.width = '500px'; // Change to desired width
              img.style.height = '500px'; // Change to desired height
              img.style.objectFit = 'cover'; 
              content.innerHTML = '';
              content.appendChild(img);
  
              let input = document.createElement('input');
              input.type = 'text';
              input.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    localStorage.setItem(url, this.value);
                    
                }
            });
              content.appendChild(input);
  
              let storedValue = localStorage.getItem(url);
              if (storedValue) {
                  input.value = storedValue;
              }
  
              let button = document.createElement('button');
              button.innerHTML = 'Submit';
              button.onclick = function() {
                  checkAnswer(input, url); 
                  
              };
              content.appendChild(button);
          }
      })
      .catch(e => {
          console.log('There has been a problem with the fetch operation: ' + e.message);
      });
  }
  
  function checkAnswer(input, url) {
      let feedback = document.createElement('p');
      if (input.value.toLowerCase() === correctAnswers[currentUrlIndex].toLowerCase()) {
          feedback.textContent = 'Correct!';
          feedback.style.color = 'green';
      } else {
          feedback.textContent = 'Incorrect. The correct answer is ' + correctAnswers[currentUrlIndex];
          feedback.style.color = 'red';
      }
      content.appendChild(feedback);
      localStorage.setItem(url, input.value);
      // Wait a bit before moving to the next image to ensure the user sees the feedback message
      setTimeout(nextImage, 2000);
  }
  function nextImage() {
    if (currentUrlIndex < url.length - 1) {
        currentUrlIndex++;
        showImage(url[currentUrlIndex]);
        if (currentUrlIndex < url.length - 1) {
            preloadImage(url[currentUrlIndex+1]);
        }
    } else {
        alert('No more images to show!');
    }
} nextButton.onclick = nextImage;
function previousImage() {
    if (currentUrlIndex > 0) {
        currentUrlIndex--;
        showImage(url[currentUrlIndex]);
        if (currentUrlIndex > 0) {
            preloadImage(url[currentUrlIndex-1]);
        }
    } else {
        alert('No more images to show!');
    }
} previousBtn.onclick = previousImage;
// Show the first image
showImage(url[currentUrlIndex]);
if (currentUrlIndex < url.length - 1) {
    preloadImage(url[currentUrlIndex+1]);
}
  
function startCountdown(seconds){ 
      const timer = document.getElementById("timer");
      const interval = setInterval(function () {
      seconds--; 
      timer.textContent = seconds;
  
      if(seconds == 10){
          timer.style.color = "red"; 
      }
      if (seconds <= 0){
              clearInterval(interval);
              alert("Game over!");
      }
   }, 1000);
  }
  
  startBtn.addEventListener("click", function(){
  startCountdown(60);
  nextImage();
  this.style.display = 'none';
  });
  