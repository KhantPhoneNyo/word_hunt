
const sounds = {
    bg: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'),
    success: new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3'),
    fail: new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3'),
    isMuted: localStorage.getItem('ws_pro_muted') === 'true'
};

sounds.bg.loop = true;
sounds.bg.volume = 0.2;



const DB = {
    'EN': [
        ["THROAT", "GALAXY", "SILVER", "COMMAND", "PLANET", "FOREST"], 
        ["DESERT", "VOLCANO", "ISLAND", "CANYON", "MOUNTAIN", "OCEAN"], 
        ["TIGER", "RABBIT", "TURTLE", "MONKEY", "PANDA", "LION"],       
        ["APPLE", "BANANA", "CHERRY", "ORANGE", "GRAPES", "MANGO"],    
        ["GUITAR", "PIANO", "VIOLIN", "DRUMS", "FLUTE", "CELLO"],      
        ["SOCCER", "TENNIS", "HOCKEY", "CHESS", "RUGBY", "BOXING"],    
        ["DOCTOR", "ARTIST", "DRIVER", "COOK", "POLICE", "PILOT"],     
        ["YELLOW", "PURPLE", "ORANGE", "SILVER", "BRONZE", "WHITE"],   
        ["WINTER", "SPRING", "SUMMER", "AUTUMN", "CLOUDY", "BREEZE"],  
        ["COFFEE", "BURGER", "PIZZA", "PASTA", "SALAD", "CHEESE"],     
        ["LONDON", "PARIS", "BERLIN", "TOKYO", "SYDNEY", "MOSCOW"],    
        ["HAMMER", "WRENCH", "PLIERS", "SHOVEL", "LADDER", "SCREWS"],  
        ["CHICKEN", "TURKEY", "PIGEON", "EAGLE", "PARROT", "FALCON"],  
        ["MONDAY", "FRIDAY", "SUNDAY", "AUGUST", "MARCH", "OCTOBER"],  
        ["KITCHEN", "BEDROOM", "GARDEN", "GARAGE", "WINDOW", "STAIRS"],
        ["BOTTLE", "GLASS", "PLATE", "SPOON", "KNIFE", "NAPKIN"],      
        ["CAMERA", "LAPTOP", "MOBILE", "TABLET", "DRONE", "SCREEN"],   
        ["JACKET", "SHORTS", "GLOVES", "SHIRT", "SOCKS", "DRESS"],     
        ["SUBWAY", "ROCKET", "TRUCK", "BICYCLE", "SCOOTER", "PLANE"],  
        ["WISDOM", "ENERGY", "BRAVERY", "HONESTY", "PATIENT", "SILENT"] 
    ],
    'FR': [
        ["GORGE", "GALAXIE", "ARGENT", "ORDRE", "PLANETE", "FORET"],
        ["DESERT", "VOLCAN", "ILE", "CANYON", "MONTAGNE", "OCEAN"],
        ["TIGRE", "LAPIN", "TORTUE", "SINGE", "PANDA", "LION"],
        ["POMME", "BANANE", "CERISE", "ORANGE", "RAISIN", "MANGUE"],
        ["GUITARE", "PIANO", "VIOLON", "TAMBOUR", "FLUTE", "CELLO"],
        ["FOOT", "TENNIS", "HOCKEY", "ECHECS", "RUGBY", "BOXE"],
        ["DOCTEUR", "ARTISTE", "PILOTE", "CHEF", "POLICE", "PILOTE"],
        ["JAUNE", "VIOLET", "ORANGE", "ARGENT", "BRONZE", "BLANC"],
        ["HIVER", "PRINTEM", "ETE", "AUTOMNE", "NUAGE", "BRISE"],
        ["CAFE", "BURGER", "PIZZA", "PATES", "SALADE", "FROMAGE"],
        ["LONDRES", "PARIS", "BERLIN", "TOKYO", "SYDNEY", "MOSCOU"],
        ["MARTEAU", "CLEF", "PINCE", "PELLE", "ECHELLE", "VIS"],
        ["POULET", "DINDE", "PIGEON", "AIGLE", "PERROQU", "FAUCON"],
        ["LUNDI", "VENDRED", "DIMANCH", "AOUT", "MARS", "OCTOBRE"],
        ["CUISINE", "CHAMBRE", "JARDIN", "GARAGE", "FENETRE", "ESCALIE"],
        ["BOUTEIL", "VERRE", "ASSIETT", "CUILLER", "COUTEAU", "SERVIET"],
        ["CAMERA", "LAPTOP", "MOBILE", "TABLETT", "DRONE", "ECRAN"],
        ["VESTE", "SHORT", "GANTS", "CHEMISE", "CHAUSS", "ROBE"],
        ["METRO", "FUSEE", "CAMION", "VELO", "SCOOTER", "AVION"],
        ["SAGESSE", "ENERGIE", "COURAGE", "DROITURE", "PATIENT", "SILENCE"]
    ],
    'ES': [
        ["GARGANTA", "GALAXIA", "PLATA", "MANDO", "PLANETA", "BOSQUE"],
        ["DESIERTO", "VOLCAN", "ISLA", "CAÑON", "MONTAÑA", "OCEANO"],
        ["TIGRE", "CONEJO", "TORTUGA", "MONO", "PANDA", "LEON"],
        ["MANZANA", "PLATANO", "CEREZA", "NARANJA", "UVAS", "MANGO"],
        ["GUITARRA", "PIANO", "VIOLIN", "TAMBOR", "FLAUTA", "CHELO"],
        ["FUTBOL", "TENNIS", "HOCKEY", "AJEDREZ", "RUGBY", "BOXEO"],
        ["DOCTOR", "ARTISTA", "CHOFER", "COCINA", "POLICIA", "PILOTO"],
        ["AMARILLO", "MORADO", "NARANJA", "PLATA", "BRONCE", "BLANCO"],
        ["INVIERNO", "PRIMAVE", "VERANO", "OTOÑO", "NUBLADO", "BRISA"],
        ["CAFE", "BURGER", "PIZZA", "PASTA", "ENSALAD", "QUESO"],
        ["LONDRES", "PARIS", "BERLIN", "TOKIO", "SYDNEY", "MOSCU"],
        ["MARTILLO", "LLAVE", "ALICATE", "PALA", "ESCALER", "TORNILL"],
        ["POLLO", "PAVO", "PALOMA", "AGUILA", "LORO", "HALCON"],
        ["LUNES", "VIERNES", "DOMINGO", "AGOSTO", "MARZO", "OCTUBRE"],
        ["COCINA", "CUARTO", "JARDIN", "GARAJE", "VENTANA", "ESCALA"],
        ["BOTELLA", "VASO", "PLATO", "CUCHARA", "CUCHILL", "TOALLA"],
        ["CAMARA", "LAPTOP", "MOVIL", "TABLETA", "DRON", "PANTALL"],
        ["CHAQUET", "SHORTS", "GUANTES", "CAMISA", "CALCETI", "VESTIDO"],
        ["METRO", "COHETE", "CAMION", "BICI", "SCOOTER", "AVION"],
        ["SABIDUR", "ENERGIA", "VALOR", "HONESTO", "PACIENT", "SILENC"]
    ],
    'DE': [
        ["HALS", "GALAXIE", "SILBER", "BEFEHL", "PLANET", "WALD"],
        ["WUSTE", "VULKAN", "INSEL", "CANYON", "GEBIRGE", "OZEAN"],
        ["TIGER", "HASE", "SCHILD", "AFFE", "PANDA", "LOWE"],
        ["APFEL", "BANANE", "KIRSCHE", "ORANGE", "TRAUBE", "MANGO"],
        ["GITARRE", "KLAVIER", "GEIGE", "TROMMEL", "FLOTE", "CELLO"],
        ["FUSSBALL", "TENNIS", "HOCKEY", "SCHACH", "RUGBY", "BOXEN"],
        ["DOKTOR", "KUNSTLE", "FAHRER", "KOCH", "POLIZEI", "PILOT"],
        ["GELB", "LILA", "ORANGE", "SILBER", "BRONZE", "WEISS"],
        ["WINTER", "FRUHLIN", "SOMMER", "HERBST", "WOLKIG", "BRISE"],
        ["KAFFEE", "BURGER", "PIZZA", "NUDELN", "SALAT", "KASE"],
        ["LONDON", "PARIS", "BERLIN", "TOKIO", "SYDNEY", "MOSKAU"],
        ["HAMMER", "ZANGE", "SCHAUF", "LEITER", "SCHRAUB", "BOHRER"],
        ["HUHN", "PUTE", "TAUBE", "ADLER", "PAPAGEI", "FALKE"],
        ["MONTAG", "FREITAG", "SONNTAG", "AUGUST", "MARZ", "OKTOBER"],
        ["KUCHE", "ZIMMER", "GARTEN", "GARAGE", "FENSTER", "TREPPE"],
        ["FLASCHE", "GLAS", "TELLER", "LOFFEL", "MESSER", "SERVIET"],
        ["KAMERA", "LAPTOP", "HANDY", "TABLET", "DROHNE", "SCHIRM"],
        ["JACKE", "SHORTS", "HANDSCH", "HEMD", "SOCKEN", "KLEID"],
        ["UBAHN", "RAKETE", "LASTWAG", "FAHRRAD", "ROLLER", "FLUGZUG"],
        ["WEISHEI", "ENERGIE", "MUT", "EHRE", "GEDULD", "STILLE"]
    ],
    'IT': [
        ["GOLA", "GALASSIA", "ARGENTO", "COMANDO", "PIANETA", "FORESTA"],
        ["DESERTO", "VULCANO", "ISOLA", "CANYON", "MONTAGNA", "OCEANO"],
        ["TIGRE", "CONIGLIO", "TARTARU", "SCIMMIA", "PANDA", "LEONE"],
        ["MELA", "BANANA", "CILIEG", "ARANCIA", "UVA", "MANGO"],
        ["CHITARRA", "PIANO", "VIOLINO", "TAMBURO", "FLAUTO", "CELLO"],
        ["CALCIO", "TENNIS", "HOCKEY", "SCACCHI", "RUGBY", "BOXE"],
        ["DOTTORE", "ARTISTA", "AUTISTA", "CUOCO", "POLIZIA", "PILOTA"],
        ["GIALLO", "VIOLA", "ARANCIO", "ARGENTO", "BRONZO", "BIANCO"],
        ["INVERNO", "PRIMAVE", "ESTATE", "AUTUNNO", "NUVOLA", "BREZZA"],
        ["CAFFE", "BURGER", "PIZZA", "PASTA", "INSALAT", "FORMAGG"],
        ["LONDRA", "PARIGI", "BERLINO", "TOKYO", "SYDNEY", "MOSCA"],
        ["MARTELL", "CHIAVE", "PINZA", "PALA", "SCALA", "VITI"],
        ["POLLO", "TACCHIN", "PICCION", "AQUILA", "PAPPAG", "FALCO"],
        ["LUNEDI", "VENERDI", "DOMENIC", "AGOSTO", "MARZO", "OTTOBRE"],
        ["CUCINA", "CAMERA", "GIARDIN", "GARAGE", "FINESTR", "SCALA"],
        ["BOTTIGL", "BICCHIE", "PIATTO", "CUCCHIA", "COLTELL", "SALVIET"],
        ["CAMERA", "LAPTOP", "MOBILE", "TABLET", "DRONE", "SCHERMO"],
        ["GIACCA", "SHORTS", "GUANTI", "CAMICIA", "CALZE", "VESTITO"],
        ["METRO", "RAZZO", "CAMION", "BICI", "SCOOTER", "AEREO"],
        ["SAGGEZ", "ENERGIA", "CORAGGI", "ONESTA", "PAZIENT", "SILENZ"]
    ],
    'PT': [
        ["GARGANTA", "GALAXIA", "PRATA", "COMANDO", "PLANETA", "FLORESTA"],
        ["DESERTO", "VULCAO", "ILHA", "CANYON", "MONTANHA", "OCEANO"],
        ["TIGRE", "COELHO", "TARTARU", "MACACO", "PANDA", "LEAO"],
        ["MACA", "BANANA", "CEREJA", "LARANJA", "UVA", "MANGO"],
        ["GUITARR", "PIANO", "VIOLINO", "TAMBOR", "FLAUTA", "CELLO"],
        ["FUTEBOL", "TENIS", "HOQUEI", "XADREZ", "RUGBY", "BOXE"],
        ["DOUTOR", "ARTISTA", "DRIVER", "COZINHA", "POLICIA", "PILOTO"],
        ["AMARELO", "ROXO", "LARANJA", "PRATA", "BRONZE", "BRANCO"],
        ["INVERNO", "PRIMAVE", "VERAO", "OUTONO", "NUVEM", "BRISA"],
        ["CAFE", "BURGER", "PIZZA", "MASSA", "SALADA", "QUEIJO"],
        ["LONDRES", "PARIS", "BERLIM", "TOQUIO", "SYDNEY", "MOSCOU"],
        ["MARTELO", "CHAVE", "ALICATE", "PÁ", "ESCADA", "PARAFUS"],
        ["FRANGO", "PERU", "POMBO", "AGUIA", "PAPAGAI", "FALCAO"],
        ["SEGUNDA", "SEXTA", "DOMINGO", "AGOSTO", "MARCO", "OUTUBRO"],
        ["COZINHA", "QUARTO", "JARDIM", "GARAGEM", "JANELA", "ESCADA"],
        ["GARRAFA", "COPO", "PRATO", "COLHER", "FACA", "GUARDAN"],
        ["CAMERA", "LAPTOP", "MOVEL", "TABLETE", "DRONE", "TELA"],
        ["JAQUETA", "SHORTS", "LUVAS", "CAMISA", "MEIAS", "VESTIDO"],
        ["METRO", "FOGUETE", "CAMIHAO", "BICI", "SCOOTER", "AVIAO"],
        ["SABEDOR", "ENERGIA", "VALOR", "HONESTO", "PACIENT", "SILENC"]
    ]
};

