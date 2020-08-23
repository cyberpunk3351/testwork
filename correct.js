const isCyrillic = (text) => /[а-я]/i.test(text);
const input = document.querySelector(`#textarea`);
const res = document.querySelector(`.res`);
input.addEventListener(`input`, () => {
	const cyrillic = isCyrillic(input.value);  
  res.classList.toggle('resultr', cyrillic);
});