function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  if (campoPesquisa.trim() === "") {
    section.innerHTML = " <p class='deixarbranco'> Nada foi encontrado. Você precisa digitar o nome de alguma seleção ou algo relacionado. </p>";
    return;
    
  }

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  

  for (let dado of dados) {
     titulo = dado.titulo.toLowerCase()
     descricao = dado.descricao.toLowerCase()
     tags = dado.tags.toLowerCase()
    // Verificar se a pesquisa corresponde ao título, descrição ou qualquer tag
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
      `;
    }
  }

if (!resultados){
  resultados = "<p class='deixarbranco'>Nada foi encontrado</p>"

}

  section.innerHTML = resultados || "<p>Nenhuma seleção foi encontrada.</p>"; // Mostrar mensagem se não houver resultados
}