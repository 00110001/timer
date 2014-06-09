// (1)
// setInterval('console.log("прошла секунда")', 1000) 

// (2)
var count = 1;
var a = 0;
var min = 0;
var min1 = 0;
function sec() { 
  min = Math.floor((count*a)/60);
  console.log("Прошло "+count+" секунд, "+a+"x"+' Всего прошло: '+min1+" минут "+(count*a)+' сек');
  a++;
  $('body').text("Прошло "+count+" секунд, "+a+"x"+' Всего прошло: '+min1+" минут "+(count*a)+' сек');
}

function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'Over.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
  console.log('Тад-дам-дам');
}

function secReset() {
    a=0;
    min1++;   
}
sec();
setInterval(sec, 1000*count);
setInterval(secReset, 60000);
setInterval(soundClick, 60000*20);

