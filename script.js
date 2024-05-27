document.addEventListener('DOMContentLoaded', function() {
    var dirImages = 'img/';  // Путь до папки с картинками

    // Массив данных о Новостях
    var news = [
        { 
            title: 'СТАРТ ПРОДАЖ OMODA И JAECOO В BraginoMotors', 
            excerpt: 'Алексей Безруков', 
            date: '27 мая, 18:30',
            image: '1.webp' 
        },
        { 
            title: 'СНИЖЕНИЕ ЦЕН НА JETTA', 
            excerpt: 'Денис Бухаров', 
            date: '23 мая, 20:55',
            image: '2.webp' 
        },
    ];

    // Массив машин в Карусели
    var gamesCarousel = [
        { 
            title: 'Audi A4', 
            description: 'Превосходная динамика и элегантный дизайн делают Audi A4 идеальным выбором для тех, кто ценит стиль и комфорт.', 
            genre: '190 л.с., белый цвет, 2022 год', 
            price: '2,8 млн', 
            img: '1.jfif'
        },
        { 
            title: "BMW X5", 
            description: 'BMW X5 сочетает в себе мощность, утонченность и передовые технологии, обеспечивая непревзойденный комфорт и безопасность на дороге.', 
            genre: '340 л.с., черный цвет, 2023 год', 
            price: '5,2 млн', 
            img: '2.jfif'
        },
        { 
            title: 'Mercedes-Benz C-Class', 
            description: 'Mercedes-Benz C-Class – это воплощение роскоши и современных технологий, предлагая идеальный баланс между производительностью и элегантностью.', 
            genre: '258 л.с., серебристый цвет, 2022 год', 
            price: '3,4 млн', 
            img: '3.jfif'
        },
        { 
            title: 'Toyota Camry', 
            description: 'Toyota Camry известна своей надежностью и стильным дизайном, предлагая комфортное и безопасное вождение каждый день.', 
            genre: '203 л.с., синий цвет, 2023 год', 
            price: '2,2 млн', 
            img: '4.jfif'
        },
        { 
            title: 'Lexus RX', 
            description: ' Lexus RX - это элегантный кроссовер, сочетающий роскошь с мощной динамикой и передовыми технологиями для незабываемых поездок.', 
            genre: '295 л.с., красный цвет, 2023 год', 
            price: '4,5 млн', 
            img: '5.jfif'
        },
        { 
            title: 'Volkswagen Tiguan', 
            description: 'Volkswagen Tiguan – это современный внедорожник, идеально подходящий как для городской жизни, так и для загородных приключений благодаря своей универсальности и надежности.', 
            genre: '220 л.с., серый цвет, 2023 год', 
            price: '2,7 млн', 
            img: '6.jfif'
        },
        
    ];

    // Массив машин
    var games = [
        { 
            title: 'HYUNDAI SOLARIS', 
            genre: '115 Л.С. ЧЕРНЫЙ 2021', 
            price: '1,5 млн', 
            image: 'solaris.jpg' 
        },
        { 
            title: 'KIA RIO', 
            genre: '123 Л.С. КРАСНЫЙ 2019', 
            price: '1,4 млн', 
            image: 'kia.jpg'
        },
        { 
            title: 'LADA (ВАЗ) VESTA ', 
            genre: '122 Л.С. СЕРЫЙ 2018', 
            price: '1,1 млн', 
            image: 'lada.jpg'
        },
        { 
            title: 'Lexus IS', 
            genre: '208 Л.С. СИНИЙ 2014', 
            price: '2,4 млн', 
            image: 'lexus.jpg' 
        },
        { 
            title: 'BMW X5', 
            genre: '400 Л.С. СЕРЫЙ 2022', 
            price: '11,5 млн', 
            image: 'bmw.jpg' 
        },
        { 
            title: 'Geely Emgrand X7', 
            genre: '139 Л.С. БЕЖЕВЫЙ 2016', 
            price: '1,5 млн', 
            image: 'jeely.jpg' 
        },
        { 
            title: "Mercedes G-Класс", 
            genre: '296 Л.С ЧЕРНЫЙ 2003', 
            price: '3,5 млн', 
            image: 'gelik.jpg' 
        }
    ];

    // Колонка с Новостями
    var newsColumn = document.querySelector('.news-column');

    // Переменные Карусели
    var gameCard = document.getElementById('game-card');
    var currentIndex = 0;
    var intervalId;

    // Колонка с машинами
    var gamesListColumn = document.querySelector('.games-list-column');

    // --- Новости ---
    // Создать HTML-объект Новости 
    function createNewsHTML(newsItem) {
        var newsHTML = '<div class="news-item">';
        if (newsItem.image) {
            newsHTML += '<img src="' + dirImages + 'news/' + newsItem.image + '" alt="' + newsItem.title + '">';
        }
        newsHTML += '<h3 class="news-title">' + newsItem.title + '</h3>';
        newsHTML += '<p class="news-excerpt">' + newsItem.excerpt + '</p>';
        newsHTML += '<p class="news-date">' + newsItem.date + '</p>';
        newsHTML += '</div>';
        return newsHTML;
    }

    // Заполнить колонку Новостями
    function fillNewsColumn() {
        var newsHTML = '';
        news.forEach(function(newsItem) {
            newsHTML += createNewsHTML(newsItem);
        });
        newsColumn.insertAdjacentHTML('beforeend', newsHTML);
    }

    // --- Карусель ---
    // Заполнить карточки (слайды) в Карусели 
    function updateCard() {
        var game = gamesCarousel[currentIndex];
        gameCard.style.animation = 'none';
        setTimeout(function() {
            gameCard.innerHTML = '<img class="game-img" src="' + dirImages + 'carsCarousel/' + game.img + '"><h2 class="game-title">' + game.title + '</h2><p>' + game.description + '</p><p>' + game.genre + '</p><p class="game-price">' + game.price + ' ₽' +'</p>';
            gameCard.style.animation = 'slideIn 0.5s ease';
        }, 50);

        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 5000);
    }

    // Перелистывание слайдов с машинами
    function nextSlide() {
        currentIndex = (currentIndex < gamesCarousel.length - 1) ? currentIndex + 1 : 0;
        updateCard();
    }

    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : gamesCarousel.length - 1;
        updateCard();
    }

    // Обработка нажатия кнопки "Назад"
    document.getElementById('prev').addEventListener('click', function() {
        prevSlide();
    });

    // Обработка нажатия кнопки "Вперед"
    document.getElementById('next').addEventListener('click', function() {
        nextSlide();
    });

    // --- Машины ---
    // Создать HTML-объект Машины
    function createGameHTML(gameItem) {
        var gameHTML = '<div class="game-item">';
        gameHTML += '<div class="game-image"><img src="' + dirImages + 'cars/' + gameItem.image + '" alt="' + gameItem.title + '"></div>';
        gameHTML += '<div class="game-info">';
        gameHTML += '<h3 class="game-title">' + gameItem.title + '</h3>';
        gameHTML += '<p class="game-genre">' + gameItem.genre + '</p>';
        gameHTML += '</div>';
        gameHTML += '<div class="game-price">' + gameItem.price + ' ₽' + '</div>';
        gameHTML += '</div>';
        return gameHTML;
    }

    // Заполнить колонку Машинами
    function fillGamesListColumn() {
        var gamesHTML = '';
        games.forEach(function(gameItem) {
            gamesHTML += createGameHTML(gameItem);
        });
        gamesListColumn.insertAdjacentHTML('beforeend', gamesHTML);
    }

    // Настройка автоперелистывания Карусели
    intervalId = setInterval(nextSlide, 5000);

    // Заполнение страницы контентом
    fillNewsColumn();
    updateCard();
    fillGamesListColumn();
});
