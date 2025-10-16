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
