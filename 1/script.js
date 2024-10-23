document.addEventListener("DOMContentLoaded", function() {
    // Экраны
    const mainScreen = document.querySelector(".container");
    const chatScreen = document.getElementById("chat-screen");
    const incognitoScreen = document.getElementById("incognito-screen");

    // Кнопки
    const offButton = document.querySelector(".off-button");
    const toIncognitoButton = document.querySelector(".to-incognito-button");

    // Функция для переключения экранов
    function showScreen(screenToShow) {
        mainScreen.style.display = "none";
        chatScreen.style.display = "none";
        incognitoScreen.style.display = "none";

        // Показываем нужный экран
        screenToShow.style.display = "block";
    }

    // Переход в режим чатов
    offButton.addEventListener("click", function() {
        showScreen(chatScreen);
    });

    // Переход в режим инкогнито
    toIncognitoButton.addEventListener("click", function() {
        showScreen(incognitoScreen);
    });

    // По умолчанию показываем главный экран (container)
    showScreen(mainScreen);
});

