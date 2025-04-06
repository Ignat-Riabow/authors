const authors = [
        "Цётка", "Ядвігін Ш.", "Янка Купала", "Якуб Колас",
    "Максім Багдановіч", "Алесь Гарун", "Максім Гарэцкі", "Змітрок Бядуля",
    "Уладзімір Дубоўка", "Кандрат Крапіва", "Міхась Зарэцкі", "Пятрусь Броўка",
    "Аркадзь Куляшоў", "Максім Танк", "Кузьма Чорны", "Пімен Панчанка",
    "Іван Мележ", "Іван Шамякін", "Андрэй Макаёнак", "Янка Брыль", "Васіль Быкаў",
    "Уладзімір Караткевіч", "Міхась Стральцоў", "Ніл Гілевіч", "Іван Чыгрынаў",
    "Іван Навуменка", "Рыгор Барадулін", "Алесь Разанаў", "Георгій Марчук",
    "Аляксей Дудараў", "Міхась Башлакоў"
];

const authorCaptions = {
    "Цётка": "Белорусская поэтесса и просветительница",
    "Ядвігін Ш.": "Первый белорусский беллетрист",
    "Янка Купала": "Национальный поэт Беларуси",
    "Якуб Колас": "Классик белорусской литературы",
    "Максім Багдановіч": "Автор сборника 'Вянок'",
    "Алесь Гарун": "Поэт и публицист",
    "Максім Гарэцкі": "Прозаик и литературовед",
    "Змітрок Бядуля": "Прозаик и поэт",
    "Уладзімір Дубоўка": "Поэт и переводчик",
    "Кандрат Крапіва": "Сатирик и драматург",
    "Міхась Зарэцкі": "Автор произведений о деревне",
    "Пятрусь Броўка": "Поэт и переводчик",
    "Аркадзь Куляшоў": "Лирик и эпик",
    "Максім Танк": "Мастер белорусской поэзии",
    "Кузьма Чорны": "Автор 'Сердца на ладони'",
    "Пімен Панчанка": "Поэт и переводчик",
    "Іван Мележ": "Автор 'Полесской хроники'",
    "Іван Шамякін": "Автор романов о войне",
    "Андрэй Макаёнак": "Драматург и сатирик",
    "Янка Брыль": "Мастер короткого рассказа",
    "Васіль Быкаў": "Прозаик и герой войны",
    "Уладзімір Караткевіч": "Автор исторических романов",
    "Міхась Стральцоў": "Поэт и прозаик",
    "Ніл Гілевіч": "Поэт и общественный деятель",
    "Іван Чыгрынаў": "Автор романов о прошлом Беларуси",
    "Іван Навуменка": "Писатель и литературовед",
    "Рыгор Барадулін": "Народный поэт Беларуси",
    "Алесь Разанаў": "Мастер свободного стиха",
    "Георгій Марчук": "Современный белорусский писатель",
    "Аляксей Дудараў": "Драматург и сценарист",
    "Міхась Башлакоў": "Поэт и публицист"
};

