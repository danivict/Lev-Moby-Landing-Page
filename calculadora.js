input_dias = document.getElementById("dias")
input_corrida = document.getElementById("corridas")
input_consumoMedio = document.getElementById("consumo")
input_valorCorrida = document.getElementById("valor-corrida")
botao_calculo = document.getElementById("btn-calculate")

dias_concorrente = document.querySelectorAll(".dias-concorrente")
corridas_concorrente = document.querySelectorAll(".corridas-concorrente")
consumo_concorrente = document.querySelectorAll(".consumo-concorrente")
valor_corrida_concorrente = document.querySelectorAll(".valor-corrida-concorrente")

parametros_concorrentes = [dias_concorrente, corridas_concorrente, consumo_concorrente, valor_corrida_concorrente]

despesas_mensaisAll = document.querySelectorAll(".despesas-mensais")
total_brutoAll = document.querySelectorAll(".calculator .total-bruto")
total_taxaMoby = document.querySelector(".calculator .total-taxa-moby")
total_taxaA = document.querySelector(".calculator .total-taxa-a")
total_taxaB = document.querySelector(".calculator .total-taxa-b")
total_taxa_gasolinaMoby = document.querySelector(".calculator .total-taxa-gasolina-moby")
total_taxa_gasolinaA = document.querySelector(".calculator .total-taxa-gasolina-a")
total_taxa_gasolinaB = document.querySelector(".calculator .total-taxa-gasolina-b")

function showCalcBruto(element) {
  element.innerHTML = "R$" + ((input_valorCorrida.value * input_corrida.value) * input_dias.value).toFixed(2)
}

function showCalcTaxaMoby(element) {
  taxa = ((input_valorCorrida.value * input_corrida.value) * input_dias.value) * 0.11
  element.innerHTML = "R$" + taxa.toFixed(2)
}

function showCalcTaxaA(element) {
  taxa = ((input_valorCorrida.value * input_corrida.value) * input_dias.value) * 0.31
  element.innerHTML = "R$" + taxa.toFixed(2)
}

function showCalcTaxaB(element) {
  taxa = ((input_valorCorrida.value * input_corrida.value) * input_dias.value) * 0.29
  element.innerHTML = "R$" + taxa.toFixed(2)
}

function showDespesasMensais(element) {
  consumo = input_consumoMedio.value * input_dias.value
  element.innerHTML = "R$" + consumo.toFixed(2)
}

function showCalcTaxaGasolinaMoby(element) {
  consumo = input_consumoMedio.value * input_dias.value
  taxa = ((input_valorCorrida.value * input_corrida.value) * input_dias.value) * 0.11
  element.innerHTML = "R$" + ((((input_valorCorrida.value * input_corrida.value) * input_dias.value) - taxa) - consumo).toFixed(2)
}

function showCalcTaxaGasolinaA(element) {
  consumo = input_consumoMedio.value * input_dias.value
  taxa = ((input_valorCorrida.value * input_corrida.value) * input_dias.value) * 0.31
  element.innerHTML = "R$" + ((((input_valorCorrida.value * input_corrida.value) * input_dias.value) - taxa) - consumo).toFixed(2)
}

function showCalcTaxaGasolinaB(element) {
  consumo = input_consumoMedio.value * input_dias.value
  taxa = ((input_valorCorrida.value * input_corrida.value) * input_dias.value) * 0.29
  element.innerHTML = "R$" + ((((input_valorCorrida.value * input_corrida.value) * input_dias.value) - taxa) - consumo).toFixed(2)
}

function updateDays(element) {
  element.innerHTML = input_dias.value
}

function updateRaces(element) {
  element.innerHTML = input_corrida.value
}

function updateSpent(element) {
  element.innerHTML = ("R$" + input_consumoMedio.value)
}

function updateMediumRaceValue(element) {
  element.innerHTML = ("R$" + input_valorCorrida.value)
}

// ao clicar no botão "Calcular", executa: 
botao_calculo.addEventListener('click', () => {
  // atualiza os resultados em "total bruto" nas calculadoras
  total_brutoAll.forEach(showCalcBruto);
  despesas_mensaisAll.forEach(showDespesasMensais);

  // atualiza os resutados "Total - taxa"
  showCalcTaxaMoby(total_taxaMoby);
  showCalcTaxaA(total_taxaA);
  showCalcTaxaB(total_taxaB);

  // atualiza os resutados "Total - taxa - gasolina"
  showCalcTaxaGasolinaMoby(total_taxa_gasolinaMoby);
  showCalcTaxaGasolinaA(total_taxa_gasolinaA);
  showCalcTaxaGasolinaB(total_taxa_gasolinaB);

  // laço para atualizar os valores dos concorrentes 
  for (i = 0; i < 4; i++) {
    if (i === 0) {
      parametros_concorrentes[i].forEach(updateDays)
    }
    else if (i === 1) {
      parametros_concorrentes[i].forEach(updateRaces)
    }
    else if (i == 2) {
      parametros_concorrentes[i].forEach(updateSpent)
    }
    else if (i == 3) {
      parametros_concorrentes[i].forEach(updateMediumRaceValue)
    }

  }
})