const images = ["src/music anime/wallpaper anime/loading-image.gif","src/music anime/wallpaper anime/Bunny Girl Senpai.jpg", "src/music anime/wallpaper anime/CardCaptor Sakura 1.jpg", "src/music anime/wallpaper anime/CardCaptor Sakura 2.jpg", "src/music anime/wallpaper anime/CardCaptor Sakura 3.jpg", "src/music anime/wallpaper anime/CardCaptor Sakura 4.jpg", "src/music anime/wallpaper anime/CardCaptor Sakura 5.jpg","src/music anime/wallpaper anime/CardCaptor Sakura 6.jpg", "src/music anime/wallpaper anime/CardCaptor Sakura 7.jpg","src/music anime/wallpaper anime/My Dress-Up Daling.jpg", "src/music anime/wallpaper anime/Fate Stay Night.jpg", "src/music anime/wallpaper anime/Fate Zero.jpg", "src/music anime/wallpaper anime/Jujutsu Kaisen.jpg","src/music anime/wallpaper anime/Darling In The Franxx.jpg", "src/music anime/wallpaper anime/Naruto Shippuden 3.jpg", "src/music anime/wallpaper anime/Oshi No Ko 1.jpg", "src/music anime/wallpaper anime/Oshi No Ko 2.jpg","src/music anime/wallpaper anime/OverLord.jpg", "src/music anime/wallpaper anime/Princess Connect 1.jpg", "src/music anime/wallpaper anime/Princess Connect 2.jpg", "src/music anime/wallpaper anime/Princess Connect 3.jpg", "src/music anime/wallpaper anime/Princess Connect 4.jpg", "src/music anime/wallpaper anime/Princess Connect 5.jpg","src/music anime/wallpaper anime/ReZero 1.jpg", "src/music anime/wallpaper anime/ReZero 2.jpg", "src/music anime/wallpaper anime/ReZero 3.jpg", "src/music anime/wallpaper anime/ReZero 4.jpg", "src/music anime/wallpaper anime/ReZero 5.jpg", "src/music anime/wallpaper anime/ReZero 6.jpg","src/music anime/wallpaper anime/ReZero 7.jpg", "src/music anime/wallpaper anime/ReZero 8.jpg","src/music anime/wallpaper anime/SPYxFamily.jpg", "src/music anime/wallpaper anime/The Misfit Of Demon King Academy.jpg", "src/music anime/wallpaper anime/The Worlds Finest Assassin.jpg", "src/music anime/wallpaper anime/Tonikaku Kawaii 1.jpg","src/music anime/wallpaper anime/Tonikaku Kawaii 2.jpg"]; // Lista com os nomes das imagens
const songs = ["src/music anime/Ending Bunny Girl Senpai ED PT-BR.mp3","src/music anime/Ending Bunny Girl Senpai ED PT-BR.mp3","src/music anime/Opening CardCaptor Sakura 1.mp3", "src/music anime/Ending CardCaptor Sakura 1.mp3", "src/music anime/Opening e Ending 2 CardCaptor Sakura.mp3","src/music anime/Opening CardCaptor Sakura 3.mp3","src/music anime/Ending CardCaptor Sakura 3.mp3","src/music anime/Opening CardCaptor Sakura 4.mp3","src/music anime/Ending CardCaptor Sakura 4.mp3","src/music anime/Opening My Dress-Up Darling.mp3","src/music anime/Opening Fate Stay Ninght.mp3","src/music anime/Opening FateZero 1.mp3","src/music anime/Opening Jujutsu Kaisen.mp3","src/music anime/Opening DARLING in the FRANXX.mp3","src/music anime/Opening Naruto Shippuden 3 PT-BR.mp3","src/music anime/Opening Oshi No Ko.mp3","src/music anime/Opening Oshi No Ko PT-BR.mp3","src/music anime/Opening OverLord.mp3","src/music anime/Opening Princess Connect 1.mp3","src/music anime/Ending Princess Connect 1.mp3","src/music anime/Opening Princess Connect 2.mp3","src/music anime/Ending Princess Connect 2.mp3","src/music anime/Opening Princess Connece Shining Future.mp3","src/music anime/pening ReZero 1.mp3","src/music anime/Ending ReZero 1.mp3","src/music anime/Opening ReZero 2.mp3","src/music anime/Ending ReZero 2.mp3","src/music anime/Opening ReZero 3.mp3","src/music anime/Ending ReZero 3.mp3","src/music anime/Opening ReZero 4.mp3","src/music anime/Ending ReZero 4.mp3","src/music anime/Opening SPYxFAMILY 2.mp3","src/music anime/Opening the misfit of demon king academy.mp3","src/music anime/Opening the world's finest assassin.mp3","src/music anime/Opening Tonikaku Kawaii.mp3","src/music anime/Ending Tonikaku Kawaii.mp3"]; // Lista com os nomes das músicas
let currentIndex = 0; // Índice atual da imagem e música exibidas

const imagemElement = document.getElementById("imagem");
const legendaElement = document.getElementById("legenda");
const backButton = document.getElementById("back");
const pauseButton = document.getElementById("pause");
const closeButton = document.getElementById("close");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const audio = document.getElementById("audio");
const audioElement = document.getElementById("audio");
const volumeSlider = document.getElementById("volume");
const volumeLabel = document.getElementById("volumeLabel");

// Atualiza o volume quando o slider é movido
volumeSlider.addEventListener("input", function() {
  audioElement.volume = volumeSlider.value;
  const volumePercent = Math.round(volumeSlider.value * 100);
  volumeLabel.textContent = `${volumePercent}%`;
});

function updateImageAndSong() {
  imagemElement.src = images[currentIndex];
  legendaElement.textContent = songs[currentIndex];
}

backButton.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    updateImageAndSong();
  });
  
  nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % songs.length;
    updateImageAndSong();
  });
  

playButton.addEventListener("click", function() {
    if (currentIndex > 0) {
        audio.src = songs[currentIndex];
        audio.play();
    }
});
  
pauseButton.addEventListener("click", function() {
  audio.pause();
});

closeButton.addEventListener("click", function() {
  // Lógica para fechar o sistema de reprodução de música
  window.close();
});

function getFileNameFromUrl(url) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

function updateImageAndSong() {
  imagemElement.src = images[currentIndex];
  const imageName = getFileNameFromUrl(images[currentIndex]);
  legendaElement.textContent = imageName;
}