let currentLang = 'EN';
let unlocked = parseInt(localStorage.getItem('ws_pro_lvl')) || 1;
let activeLvl = 1;
let isDown = false;
let startPos = null;

let timeLeft = 60;
const DEFAULT_TIME = 60;
let timerId = null;

function toggleMute() {
    sounds.isMuted = !sounds.isMuted;
    localStorage.setItem('ws_pro_muted', sounds.isMuted);
    updateMuteUI();

    if (sounds.isMuted) {
        sounds.bg.pause();
    } else {
        if (document.getElementById('page-game').classList.contains('active')) {
            sounds.bg.play().catch(e => console.log("Audio blocked"));
        }
    }
}

function updateMuteUI() {
    const btn = document.getElementById('mute-btn');
    if (btn) {
        btn.innerText = sounds.isMuted ? '🔇' : '🔊';
        btn.style.opacity = sounds.isMuted ? '0.5' : '1';
    }
}

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.overlay').forEach(o => o.style.display = 'none');
    document.getElementById(id).classList.add('active');
    if (id === 'page-levels') renderLevels();
    if (id !== 'page-game') stopTimer();
}

function selectLang(lang, el) {
    currentLang = lang;
    document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

function renderLevels() {
    const list = document.getElementById('level-list');
    list.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        const btn = document.createElement('div');
        const isLocked = i > unlocked;
        btn.className = `level-btn ${isLocked ? 'locked' : ''}`;
        btn.innerHTML = isLocked ? '🔒' : i;
        if (!isLocked) btn.onclick = () => launch(i);
        list.appendChild(btn);
    }
}

