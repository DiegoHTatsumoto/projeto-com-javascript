const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const input_num_a = Number(document.getElementById('campo1').value);
	const input_num_b = Number(document.getElementById('campo2').value);

	const msgOK = `Sim, ${input_num_a} é maior que ${input_num_b}, parabéns.`;
	const msgNot = `Não, ${input_num_a} não é maior que ${input_num_b}, portanto errado.`;

	const res = document.getElementById('res');
	
	if (input_num_a > input_num_b) {
		alert(msgOK);
		res.innerHTML = "O resultado do campo 1 foi superior ao do campo 2";
		res.className = "autorizado"
	} else {
		alert(msgNot);
		res.innerHTML = "O resultado do campo 2 foi superior ao do campo 1";
		res.className = "negado"
	}
});