const authorLinks = {
    "Цётка": "https://be.wikipedia.org/wiki/%D0%90%D0%BB%D0%B0%D1%96%D0%B7%D0%B0_%D0%9F%D0%B0%D1%88%D0%BA%D0%B5%D0%B2%D1%96%D1%87",
    "Ядвігін Ш.": "http://be.wikipedia.org/wiki/%D0%AF%D0%B4%D0%B2%D1%96%D0%B3%D1%96%D0%BD_%D0%A8.",
    "Янка Купала": "https://be.wikipedia.org/wiki/%D0%AF%D0%BD%D0%BA%D0%B0_%D0%9A%D1%83%D0%BF%D0%B0%D0%BB%D0%B0а",
    "Якуб Колас": "https://be.wikipedia.org/wiki/%D0%AF%D0%BA%D1%83%D0%B1_%D0%9A%D0%BE%D0%BB%D0%B0%D1%81",
    "Максім Багдановіч": "https://be-tarask.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%81%D1%96%D0%BC_%D0%91%D0%B0%D0%B3%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2%D1%96%D1%87",
    "Алесь Гарун": "https://be-tarask.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%93%D0%B0%D1%80%D1%83%D0%BD",
    "Максім Гарэцкі": "https://be-tarask.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%81%D1%96%D0%BC_%D0%93%D0%B0%D1%80%D1%8D%D1%86%D0%BA%D1%96",
    "Змітрок Бядуля": "https://be.wikipedia.org/wiki/%D0%97%D0%BC%D1%96%D1%82%D1%80%D0%BE%D0%BA_%D0%91%D1%8F%D0%B4%D1%83%D0%BB%D1%8F",
    "Уладзімір Дубоўка": "https://be.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D0%BC%D1%96%D1%80_%D0%94%D1%83%D0%B1%D0%BE%D1%9E%D0%BA%D0%B0",
    "Кандрат Крапіва": "https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%D1%82_%D0%9A%D1%80%D0%B0%D0%BF%D1%96%D0%B2%D0%B0",
    "Міхась Зарэцкі": "https://be.wikipedia.org/wiki/%D0%9C%D1%96%D1%85%D0%B0%D1%81%D1%8C_%D0%97%D0%B0%D1%80%D1%8D%D1%86%D0%BA%D1%96",
    "Пятрусь Броўка": "https://be.wikipedia.org/wiki/%D0%9F%D1%8F%D1%82%D1%80%D1%83%D1%81%D1%8C_%D0%91%D1%80%D0%BE%D1%9E%D0%BA%D0%B0",
    "Аркадзь Куляшоў": "https://be-tarask.wikipedia.org/wiki/%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D0%B7%D1%8C_%D0%9A%D1%83%D0%BB%D1%8F%D1%88%D0%BE%D1%9E",
    "Максім Танк": "https://be-tarask.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%81%D1%96%D0%BC_%D0%A2%D0%B0%D0%BD%D0%BA",
    "Кузьма Чорны": "https://be-tarask.wikipedia.org/wiki/%D0%9A%D1%83%D0%B7%D1%8C%D0%BC%D0%B0_%D0%A7%D0%BE%D1%80%D0%BD%D1%8B",
    "Пімен Панчанка": "https://be.wikipedia.org/wiki/%D0%9F%D1%96%D0%BC%D0%B5%D0%BD_%D0%9F%D0%B0%D0%BD%D1%87%D0%B0%D0%BD%D0%BA%D0%B0",
    "Іван Мележ": "https://be.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%9C%D0%B5%D0%BB%D0%B5%D0%B6",
    "Іван Шамякін": "https://be-tarask.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%A8%D0%B0%D0%BC%D1%8F%D0%BA%D1%96%D0%BD",
    "Андрэй Макаёнак": "https://be.wikipedia.org/wiki/%D0%90%D0%BD%D0%B4%D1%80%D1%8D%D0%B9_%D0%9C%D0%B0%D0%BA%D0%B0%D1%91%D0%BD%D0%B0%D0%BA",
    "Янка Брыль": "https://be.wikipedia.org/wiki/%D0%AF%D0%BD%D0%BA%D0%B0_%D0%91%D1%80%D1%8B%D0%BB%D1%8C",
    "Васіль Быкаў": "https://be.wikipedia.org/wiki/%D0%92%D0%B0%D1%81%D1%96%D0%BB%D1%8C_%D0%91%D1%8B%D0%BA%D0%B0%D1%9E",
    "Уладзімір Караткевіч": "https://be.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D0%BC%D1%96%D1%80_%D0%9A%D0%B0%D1%80%D0%B0%D1%82%D0%BA%D0%B5%D0%B2%D1%96%D1%87",
    "Міхась Стральцоў": "https://be.wikipedia.org/wiki/%D0%9C%D1%96%D1%85%D0%B0%D1%81%D1%8C_%D0%A1%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D1%86%D0%BE%D1%9E",
    "Ніл Гілевіч": "https://be-tarask.wikipedia.org/wiki/%D0%9D%D1%96%D0%BB_%D0%93%D1%96%D0%BB%D0%B5%D0%B2%D1%96%D1%87",
    "Іван Чыгрынаў": "https://be.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%A7%D1%8B%D0%B3%D1%80%D1%8B%D0%BD%D0%B0%D1%9E",
    "Іван Навуменка": "https://be.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%9D%D0%B0%D0%B2%D1%83%D0%BC%D0%B5%D0%BD%D0%BA%D0%B0",
    "Рыгор Барадулін": "https://be.wikipedia.org/wiki/%D0%A0%D1%8B%D0%B3%D0%BE%D1%80_%D0%91%D0%B0%D1%80%D0%B0%D0%B4%D1%83%D0%BB%D1%96%D0%BD",
    "Алесь Разанаў": "https://be.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%A0%D0%B0%D0%B7%D0%B0%D0%BD%D0%B0%D1%9E",
    "Георгій Марчук": "https://be.wikipedia.org/wiki/%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9_%D0%9C%D0%B0%D1%80%D1%87%D1%83%D0%BA",
    "Аляксей Дудараў": "https://be.wikipedia.org/wiki/%D0%90%D0%BB%D1%8F%D0%BA%D1%81%D0%B5%D0%B9_%D0%94%D1%83%D0%B4%D0%B0%D1%80%D0%B0%D1%9E",
    "Міхась Башлакоў": "https://be.wikipedia.org/wiki/%D0%9C%D1%96%D1%85%D0%B0%D1%81%D1%8C_%D0%91%D0%B0%D1%88%D0%BB%D0%B0%D0%BA%D0%BE%D1%9E"
};