function formatTime(s) {
    const mins = Math.floor(s / 60).toString().padStart(2, '0');
    const secs = (s % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

function launch(lvl) {
    activeLvl = lvl;
    timeLeft = DEFAULT_TIME;
    resetTimerUI();
    updateMuteUI();

    document.getElementById('lvl-num').innerText = lvl.toString().padStart(2, '0');
    showPage('page-game');
    setupGrid();
    startTimer();

    if (!sounds.isMuted) {
        sounds.bg.play().catch(e => console.log("Autoplay blocked music"));
    }
}

function startTimer() {
    stopTimer();
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = formatTime(timeLeft);

        if (timeLeft <= 10) {
            document.getElementById('timer').style.color = 'var(--danger)';
            document.getElementById('timer-icon').style.color = 'var(--danger)';
        }

        if (timeLeft <= 0) {
            stopTimer();
            if (!sounds.isMuted) sounds.fail.play();
            document.getElementById('modal-fail').style.display = 'flex';
        }
    }, 1000);
}

function resetTimerUI() {
    const timerText = document.getElementById('timer');
    const timerIcon = document.getElementById('timer-icon');
    timerText.innerText = formatTime(timeLeft);
    timerText.style.color = 'white';
    timerIcon.style.color = 'var(--accent)';
}

