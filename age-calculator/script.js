const calculateButton = document.getElementById('calculate-button');
const years = document.getElementById('years');
const months = document.getElementById('months');
const days = document.getElementById('days');
const totalMonths = document.getElementById('total-months');
const weeks = document.getElementById('weeks');
const remainingDays = document.getElementById('remaining-days');
const totalWeeks = document.getElementById('total-weeks');
const remainingDaysWeeks = document.getElementById('remaining-days-weeks');
const hours = document.getElementById('hours');
const totalDays = document.getElementById('total-days');
const remainingHours = document.getElementById('remaining-hours');
const minutes = document.getElementById('minutes');
const totalHours = document.getElementById('total-hours');
const remainingMinutes = document.getElementById('remaining-minutes');
const seconds = document.getElementById('seconds');
const totalMinutes = document.getElementById('total-minutes');
const remainingSeconds = document.getElementById('remaining-seconds');
const totalSeconds = document.getElementById('total-seconds');
const breaths = document.getElementById('breaths');
const eatingDrinking = document.getElementById('eating-drinking');
const heartbeats = document.getElementById('heartbeats');
const foodEaten = document.getElementById('food-eaten');
const sleepYears = document.getElementById('sleep-years');
const laughs = document.getElementById('laughs');

calculateButton.addEventListener('click', () => {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').selectedIndex) + 1;
    const year = parseInt(document.getElementById('year').value);
    const todayDay = parseInt(document.getElementById('today-day').value);
    const todayMonth = parseInt(document.getElementById('today-month').selectedIndex) + 1;
    const todayYear = parseInt(document.getElementById('today-year').value);

    const birthDate = new Date(year, month - 1, day);
    const todayDate = new Date(todayYear, todayMonth - 1, todayDay);

    const age = calculateAge(birthDate, todayDate);
    const totalMonthsAge = calculateTotalMonths(birthDate, todayDate);
    const totalWeeksAge = calculateTotalWeeks(birthDate, todayDate);
    const totalDaysAge = calculateTotalDays(birthDate, todayDate);
    const totalHoursAge = calculateTotalHours(birthDate, todayDate);
    const totalMinutesAge = calculateTotalMinutes(birthDate, todayDate);
    const totalSecondsAge = calculateTotalSeconds(birthDate, todayDate);

    years.textContent = age.years;
    months.textContent = age.months;
    days.textContent = age.days;
    totalMonths.textContent = totalMonthsAge.totalMonths;
    weeks.textContent = totalMonthsAge.weeks;
    remainingDays.textContent = totalMonthsAge.remainingDays;
    totalWeeks.textContent = totalWeeksAge.totalWeeks;
    remainingDaysWeeks.textContent = totalWeeksAge.remainingDays;
    hours.textContent = totalHoursAge.hours;
    totalDays.textContent = totalDaysAge.totalDays;
    remainingHours.textContent = totalDaysAge.remainingHours;
    minutes.textContent = totalMinutesAge.minutes;
    totalHours.textContent = totalHoursAge.totalHours;
    remainingMinutes.textContent = totalHoursAge.remainingMinutes;
    seconds.textContent = totalSecondsAge.seconds;
    totalMinutes.textContent = totalMinutesAge.totalMinutes;
    remainingSeconds.textContent = totalMinutesAge.remainingSeconds;
    totalSeconds.textContent = totalSecondsAge.totalSeconds;
    breaths.textContent = calculateBreaths(birthDate, todayDate);
    eatingDrinking.textContent = calculateEatingDrinking(birthDate, todayDate);
    heartbeats.textContent = calculateHeartbeats(birthDate, todayDate);
    foodEaten.textContent = calculateFoodEaten(birthDate, todayDate);
    sleepYears.textContent = calculateSleep(birthDate, todayDate);
    laughs.textContent = calculateLaughs(birthDate, todayDate);
});

function calculateAge(birthDate, todayDate) {
    const years = todayDate.getFullYear() - birthDate.getFullYear();
    const months = todayDate.getMonth() - birthDate.getMonth();
    const days = todayDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        const lastDayOfPreviousMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate();
        days += lastDayOfPreviousMonth;
        months--;
    }

    return { years, months, days };
}

