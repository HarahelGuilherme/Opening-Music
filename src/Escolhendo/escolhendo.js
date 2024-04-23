function carregarMusicas() {
    var estilo = document.getElementById("estilo").value;
    
    // Aqui você pode adicionar lógica para redirecionar para a página da música escolhida
    // Por exemplo, você pode ter um objeto JavaScript com os estilos e as páginas correspondentes
    var paginasMusicas = {
      "Pop": "pop.html",
      "Rock": "rock.html",
      "Hip Hop": "hiphop.html",
      "Anime": "Anime.html",
      "Rap": "Rap.html"
    };
    
    // Redireciona para a página da música escolhida
    window.location.href = paginasMusicas[estilo];
  }
  