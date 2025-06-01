const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const diasSemanaDiv = document.getElementById('diasSemana');

dias.forEach(dia => {
  diasSemanaDiv.innerHTML += `
    <div><strong>${dia}:</strong>
      <label><input type="checkbox" name="${dia}-manha"> Manhã</label>
      <label><input type="checkbox" name="${dia}-tarde"> Tarde</label>
      <label><input type="checkbox" name="${dia}-noite"> Noite</label>
    </div>`;
});

function selecionaClasse(btn) {
  document.querySelectorAll("#classeBtns button").forEach(b => b.style.background = "");
  btn.style.background = "#8cf";
  document.getElementById("classeSelecionada").value = btn.textContent;
}

function selecionaContato(tipo) {
  const discord = document.getElementById('campoDiscord');
  const whatsapp = document.getElementById('campoWhatsapp');
  if (tipo === 'discord') {
    discord.classList.remove('hidden');
    whatsapp.classList.add('hidden');
  } else {
    whatsapp.classList.remove('hidden');
    discord.classList.add('hidden');
  }
}

function mostrarRegras() {
  alert("As regras do torneio podem incluir: respeito, fair play e uso apenas dos recursos do jogo!");
}

function enviarCadastro() {
  alert("Cadastro enviado! Revisaremos e entraremos em contato.");
}
