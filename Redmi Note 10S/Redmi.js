const time_value = document.querySelector("#time")
const date_value = document.querySelector("#date_details")

function UpdateTime() {
    let time = new Date()
    let hours = time.getHours().toString().padStart(2, '0')
    let minutes = time.getMinutes().toString().padStart(2, '0')
    let date = time.getDate()
    let month = time.getMonth()
    let weekday = time.getDay()
    let weekdays = [
        'Вс',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб'
    ];
    let weekday_names = weekdays[weekday]
    let months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];
    let month_names = months[month]

    time_value.innerHTML = `${hours}:${minutes}`;
    date_value.innerHTML = `${weekday_names}, ${date} ${month_names}`
}
setInterval(UpdateTime, 1000)

document.querySelector("#yandex").addEventListener('click', function() {
    window.open("https://ya.ru", "_blank")})
document.querySelector("#alice").addEventListener('click', function() {
    window.open("https://alice.yandex.ru/?utm_source=yandex&utm_campaign=serp_header_oknyx&utm_medium=interface#back-to-school-promo", "_blank")})

let n = 0
document.querySelector("#previous").addEventListener("click", function() {
    if (n === 1) n = 18
    else n = n - 1
    Track_choice()
})
document.querySelector("#next").addEventListener("click", function() {
    if (n === 18) n = 1
    else n = n + 1
    Track_choice()
}) 

const avatar_icon = document.querySelector("#avatar_icon")
const track_title = document.querySelector("#track_title")
const track_author = document.querySelector("#track_author")
function Track_choice() { 
    document.querySelector("#pause_off").style.display = "none";
    document.querySelector("#pause_on").style.display = "block";
    switch (n) {
        case 1:
            avatar_icon.src = ""
            track_title.innerHTML = "Отпускай"
            track_author.innerHTML = "Три дня дождя"
            break;            
        case 2:
            avatar_icon.src = ""
            track_title.innerHTML = "Прощание"
            track_author.innerHTML = "Три дня дождя, MONA"
            break;            
        case 3:
            avatar_icon.src = ""
            track_title.innerHTML = "Демоны"
            track_author.innerHTML = "Три дня дождя"
            break;
        case 4:
            avatar_icon.src = ""
            track_title.innerHTML = "Негативное мышление"
            track_author.innerHTML = "Три дня дождя, pyrokinesis"
            break;
        case 5:
            avatar_icon.src = ""
            track_title.innerHTML = "В кого ты влюблена"
            track_author.innerHTML = "Три дня дождя"
            break;
        case 6:
            avatar_icon.src = ""
            track_title.innerHTML = "ЧСВ"
            track_author.innerHTML = "Lida, Серега Пират"
            break;
        case 7:
            avatar_icon.src = ""
            track_title.innerHTML = "Money Flow"
            track_author.innerHTML = "Baby Cute"
            break;
        case 8:
            avatar_icon.src = ""
            track_title.innerHTML = "AIST"
            track_author.innerHTML = "FRIENDLY THUG 52 NGG"
            break;
        case 9:
            avatar_icon.src = ""
            track_title.innerHTML = "крестики-нолики"
            track_author.innerHTML = "zhanulka, КАКАЯ РАЗНИЦА"
            break;
        case 10:
            avatar_icon.src = ""
            track_title.innerHTML = "ты похож на кота"
            track_author.innerHTML = "zhanulka"
            break;
        case 11:
            avatar_icon.src = ""
            track_title.innerHTML = "Биг Сити Лайф"
            track_author.innerHTML = "Whole Lotta Swag"
            break;
        case 12:
            avatar_icon.src = ""
            track_title.innerHTML = "Формальность"
            track_author.innerHTML = "Whole Lotta Swag"
            break;
        case 13:
            avatar_icon.src = ""
            track_title.innerHTML = "Тесно"
            track_author.innerHTML = "Aarne BUSHIDO ZHO, ANIKV"
            break;
        case 14:
            avatar_icon.src = ""
            track_title.innerHTML = "Turbo (Majestic)"
            track_author.innerHTML = "Big Baby Tape"
            break;
        case 15:
            avatar_icon.src = ""
            track_title.innerHTML = "Мальчик на девятке"
            track_author.innerHTML = "DEAD BLONDE"
            break;
        case 16:
            avatar_icon.src = ""
            track_title.innerHTML = "+7(952)812"
            track_author.innerHTML = "ALBLAK 52"
            break;
        case 17:
            avatar_icon.src = ""
            track_title.innerHTML = "МАЛИНОВАЯ ЛАДА"
            track_author.innerHTML = "GAYAZOV$ BROTHER$"
            break;
        case 18:
            avatar_icon.src = ""
            track_title.innerHTML = "Пошла жара"
            track_author.innerHTML = "GAYAZOV$ BROTHER$, Filatov &..."
            break;
        default:
            avatar_icon.src = ""
            track_title.innerHTML = ""
            track_author.innerHTML = "";  
    } 
}
