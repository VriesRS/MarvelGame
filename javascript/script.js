var elCapHealth = 250;
var elWorthyCapHealth = 300;
var elThanosHealth = 400;
var Captain = document.querySelector('.Cap')
var Thanos = document.querySelector('.Thanos')
var elThrow = document.querySelector('#shieldthrow');
var elRush = document.querySelector('#rush');
var elPunch = document.querySelector('#punch');
var barCap = document.querySelector('#Caphp');
var barThanos = document.querySelector('#Thanoshp');
var CapTheme = document.querySelector('#CapTheme')
var ShangChi = document.querySelector('#Shang-chi')
var Portals = document.querySelector('#Portals')
var button = document.querySelector('.Music')


/*Knop om de muziek tijdens de battle te starten hierbij wordt er uit 1 van de 3 random gekozen */

button.addEventListener('click', () => {
    var BattleMusic = [Portals, ShangChi, CapTheme];
    BattleMusic[Math.floor(Math.random() * BattleMusic.length)].play();

})

/* Attacks van Captain America waar automatisch damage voor berekend wordt */

function Shieldthrow() {
    damage = Math.floor(Math.random() * 40) + 10;
    console.log(elThanosHealth -= damage);
    HealthCheck();
    document.getElementById('Thanoshp')
    barThanos.value = elThanosHealth;
}


function Rush() {
    var damage = Math.floor(Math.random() * 50) + 10;
    console.log(elThanosHealth -= damage);
    HealthCheck();
    document.getElementById('Thanoshp');
    barThanos.value = elThanosHealth;
}

function Punch() {
    var damage = Math.floor(Math.random() * 60) + 10;
    console.log(elThanosHealth -= damage);
    HealthCheck();
    document.getElementById('Thanoshp');
    barThanos.value = elThanosHealth;
}

/* De HealthCheck is er om de hp van zowel Thanos als Captain America in de gaten te houden om op basis hiervan
een aanval te doen of om in de gaten te houden of er iemand gewonnen heeft */

function HealthCheck() {
    if (elThanosHealth < 0) {
        window.location.replace("win.html");

    } else if (elThanosHealth < 320) {
        setTimeout(infinitystones, 700);

    } else {}
}

function CapHealthCheck() {
    if (elCapHealth || elWorthyCapHealth < 0) {
        window.location.replace("loser.html");
    } else {}
}

/* De aanval van Thanos die na een Timeout pas start */

function infinitystones() {
    var damage = Math.floor(Math.random() * 30) + 30;
    console.log(elCapHealth -= damage);
    document.getElementById('Caphp');
    barCap.value = elCapHealth;
    Worthy();
}

/* De functie die in de gaten houdt voordat CaptainAmerica dood gaat hij nog naar zijn Worthy stand kan gaan */

function Worthy() {
    if (elCapHealth < 50) {
        Captain.src = "images/mjolnir-cap.png";
        elPunch.src = "images/thunderslam.png";
        elRush.src = "images/mjolnircharge.png";
        elCapHealth = elWorthyCapHealth;
    } else {}
}

/* De EventListeners van de attacks van Captain America */

elThrow.addEventListener('click', Shieldthrow);

elRush.addEventListener('click', Rush);

elPunch.addEventListener('click', Punch);