function stopTimer() { clearInterval(timerId); timerId = null; }
function pauseGame() { stopTimer(); document.getElementById('modal-pause').style.display = 'flex'; }
function resumeGame() { document.getElementById('modal-pause').style.display = 'none'; startTimer(); }

function setupGrid() {
    const size = 12;
    const grid = Array(size).fill().map(() => Array(size).fill(''));
    const pool = DB[currentLang] || DB['EN'];
    const words = pool[(activeLvl - 1) % pool.length];

    words.forEach(word => {
        let placed = false; let attempts = 0;
        while (!placed && attempts < 100) {
            const dir = Math.floor(Math.random() * 3);
            const r = Math.floor(Math.random() * size), c = Math.floor(Math.random() * size);
            if (checkFit(grid, word, r, c, dir, size)) {
                for (let i = 0; i < word.length; i++) {
                    const rr = r + (dir === 1 || dir === 2 ? i : 0);
                    const cc = c + (dir === 0 || dir === 2 ? i : 0);
                    grid[rr][cc] = word[i];
                }
                placed = true;
            }
            attempts++;
        }
    });

    const az = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const gridEl = document.getElementById('grid');
    gridEl.innerHTML = "";
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (!grid[r][c]) grid[r][c] = az[Math.floor(Math.random() * 26)];
            const el = document.createElement('div');
            el.className = 'cell';
            el.innerText = grid[r][c];
            el.dataset.r = r; el.dataset.c = c;

            el.onmousedown = (e) => { e.preventDefault(); startSelection(r, c); };
            el.onmouseenter = () => { if (isDown) handleSelection(r, c); };
            el.ontouchstart = (e) => { e.preventDefault(); startSelection(r, c); };
            gridEl.appendChild(el);
        }
    }

    window.onmouseup = () => { if (isDown) finalizeSelection(words); };
    window.ontouchend = () => { if (isDown) finalizeSelection(words); };

    document.getElementById('word-list').innerHTML = words.map(w => `<span id="w-${w}" class="w-item">${w}</span>`).join('');
}

