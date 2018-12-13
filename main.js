function preencherPerfil(info) {
  var template = `
      <figure>
            <img src="" alt="">
          </figure>
          <h1 class="nome">${info.name}</h1>
          <ul>
            <li>
              <span>Altura:</span>
              <span>${info.height }</span>
            </li>
            <li>
              <span>Cor do cabelo:</span>
              <span>${info.hair_color}</span>
            </li>
            <li>
              <span>Ano de nascimento:</span>
              <span>${ info.birth_year}</span>
            </li>
            <li>
              <span>Naves:</span>
              <span id="naves">
                <ul></ul>
              </span>
            </li>
          </ul>
  `



 // nome.innerHTML = info.name;
  // altura.innerHTML = info.height + "cm";
  // corCabelo.innerHTML = info.hair_color;
  // anoNascimento.innerHTML = info.birth_year;

  var paerfil = document.getElementById("perfil");
  perfil.innerHTML = template;
}

// AJAX com jQuery
$.ajax({
  url: "https://swapi.co/api/people/1/"
})
.done(function(info){
  preencherPerfil(info)
})