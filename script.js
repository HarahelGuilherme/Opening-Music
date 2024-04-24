const images = ["src/wallpaper anime/loading-image.gif","src/wallpaper anime/Bunny Girl Senpai.jpg", "src/wallpaper anime/CardCaptor Sakura 1.jpg", "src/wallpaper anime/CardCaptor Sakura 2.jpg", "src/wallpaper anime/CardCaptor Sakura 3.jpg", "src/wallpaper anime/CardCaptor Sakura 4.jpg", "src/wallpaper anime/CardCaptor Sakura 5.jpg","src/wallpaper anime/CardCaptor Sakura 6.jpg", "src/wallpaper anime/CardCaptor Sakura 7.jpg","src/wallpaper anime/My Dress-Up Daling.jpg", "src/wallpaper anime/Fate Stay Night.jpg", "src/wallpaper anime/Fate Zero.jpg", "src/wallpaper anime/Jujutsu Kaisen.jpg","src/wallpaper anime/Darling In The Franxx.jpg", "src/wallpaper anime/Naruto Shippuden 3.jpg", "src/wallpaper anime/Oshi No Ko 1.jpg", "src/wallpaper anime/Oshi No Ko 2.jpg","src/wallpaper anime/OverLord.jpg", "src/wallpaper anime/Princess Connect 1.jpg", "src/wallpaper anime/Princess Connect 2.jpg", "src/wallpaper anime/Princess Connect 3.jpg", "src/wallpaper anime/Princess Connect 4.jpg", "src/wallpaper anime/Princess Connect 5.jpg","src/wallpaper anime/ReZero 1.jpg", "src/wallpaper anime/ReZero 2.jpg", "src/wallpaper anime/ReZero 3.jpg", "src/wallpaper anime/ReZero 4.jpg", "src/wallpaper anime/ReZero 5.jpg", "src/wallpaper anime/ReZero 6.jpg","src/wallpaper anime/ReZero 7.jpg", "src/wallpaper anime/ReZero 8.jpg","src/wallpaper anime/SPYxFamily.jpg", "src/wallpaper anime/The Misfit Of Demon King Academy.jpg", "src/wallpaper anime/The Worlds Finest Assassin.jpg", "src/wallpaper anime/Tonikaku Kawaii 1.jpg","src/wallpaper anime/Tonikaku Kawaii 2.jpg"]; // Lista com os nomes das imagens
const songs = ["src/musicanime/Ending Bunny Girl Senpai ED PT-BR.mp3","src/musicanime/Ending Bunny Girl Senpai ED PT-BR.mp3","src/musicanime/Opening CardCaptor Sakura 1.mp3", "src/musicanime/Ending CardCaptor Sakura 1.mp3", "src/musicanime/Opening e Ending 2 CardCaptor Sakura.mp3","src/musicanime/Opening CardCaptor Sakura 3.mp3","src/musicanime/Ending CardCaptor Sakura 3.mp3","src/musicanime/Opening CardCaptor Sakura 4.mp3","src/musicanime/Ending CardCaptor Sakura 4.mp3","src/musicanime/Opening My Dress-Up Darling.mp3","src/musicanime/Opening Fate Stay Ninght.mp3","src/musicanime/Opening FateZero 1.mp3","src/musicanime/Opening Jujutsu Kaisen.mp3","src/musicanime/Opening DARLING in the FRANXX.mp3","src/musicanime/Opening Naruto Shippuden 3 PT-BR.mp3","src/musicanime/Opening Oshi No Ko.mp3","src/musicanime/Opening Oshi No Ko PT-BR.mp3","src/musicanime/Opening OverLord.mp3","src/musicanime/Opening Princess Connect 1.mp3","src/musicanime/Ending Princess Connect 1.mp3","src/musicanime/Opening Princess Connect 2.mp3","src/musicanime/Ending Princess Connect 2.mp3","src/musicanime/Opening Princess Connece Shining Future.mp3","src/musicanime/pening ReZero 1.mp3","src/musicanime/Ending ReZero 1.mp3","src/musicanime/Opening ReZero 2.mp3","src/musicanime/Ending ReZero 2.mp3","src/musicanime/Opening ReZero 3.mp3","src/musicanime/Ending ReZero 3.mp3","src/musicanime/Opening ReZero 4.mp3","src/musicanime/Ending ReZero 4.mp3","src/musicanime/Opening SPYxFAMILY 2.mp3","src/musicanime/Opening the misfit of demon king academy.mp3","src/musicanime/Opening the world's finest assassin.mp3","src/musicanime/Opening Tonikaku Kawaii.mp3","src/musicanime/Ending Tonikaku Kawaii.mp3"]; // Lista com os nomes das músicas
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