function checkFit(grid, word, r, c, dir, size) {
    if (dir === 0 && c + word.length > size) return false;
    if (dir === 1 && r + word.length > size) return false;
    if (dir === 2 && (r + word.length > size || c + word.length > size)) return false;
    for (let i = 0; i < word.length; i++) {
        const rr = r + (dir === 1 || dir === 2 ? i : 0);
        const cc = c + (dir === 0 || dir === 2 ? i : 0);
        if (grid[rr][cc] !== '' && grid[rr][cc] !== word[i]) return false;
    }
    return true;
}

function startSelection(r, c) { isDown = true; startPos = { r, c }; handleSelection(r, c); }

function handleSelection(r, c) {
    document.querySelectorAll('.cell.selected').forEach(el => el.classList.remove('selected'));
    const dr = r - startPos.r, dc = c - startPos.c;
    let steps = 0;
    if (r === startPos.r) steps = Math.abs(dc);
    else if (c === startPos.c) steps = Math.abs(dr);
    else if (Math.abs(dr) === Math.abs(dc)) steps = Math.abs(dr);
    else return;

    const unitR = dr === 0 ? 0 : dr / Math.abs(dr);
    const unitC = dc === 0 ? 0 : dc / Math.abs(dc);

    for (let i = 0; i <= steps; i++) {
        const target = document.querySelector(`[data-r="${startPos.r + i * unitR}"][data-c="${startPos.c + i * unitC}"]`);
        if (target) target.classList.add('selected');
    }
}