let score = 0;
let chosenAuthors = [];
let processedAuthors = 0;

// Случайный выбор 10 авторов без повторений
function getRandomAuthors() {
    while (chosenAuthors.length < 10) {
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        if (!chosenAuthors.includes(randomAuthor)) {
            chosenAuthors.push(randomAuthor);
        }
    }
}

// Создание блока автора
function renderAuthors() {
    const container = document.getElementById("authorsContainer");
    if (!container) {
        console.error("Элемент authorsContainer не найден на странице.");
        return;
    }
    container.innerHTML = ""; // Очистка контейнера

    chosenAuthors.forEach((author) => {
        const authorBlock = document.createElement("div");
        authorBlock.className = "authorBlock";

        const authorPhoto = document.createElement("img");
        authorPhoto.className = "authorPhoto eyes"; // По умолчанию версия "взгляд"
        authorPhoto.src = `img/eyes/${author}.jpg`;
        authorPhoto.alt = author;

        const authorEyesText = document.createElement("p");
        authorEyesText.textContent = authorCaptions[author] || "Взгляд автора"; // Если подпись не найдена, используется текст по умолчанию
        authorEyesText.className = "author-eyes-text";

        const authorChoices = document.createElement("div");
        authorChoices.className = "author-choices";
        const options = getRandomOptions(author);

        options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.style.margin = "5px";
            button.onclick = () => handleChoice(option, author, authorBlock);
            authorChoices.appendChild(button);
        });

        const toggleButton = document.createElement("button");
        toggleButton.className = "toggleButton";
        toggleButton.textContent = "Сменить вид";
        toggleButton.style.display = "none"; // По умолчанию скрыта
        toggleButton.onclick = () => togglePhotoView(authorPhoto, toggleButton);

        const resultIcon = document.createElement("span");
        resultIcon.className = "resultIcon";

        authorBlock.appendChild(authorPhoto);
        authorBlock.appendChild(authorEyesText);
        authorBlock.appendChild(authorChoices);
        authorBlock.appendChild(toggleButton);
        authorBlock.appendChild(resultIcon);

        container.appendChild(authorBlock);
    });
}

// Генерация случайных вариантов
function getRandomOptions(correctAuthor) {
    const options = [correctAuthor];
    while (options.length < 3) {
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        if (!options.includes(randomAuthor)) {
            options.push(randomAuthor);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

// Обработка выбора автора
function handleChoice(selectedAuthor, correctAuthor, authorBlock) {
    const authorPhoto = authorBlock.querySelector(".authorPhoto");
    const authorEyesText = authorBlock.querySelector(".author-eyes-text");
    const toggleButton = authorBlock.querySelector(".toggleButton");
    const resultIcon = authorBlock.querySelector(".resultIcon");

    if (selectedAuthor === correctAuthor) {
        resultIcon.textContent = "✔️";
        resultIcon.style.color = "green";
        score += 1;
    } else {
        resultIcon.textContent = "❌";
        resultIcon.style.color = "red";
    }

    resultIcon.style.display = "inline-block";

    // Использование ссылки из массива authorLinks
    const authorLink = Пятни|| "#";
    authorEyesText.innerHTML = `<a href="${authorLink}" target="_blank">${correctAuthor}</a>`;
    authorEyesText.classList.add("author-link");

    authorPhoto.src = `img/full/${correctAuthor}.jpg`;
    authorPhoto.classList.remove("eyes");
    authorPhoto.classList.add("full");
    toggleButton.style.display = "inline-block"; // Отображение кнопки

    processedAuthors += 1;

    if (processedAuthors === chosenAuthors.length) {
        showFinalScore();
    }
}

// Показ финального счета
function showFinalScore() {
    const finalScoreContainer = document.getElementById("finalScore");
    if (finalScoreContainer) {
        finalScoreContainer.textContent = `Игра завершена! Ваш финальный счет: ${score} из ${chosenAuthors.length}`;
        finalScoreContainer.style.display = "block";
    } else {
        console.error("Элемент finalScore не найден на странице.");
    }
}

// Переключение вида фотографии
function togglePhotoView(photoElement, toggleButton) {
    const isEyesPhoto = photoElement.classList.contains("eyes");
    if (isEyesPhoto) {
        photoElement.src = photoElement.src.replace("eyes", "full");
        photoElement.classList.remove("eyes");
        photoElement.classList.add("full");
        toggleButton.textContent = "Сменить на взгляд";
    } else {
        photoElement.src = photoElement.src.replace("full", "eyes");
        photoElement.classList.remove("full");
        photoElement.classList.add("eyes");
        toggleButton.textContent = "Сменить на полный вид";
    }
}

// Инициализация игры
getRandomAuthors();
renderAuthors();
