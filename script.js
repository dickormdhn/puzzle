document.addEventListener('DOMContentLoaded', () => {
  const puzzlePiecesContainer = document.getElementById('puzzle-pieces-container');
  const puzzleBoardContainer = document.getElementById('puzzle-board-container');
  const completionPopup = document.getElementById('completion-popup');
  const popupMessage = document.getElementById('popup-message');
  const nextLevelBtn = document.getElementById('next-level-btn');
  const finishGameBtn = document.getElementById('finish-game-btn');
  const levelInfo = document.getElementById('level-info');
  const previewImage = document.getElementById('preview-image'); // Dapatkan elemen gambar pratinjau

  let currentLevel = 0;
  const levels = [
    {
      image: 'images/jateng.png', // Gambar untuk level 1
      pieces: 9, // 3x3
      grid: { rows: 3, cols: 3 },
      province: {
        name: 'Jawa Tengah',
        description:
          'Jawa Tengah adalah sebuah provinsi di Indonesia yang terletak di bagian tengah Pulau Jawa. Ibu kotanya adalah Semarang. <br>Provinsi ini kaya akan budaya Jawa klasik seperti batik, gamelan, dan tari tradisional. <br>Banyak candi bersejarah seperti Candi Borobudur, Candi Mendut berada di wilayah ini.',
        adat: '<br>1. Pakaian adatnya adalah Kebaya (wanita) dan Beskap dengan Blangkon (pria). <br>2. Tarian tradisional meliputi Tari Serimpi dan Tari Gambyong. <br>3. Rumah adatnya adalah Joglo. <br>4. Alat Musik Tradisional: Gamelan. <br>5. Bahasa Daerah : Bahasa Jawa (dialek Solo-Yogya dan Semarang).',
      },
    },
    {
      image: 'images/jabar.png', // Gambar untuk level 2
      pieces: 16, // 4x4
      grid: { rows: 4, cols: 4 },
      province: {
        name: 'Jawa Barat',
        description:
          'Jawa Barat adalah provinsi yang terletak di bagian barat Pulau Jawa, dengan ibu kotanya Bandung. <br>Provinsi ini terkenal dengan keindahan alam pegunungan, perkebunan teh yang luas, dan seni budaya Sunda yang sangat khas. Bahasa Sunda menjadi bahasa daerah utama di sini.',
        adat: '<br>1. Pakaian adatnya adalah Kebaya Sunda (wanita) dan Baju Pangsi dengan Iket (pria). <br>2. Tarian tradisional meliputi Tari Jaipong, Tari Merak, dan Tari Topeng. <br>3. Rumah adatnya adalah Imah Badak Heuay, Jolopong, Parahu Kanyahoan, dan Capit Gunting. <br>4. Alat Musik Tradisional: Angklung, Gamelan Degung, Suling, dan Kecapi. <br>5. Bahasa Daerah: Bahasa Sunda.',
      },
    },
    {
      image: 'images/jawa-timur.jpg', // Gambar untuk level 3
      pieces: 25, // 5x5
      grid: { rows: 5, cols: 5 },
      province: {
        name: 'Jawa Timur',
        description:
          'Jawa Timur adalah provinsi dengan ibu kota Surabaya, yang juga merupakan kota terbesar kedua di Indonesia. <br>Provinsi ini merupakan pusat ekonomi yang penting dan memiliki keragaman budaya yang kaya, dipengaruhi oleh suku Jawa, Madura, dan Tengger. <br>Daya tarik alamnya sangat memukau, seperti Gunung Bromo yang terkenal dan Kawah Ijen dengan fenomena api birunya.',
        adat: '<br>1. Pakaian adatnya adalah Beragam, di antaranya adalah Baju Pesa`an (khas Madura) dan Baju Mantenan. <br>2. Tarian tradisional meliputi Tari Remo (tarian pembuka), Reog Ponorogo (tarian khas Ponorogo yang energik), dan Tari Gandrung. <br>3. Rumah adatnya adalah Joglo Pangrawit, Limasan, dan Keraton. <br>4. Alat Musik Tradisional: Gamelan, Bonang, dan Saron. <br>5. Bahasa Daerah: Bahasa Jawa (dialek Surabaya/Jawa Timuran), Bahasa Madura.',
      },
    },
    {
      image: 'images/Jogja.png', // Gambar untuk level 4
      pieces: 25, // 5x5
      grid: { rows: 5, cols: 5 },
      province: {
        name: 'Daerah Istimewa Yogyakarta',
        description:
          'DI Yogyakarta adalah sebuah Daerah Istimewa yang terletak di bagian selatan Pulau Jawa, beribu kota Yogyakarta. <br>Kota ini dikenal sebagai pusat kebudayaan Jawa dan kota pelajar yang penting di Indonesia. <br>Keistimewaannya terletak pada sistem pemerintahannya yang dipimpin oleh seorang Sultan sebagai kepala daerah. Yogyakarta kaya akan warisan sejarah, seni, dan tradisi.',
        adat: '<br>1. Pakaian adatnya adalah Kebaya (wanita) dan Surjan (pria) dengan Blangkon. <br>2. Tarian tradisional meliputi Tari Bedhaya, Tari Serimpi, Tari Golek Menak, dan Tari Klasik Gaya Yogyakarta. <br>3. Rumah adatnya adalah Joglo (sering disebut Joglo Yogyakarta dengan gaya khas). <br>4. Alat Musik Tradisional: Gamelan. <br>5. Bahasa Daerah: Bahasa Jawa (dengan dialek Yogyakarta yang khas).',
      },
    },
    {
      image: 'images/jakarta.png', // Gambar untuk level 5
      pieces: 25, // 5x5
      grid: { rows: 5, cols: 5 },
      province: {
        name: 'DKI Jakarta',
        description:
          'DKI Jakarta adalah ibu kota dan kota terbesar di Indonesia. Sebagai pusat pemerintahan, bisnis, dan budaya modern, Jakarta merupakan "melting pot" berbagai suku bangsa dari seluruh Indonesia dan dunia, dengan budaya Betawi sebagai akar lokalnya. <br>Kota metropolitan ini menawarkan gedung-gedung pencakar langit, pusat perbelanjaan megah, hingga destinasi sejarah seperti Kota Tua.',
        adat: '<br>1. Pakaian adatnya adalah Kebaya Encim (wanita) dan Baju Sadariah dengan celana batik atau celana pangsi (pria). <br>2. Tarian tradisional meliputi Tari Topeng Betawi, Tari Lenggang Nyai, dan Tari Ronggeng. <br>3. Rumah adatnya adalah Rumah Kebaya. <br>4. Alat Musik Tradisional: Gambang Kromong, Tanjidor, dan Keroncong. <br>5. Bahasa Daerah: Bahasa Betawi.',
      },
    },
  ];

  let activePiece = null;
  let initialCursorX, initialCursorY;
  let initialPieceLeft, initialPieceTop;
  let correctPiecesCount = 0;

  let globalScaleFactor = 1;

  function updateGlobalScaleFactor() {
    const bodyRect = document.body.getBoundingClientRect();
    if (window.innerWidth > 0) {
      const computedStyle = window.getComputedStyle(document.body);
      const transformValue = computedStyle.getPropertyValue('transform');

      if (transformValue && transformValue !== 'none') {
        const matrix = new DOMMatrix(transformValue);
        globalScaleFactor = matrix.a;
      } else {
        globalScaleFactor = bodyRect.width / window.innerWidth;
      }
    } else {
      globalScaleFactor = 1;
    }
    console.log('Detected Global Scale Factor:', globalScaleFactor);
  }

  updateGlobalScaleFactor();
  window.addEventListener('resize', updateGlobalScaleFactor);

  function initGame(levelIndex) {
    currentLevel = levelIndex;
    const currentLevelData = levels[currentLevel];
    levelInfo.textContent = `Level ${currentLevel + 1} / ${levels.length}`;
    puzzlePiecesContainer.innerHTML = '';
    puzzleBoardContainer.innerHTML = '';
    correctPiecesCount = 0;

    // Set gambar pratinjau
    previewImage.src = currentLevelData.image; // Mengatur src gambar pratinjau

    const img = new Image();
    img.onload = () => {
      createPuzzle(currentLevelData.image, currentLevelData.pieces, currentLevelData.grid.rows, currentLevelData.grid.cols);
    };
    img.src = currentLevelData.image;

    completionPopup.classList.add('hidden');
  }

  function createPuzzle(imageUrl, numPieces, rows, cols) {
    // Tentukan lebar total papan puzzle (misal: tetap 400px)
    const boardTotalWidth = 400;
    const boardTotalHeight = 400;

    // Atur ulang grid-template-columns dan grid-template-rows untuk puzzleBoardContainer
    puzzleBoardContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    puzzleBoardContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    puzzleBoardContainer.style.width = `${boardTotalWidth}px`;
    puzzleBoardContainer.style.height = `${boardTotalHeight}px`;

    // Pastikan puzzlePiecesContainer juga memiliki ukuran yang sesuai
    puzzlePiecesContainer.style.width = `${boardTotalWidth}px`;
    puzzlePiecesContainer.style.height = `${boardTotalHeight}px`;

    // Hitung lebar dan tinggi setiap potongan
    const pieceWidth = boardTotalWidth / cols;
    const pieceHeight = boardTotalHeight / rows;

    // Buat potongan puzzle
    const pieces = [];
    for (let i = 0; i < numPieces; i++) {
      const piece = document.createElement('div');
      piece.classList.add('puzzle-piece');
      piece.dataset.id = i;

      const col = i % cols;
      const row = Math.floor(i / cols);
      piece.style.backgroundImage = `url(${imageUrl})`;
      piece.style.backgroundSize = `${boardTotalWidth}px ${boardTotalHeight}px`;
      piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;
      piece.style.width = `${pieceWidth}px`;
      piece.style.height = `${pieceHeight}px`;

      pieces.push(piece);
    }

    shuffleArray(pieces).forEach((piece) => {
      puzzlePiecesContainer.appendChild(piece);
      piece.style.position = 'absolute';

      // Hitung posisi acak di dalam puzzlePiecesContainer
      const containerInnerWidth = puzzlePiecesContainer.clientWidth - pieceWidth;
      const containerInnerHeight = puzzlePiecesContainer.clientHeight - pieceHeight;

      const randomLeft = Math.max(0, Math.random() * containerInnerWidth);
      const randomTop = Math.max(0, Math.random() * containerInnerHeight);

      piece.style.left = `${randomLeft}px`;
      piece.style.top = `${randomTop}px`;
    });

    // Buat slot puzzle di papan
    for (let i = 0; i < numPieces; i++) {
      const slot = document.createElement('div');
      slot.classList.add('puzzle-slot');
      slot.dataset.id = i;
      slot.style.width = `${pieceWidth}px`;
      slot.style.height = `${pieceHeight}px`;
      puzzleBoardContainer.appendChild(slot);
    }

    addDragListeners();
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function addDragListeners() {
    document.querySelectorAll('.puzzle-piece').forEach((piece) => {
      piece.addEventListener('mousedown', startDrag);
      piece.addEventListener('touchstart', startDrag, { passive: false });
    });
  }

  function startDrag(e) {
    if (e.target.parentNode.id === 'puzzle-board-container') {
      return;
    }

    activePiece = e.target;
    activePiece.classList.add('dragging');

    initialCursorX = e.clientX || e.touches[0].clientX;
    initialCursorY = e.clientY || e.touches[0].clientY;

    initialPieceLeft = parseFloat(activePiece.style.left);
    initialPieceTop = parseFloat(activePiece.style.top);

    if (isNaN(initialPieceLeft)) initialPieceLeft = 0;
    if (isNaN(initialPieceTop)) initialPieceTop = 0;

    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
    document.addEventListener('touchcancel', endDrag);
  }

  function drag(e) {
    if (!activePiece) return;

    e.preventDefault();

    const currentCursorX = e.clientX || e.touches[0].clientX;
    const currentCursorY = e.clientY || e.touches[0].clientY;

    const deltaCursorX = currentCursorX - initialCursorX;
    const deltaCursorY = currentCursorY - initialCursorY;

    const newLeft = initialPieceLeft + deltaCursorX / globalScaleFactor;
    const newTop = initialPieceTop + deltaCursorY / globalScaleFactor;

    activePiece.style.left = `${newLeft}px`;
    activePiece.style.top = `${newTop}px`;
  }

  function endDrag(e) {
    if (!activePiece) return;

    activePiece.classList.remove('dragging');

    const activePieceRect = activePiece.getBoundingClientRect();
    const slots = document.querySelectorAll('.puzzle-slot');
    let placed = false;

    slots.forEach((slot) => {
      const slotRect = slot.getBoundingClientRect();

      if (activePieceRect.left < slotRect.right && activePieceRect.right > slotRect.left && activePieceRect.top < slotRect.bottom && activePieceRect.bottom > slotRect.top) {
        if (!slot.classList.contains('occupied') && activePiece.dataset.id === slot.dataset.id) {
          slot.appendChild(activePiece);
          activePiece.style.position = 'static';
          activePiece.style.left = '';
          activePiece.style.top = '';
          slot.classList.add('occupied');
          correctPiecesCount++;
          placed = true;
        }
      }
    });

    if (!placed) {
      activePiece.style.position = 'absolute';
    }

    activePiece = null;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('touchmove', drag);
    document.removeEventListener('mouseup', endDrag);
    document.removeEventListener('touchend', endDrag);
    document.removeEventListener('touchcancel', endDrag);

    checkCompletion();
  }

  function checkCompletion() {
    const currentLevelData = levels[currentLevel];
    if (correctPiecesCount === currentLevelData.pieces) {
      showCompletionPopup();
    }
  }

  function showCompletionPopup() {
    const currentLevelData = levels[currentLevel];
    const provinceInfo = currentLevelData.province;

    // Tambahkan judul provinsi dan deskripsi
    let messageContent = `<h2>Selamat! Level ${currentLevel + 1} Selesai!</h2>`;
    messageContent += `<h3>Provinsi ${provinceInfo.name}</h3>`;
    messageContent += `<p>${provinceInfo.description}</p>`;
    messageContent += `<p><strong>Adat ${provinceInfo.name}:</strong> ${provinceInfo.adat}</p>`;

    popupMessage.innerHTML = messageContent; // Gunakan innerHTML untuk menyertakan tag HTML

    if (currentLevel < levels.length - 1) {
      nextLevelBtn.style.display = 'inline-block';
    } else {
      nextLevelBtn.style.display = 'none'; // Sembunyikan tombol next level di level terakhir
    }
    finishGameBtn.style.display = 'inline-block'; // Pastikan tombol finish selalu ada
    completionPopup.classList.remove('hidden');
  }

  nextLevelBtn.addEventListener('click', () => {
    currentLevel++;
    initGame(currentLevel);
  });

  finishGameBtn.addEventListener('click', () => {
    window.location.href = 'home.html'; // Redirect ke home.html
  });

  initGame(0);
});