function finalizeSelection(words) {
    isDown = false;
    const selCells = document.querySelectorAll('.cell.selected');
    const foundText = Array.from(selCells).map(el => el.innerText).join('');
    const reversedText = foundText.split('').reverse().join('');
    const match = words.find(w => w === foundText || w === reversedText);

    if (match) {
        if (!sounds.isMuted) {
            sounds.success.currentTime = 0;
            sounds.success.play();
        }

        selCells.forEach(el => { el.classList.remove('selected'); el.classList.add('found'); });
        const badge = document.getElementById(`w-${match}`);
        if (badge) badge.classList.add('done');

        if (document.querySelectorAll('.w-item.done').length === words.length) {
            stopTimer();

            const timeElapsed = DEFAULT_TIME - timeLeft;
            let stars = "⭐";
            let score = 300;

            if (timeElapsed <= 20) { stars = "⭐⭐⭐"; score = 1000; }
            else if (timeElapsed <= 40) { stars = "⭐⭐"; score = 600; }
            else { stars = "⭐"; score = 300; }

            setTimeout(() => {
                document.getElementById('m-lvl').innerText = activeLvl;
                const winModal = document.querySelector('#modal-win .modal-content');
                const existingResult = winModal.querySelector('.score-display');
                if (existingResult) existingResult.remove();

                const resultDiv = document.createElement('div');
                resultDiv.className = 'score-display';
                resultDiv.innerHTML = `
                    <div style="font-size: 2.5rem; margin: 10px 0; color: #facc15;">${stars}</div>
                    <div style="font-weight: 800; color: var(--accent); margin-bottom: 20px; font-size: 1.2rem;">SCORE: ${score}</div>
                `;

                winModal.insertBefore(resultDiv, winModal.querySelector('button'));
                document.getElementById('modal-win').style.display = 'flex';

                if (activeLvl === unlocked) {
                    unlocked++;
                    localStorage.setItem('ws_pro_lvl', unlocked);
                }
            }, 500);
        }
    } else {
        selCells.forEach(el => el.classList.remove('selected'));
    }
}

function nextLevel() {
    if (activeLvl < 20) {
        launch(activeLvl + 1);
    } else {
        showPage('page-levels');
    }
}


function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.overlay').forEach(o => o.style.display = 'none');
    document.getElementById(id).classList.add('active');

    if (id === 'page-levels') renderLevels();

    if (id !== 'page-game') {
        stopTimer();
        sounds.bg.pause();
        sounds.bg.currentTime = 0;
    }
}

function launch(lvl) {
    activeLvl = lvl;
    timeLeft = DEFAULT_TIME;
    resetTimerUI();
    updateMuteUI();

    document.getElementById('lvl-num').innerText = lvl.toString().padStart(2, '0');
    showPage('page-game');
    setupGrid();
    startTimer();

    if (!sounds.isMuted) {
        sounds.bg.currentTime = 0;
        sounds.bg.play().catch(e => console.log("Audio blocked"));
    }
}

function useHint() {
    const unfoundWords = Array.from(document.querySelectorAll('.w-item:not(.done)'));
    if (unfoundWords.length === 0) return;

    const targetLetter = unfoundWords[0].innerText[0];
    const cells = document.querySelectorAll('.cell');
    let foundAny = false;

    cells.forEach(cell => {
        if (cell.innerText === targetLetter && !cell.classList.contains('found')) {
            cell.style.backgroundColor = "var(--accent)";
            cell.style.color = "white";

            setTimeout(() => {
                cell.style.backgroundColor = "";
                cell.style.color = "";
            }, 2000);
            foundAny = true;
        }
    });

    if (foundAny) {
        timeLeft = Math.max(0, timeLeft - 5);
        const hintBtn = document.getElementById('hint-btn');
        if (hintBtn) {
            hintBtn.disabled = true;
            hintBtn.style.opacity = "0.5";
            setTimeout(() => {
                hintBtn.disabled = false;
                hintBtn.style.opacity = "1";
            }, 3000);
        }
    }
}

function handleWin() {
    const defaultTime = difficultySettings[currentDifficulty].time;
    const timeElapsed = defaultTime - timeLeft;
    let stars = "⭐", score = 300;

    if (timeElapsed <= 20) { stars = "⭐⭐⭐"; score = 1000; }
    else if (timeElapsed <= 40) { stars = "⭐⭐"; score = 600; }

    setTimeout(() => {
        document.getElementById('m-lvl').innerText = activeLvl;

        const winModal = document.querySelector('#modal-win .modal-content');
        const existingResult = winModal.querySelector('.score-display');
        if (existingResult) existingResult.remove();

        const resultDiv = document.createElement('div');
        resultDiv.className = 'score-display';
        resultDiv.innerHTML = `
            <div id="m-stars" style="font-size: 2.5rem; margin: 10px 0; color: #facc15;">${stars}</div>
            <div style="font-weight: 800; color: var(--accent); margin-bottom: 20px; font-size: 1.2rem;">SCORE: ${score}</div>
        `;

        winModal.insertBefore(resultDiv, winModal.querySelector('button'));
        document.getElementById('modal-win').style.display = 'flex';

        if (activeLvl === unlocked) {
            unlocked++;
            localStorage.setItem('ws_pro_lvl', unlocked);
        }
    }, 500);
}