function calculateTotalMonths(birthDate, todayDate) {
    const age = calculateAge(birthDate, todayDate);
    const totalMonths = age.years * 12 + age.months;
    const weeks = Math.floor(totalMonths / 4.33);
    const remainingDays = Math.round(totalMonths % 4.33 * 30);

    return { totalMonths, weeks, remainingDays };
}

function calculateTotalWeeks(birthDate, todayDate) {
    const totalMonthsAge = calculateTotalMonths(birthDate, todayDate);
    const totalWeeks = Math.floor(totalMonthsAge.totalMonths * 4.33);
    const remainingDays = Math.round(totalMonthsAge.totalMonths * 30 - totalWeeks * 7);

    return { totalWeeks, remainingDays };
}

function calculateTotalDays(birthDate, todayDate) {
    const age = calculateAge(birthDate, todayDate);
    const totalDays = age.years * 365 + age.months * 30 + age.days;
    const hours = Math.round((todayDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60));

    return { totalDays, hours };
}

function calculateTotalHours(birthDate, todayDate) {
    const totalDaysAge = calculateTotalDays(birthDate, todayDate);
    const totalHours = totalDaysAge.totalDays * 24;
    const minutes = Math.round(totalHours % 24 * 60);

    return { totalHours, minutes };
}

function calculateTotalMinutes(birthDate, todayDate) {
    const totalHoursAge = calculateTotalHours(birthDate, todayDate);
    const totalMinutes = totalHoursAge.totalHours * 60;
    const seconds = Math.round(totalMinutes % 60 * 60);

    return { totalMinutes, seconds };
}

function calculateTotalSeconds(birthDate, todayDate) {
    const totalMinutesAge = calculateTotalMinutes(birthDate, todayDate);
    const totalSeconds = totalMinutesAge.totalMinutes * 60;
    
    return { totalSeconds };
}

function calculateBreaths(birthDate, todayDate) {
    const totalSecondsAge = calculateTotalSeconds(birthDate, todayDate);
    const breaths = Math.round(totalSecondsAge.totalSeconds / 4);
    return breaths;
}

function calculateEatingDrinking(birthDate, todayDate) {
    const totalSecondsAge = calculateTotalSeconds(birthDate, todayDate);
    const eatingDrinking = Math.round(totalSecondsAge.totalSeconds / (1000 * 60 * 60 * 24 * 30 * 14.5));
    return eatingDrinking;
}

function calculateHeartbeats(birthDate, todayDate) {
    const totalSecondsAge = calculateTotalSeconds(birthDate, todayDate);
    const heartbeats = Math.round(totalSecondsAge.totalSeconds / (1000 * 60 * 60 * 24 * 365 * 70));
    return heartbeats;
}

function calculateFoodEaten(birthDate, todayDate) {
    const totalSecondsAge = calculateTotalSeconds(birthDate, todayDate);
    const foodEaten = Math.round(totalSecondsAge.totalSeconds / (1000 * 60 * 60 * 24 * 365 * 19.6));
    return foodEaten;
}

function calculateSleep(birthDate, todayDate) {
    const totalSecondsAge = calculateTotalSeconds(birthDate, todayDate);
    const sleepYears = Math.round(totalSecondsAge.totalSeconds / (1000 * 60 * 60 * 24 * 365 * 9));
    return sleepYears;
}

function calculateLaughs(birthDate, todayDate) {
    const totalSecondsAge = calculateTotalSeconds(birthDate, todayDate);
    const laughs = Math.round(totalSecondsAge.totalSeconds / (1000 * 60 * 60 * 24 * 365 * 100950));
    return laughs;
}

const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', () => {
    const copyText = document.querySelector('.results').innerText;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            // Optional: Show a success message or change the button text
            alert('Copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});

const printButton = document.getElementById('print-button');
printButton.addEventListener('click', () => {
    window.print();
});