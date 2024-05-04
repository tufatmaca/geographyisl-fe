const notes = [
    "Yeryüzündeki en yüksek dağ zirvesi, Everest Dağı'dır.",
    "Amazon Nehri, dünyanın en uzun nehri olarak bilinir.",
    "Afrika kıtasında yer alan en büyük çöl, Sahara Çölü'dür.",
    "Dünya üzerindeki en büyük okyanus, Pasifik Okyanusu'dur.",
    "Dünya üzerindeki en büyük kıta, Asya kıtasıdır."
];

const button = document.getElementById('randomButton');
const noteContainer = document.getElementById('noteContainer');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * notes.length);
    const note = notes[randomIndex];
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.textContent = note;
    noteContainer.innerHTML = '';
    noteContainer.appendChild(noteElement);
});

button.addEventListener('mouseover', () => {
    button.classList.add('animated');
});

button.addEventListener('animationend', () => {
    button.classList.remove('animated');
});