const difficultySettings = {
    'easy': { size: 9, time: 120, label: "EASY" },
    'medium': { size: 10, time: 90, label: "MEDIUM" },
    'hard': { size: 12, time: 60, label: "HARD" }
};

let currentDifficulty = 'medium';

function setDifficulty(diff) {
    currentDifficulty = diff;
    showPage('page-levels');
}

function launch(lvl) {
    activeLvl = lvl;
    timeLeft = difficultySettings[currentDifficulty].time;

    resetTimerUI();
    updateMuteUI();

    document.getElementById('lvl-num').innerText = lvl.toString().padStart(2, '0');
    showPage('page-game');
    setupGrid();
    startTimer();

    if (!sounds.isMuted) {
        sounds.bg.play().catch(e => console.log("Audio blocked"));
    }
}

function setupGrid() {
    const size = difficultySettings[currentDifficulty].size;

    const grid = Array(size).fill().map(() => Array(size).fill(''));
    const pool = DB[currentLang] || DB['EN'];
    const words = pool[(activeLvl - 1) % pool.length];

    const gridEl = document.getElementById('grid');
    gridEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridEl.innerHTML = "";

    words.forEach(word => {
        let placed = false; let attempts = 0;
        while (!placed && attempts < 500) {
            const dir = Math.floor(Math.random() * 3);
            const r = Math.floor(Math.random() * size), c = Math.floor(Math.random() * size);
            if (checkFit(grid, word, r, c, dir, size)) {
                for (let i = 0; i < word.length; i++) {
                    const rr = r + (dir === 1 || dir === 2 ? i : 0);
                    const cc = c + (dir === 0 || dir === 2 ? i : 0);
                    grid[rr][cc] = word[i];
                }
                placed = true;
            }
            attempts++;
        }
    });

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (!grid[r][c]) grid[r][c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
            const el = document.createElement('div');
            el.className = 'cell';
            if (size < 10) el.style.fontSize = "1.1rem";

            el.innerText = grid[r][c];
            el.dataset.r = r; el.dataset.c = c;
            el.onmousedown = (e) => { e.preventDefault(); startSelection(r, c); };
            el.onmouseenter = () => { if (isDown) handleSelection(r, c); };
            el.ontouchstart = (e) => { e.preventDefault(); startSelection(r, c); };
            gridEl.appendChild(el);
        }
    }

    window.onmouseup = () => { if (isDown) finalizeSelection(words); };
    window.ontouchend = () => { if (isDown) finalizeSelection(words); };
    document.getElementById('word-list').innerHTML = words.map(w => `<span id="w-${w}" class="w-item">${w}</span>`).join('');
}


function updateMuteUI() {
    const gameBtn = document.getElementById('mute-btn');
    const settingsBtn = document.getElementById('setting-mute-btn');
    const icon = sounds.isMuted ? '🔇' : '🔊';
    const opacity = sounds.isMuted ? '0.5' : '1';

    if (gameBtn) {
        gameBtn.innerText = icon;
        gameBtn.style.opacity = opacity;
    }
    if (settingsBtn) {
        settingsBtn.innerText = icon;
        settingsBtn.style.opacity = opacity;
    }
}


function resetProgress() {
    if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
        localStorage.removeItem('ws_pro_lvl');
        unlocked = 1;
        alert("Progress reset successfully!");
        showPage('page-lang');
    }
}


const gridEl = document.getElementById('grid');

gridEl.addEventListener('touchmove', (e) => {
    e.preventDefault();

    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);

    if (target && target.classList.contains('cell')) {
        const r = parseInt(target.dataset.r);
        const c = parseInt(target.dataset.c);
        handleSelection(r, c);
    }
}, { passive: false });
