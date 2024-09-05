// Функция для скрытия/отображения поля "Имя"
function toggleNameInput() {
    const nameGroup = document.getElementById('name-group');
    const showNameChecked = document.getElementById('show-name').checked;
    
    if (showNameChecked) {
        nameGroup.style.display = 'block';
    } else {
        nameGroup.style.display = 'none';
    }
}

// Функция для проверки спама
function checkSpam(str) {
    const spamWords = ['viagra', 'xxx'];
    spamWords.forEach(word => {
        const regex = new RegExp(word, 'gi');
        str = str.replace(regex, '***');
    });
    return str;
}

// Форматирование имени
function formatName(name) {
    name = name.trim();
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Функция для добавления комментария
function addComment() {
    const nameInput = document.getElementById('name').value;
    const avatarInput = document.getElementById('avatar').value;
    const messageInput = document.getElementById('message').value;
    const showNameChecked = document.getElementById('show-name').checked;

    // Если чекбокс "Показывать имя" отключен, то используем 'username'
    const formattedName = showNameChecked && nameInput ? formatName(nameInput) : 'username';
    const checkedMessage = checkSpam(messageInput);

    const defaultAvatars = [
    'https://avatarko.ru/img/kartinka/29/ogon_koster_28770.jpg',
    'https://avatarko.ru/img/kartinka/17/voda_16746.jpg',
    'https://avatarko.ru/img/kartinka/16/zhivotnye_kot_15868.jpg',
    'https://avatarko.ru/img/kartinka/18/serdce_derevo_17338.jpg',
    'https://avatarko.ru/img/kartinka/12/devushka_siluet_more_11482.jpg',
    'https://avatarko.ru/img/kartinka/33/solnce_devushka_siluet_34080.jpg'
    ];

    const randomAvatar = defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];
    const avatarSrc = avatarInput || randomAvatar;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const commentContainer = document.createElement('div');
    commentContainer.className = 'comment';

    const avatarImg = document.createElement('img');
    avatarImg.src = avatarSrc;
    avatarImg.width = 50;
    avatarImg.height = 50;

    const nameSpan = document.createElement('span');
    nameSpan.className = 'name';
    nameSpan.textContent = formattedName;

    const dateSpan = document.createElement('span');
    dateSpan.className = 'date';
    dateSpan.style.fontSize = '12px';
    dateSpan.style.marginLeft = '10px';
    dateSpan.textContent = formattedDate;

    const messageSpan = document.createElement('span');
    messageSpan.className = 'message';
    messageSpan.textContent = checkedMessage;

    commentContainer.appendChild(avatarImg);
    commentContainer.appendChild(nameSpan);
    commentContainer.appendChild(dateSpan);
    commentContainer.appendChild(messageSpan);

    document.getElementById('comments').appendChild(commentContainer);

    // Очищаем поля ввода
    document.getElementById('name').value = '';
    document.getElementById('avatar').value = '';
    document.getElementById('message').value = '';
}
