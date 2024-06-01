const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const input_num_a = Number(document.getElementById('campo1').value);
	const input_num_b = Number(document.getElementById('campo2').value);

	const res = document.getElementById('res');
	
	if (input_num_b > input_num_a) {
		res.innerText = `Sim, ${input_num_b} é maior que ${input_num_a}. Parabéns!`;
		res.style.color = 'green';
	} else {
		res.innerText = `Não, ${input_num_b} não é maior que ${input_num_a}. Tente novamente.`;
		res.style.color = 'red';
	}
})
