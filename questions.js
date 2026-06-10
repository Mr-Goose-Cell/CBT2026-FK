const questions = [

  // =========================
  // SOAL 1 (TEXT)
  // =========================
  {
    id: 1,
    type: "text",
    difficulty: "easy",
    question: "Istilah 'proximal' dalam anatomi berarti...",
    options: [
      "Jauh dari titik asal",
      "Dekat dengan titik asal",
      "Di bagian lateral",
      "Di bagian distal ekstrem"
    ],
    answer: 1,
    explanation: "Proximal berarti lebih dekat ke titik asal suatu struktur tubuh."
  },

  // =========================
  // SOAL 2 (IMAGE)
  // =========================
  {
    id: 2,
    type: "image",
    difficulty: "easy",
    image: "images/tibia_01.png",
    imageVariant: "A",
    question: "Struktur yang ditunjuk pada gambar berikut adalah...",
    options: [
      "Femur",
      "Tibia",
      "Fibula",
      "Patella"
    ],
    answer: 1,
    explanation: "Tibia adalah tulang kering utama pada ekstremitas bawah."
  },

  // =========================
  // SOAL 3 (TEXT)
  // =========================
  {
    id: 3,
    type: "text",
    difficulty: "easy",
    question: "Prefix 'hypo-' dalam istilah medis berarti...",
    options: [
      "Berlebihan",
      "Kurang / rendah",
      "Normal",
      "Tidak berubah"
    ],
    answer: 1,
    explanation: "Hypo- menunjukkan kondisi di bawah normal atau kekurangan."
  },

  // =========================
  // SOAL 4 (IMAGE)
  // =========================
  {
    id: 4,
    type: "image",
    difficulty: "easy",
    image: "images/humerus_01.png",
    imageVariant: "A",
    question: "Bagian yang ditunjuk pada tulang humerus adalah...",
    options: [
      "Caput humeri",
      "Corpus humeri",
      "Olecranon",
      "Radius head"
    ],
    answer: 0,
    explanation: "Caput humeri adalah kepala tulang humerus yang berartikulasi dengan scapula."
  },

  // =========================
  // SOAL 5 (TEXT)
  // =========================
  {
    id: 5,
    type: "text",
    difficulty: "easy",
    question: "Suffix '-itis' berarti...",
    options: [
      "Tumor",
      "Peradangan",
      "Kematian jaringan",
      "Infeksi virus"
    ],
    answer: 1,
    explanation: "-itis berarti proses inflamasi atau peradangan."
  },

  // =========================
  // SOAL 6 (IMAGE)
  // =========================
  {
    id: 6,
    type: "image",
    difficulty: "easy",
    image: "images/skull_base_01.png",
    imageVariant: "A",
    question: "Foramen yang ditunjuk pada gambar adalah...",
    options: [
      "Foramen ovale",
      "Foramen magnum",
      "Foramen rotundum",
      "Foramen spinosum"
    ],
    answer: 1,
    explanation: "Foramen magnum adalah lubang besar di dasar cranium."
  },

  // =========================
  // SOAL 7 (TEXT)
  // =========================
  {
    id: 7,
    type: "text",
    difficulty: "medium",
    question: "Saraf yang berperan dalam ekstensi pergelangan tangan adalah...",
    options: [
      "N. medianus",
      "N. radialis",
      "N. ulnaris",
      "N. femoralis"
    ],
    answer: 1,
    explanation: "Nervus radialis mengontrol ekstensi pergelangan tangan."
  },

  // =========================
  // SOAL 8 (IMAGE)
  // =========================
  {
    id: 8,
    type: "image",
    difficulty: "medium",
    image: "images/radius_ulna_01.png",
    imageVariant: "A",
    question: "Tulang yang ditunjuk pada gambar adalah...",
    options: [
      "Radius",
      "Ulna",
      "Humerus",
      "Scapula"
    ],
    answer: 1,
    explanation: "Ulna adalah tulang medial pada lengan bawah."
  },

  // =========================
  // SOAL 9 (TEXT)
  // =========================
  {
    id: 9,
    type: "text",
    difficulty: "medium",
    question: "Arteri memiliki fungsi utama...",
    options: [
      "Membawa darah ke jantung",
      "Membawa darah keluar dari jantung",
      "Membawa limfa",
      "Menukar oksigen di jaringan"
    ],
    answer: 1,
    explanation: "Arteri membawa darah keluar dari jantung."
  },

  // =========================
  // SOAL 10 (IMAGE)
  // =========================
  {
    id: 10,
    type: "image",
    difficulty: "medium",
    image: "images/femur_head_01.png",
    imageVariant: "A",
    question: "Struktur pada gambar ini adalah...",
    options: [
      "Caput femoris",
      "Condylus femoris",
      "Tibia proximal",
      "Patella"
    ],
    answer: 0,
    explanation: "Caput femoris adalah kepala tulang femur."
  },
  // =========================
// SOAL 11 (TEXT)
// =========================
{
id: 11,
type: "text",
difficulty: "medium",
question: "Word root 'cardi' mengacu pada organ...",
options: [
"Paru",
"Jantung",
"Hati",
"Ginjal"
],
answer: 1,
explanation: "Cardi berasal dari bahasa Yunani 'kardia' yang berarti jantung. Istilah seperti cardiology, cardiomegaly, dan pericardium semuanya berhubungan dengan jantung."
},

// =========================
// SOAL 12 (IMAGE)
// =========================
{
id: 12,
type: "image",
difficulty: "medium",
image: "images/scapula_01.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada scapula adalah...",
options: [
"Acromion",
"Coracoid process",
"Spina scapulae",
"Glenoid cavity"
],
answer: 3,
explanation: "Glenoid cavity merupakan permukaan artikular scapula yang berhubungan dengan caput humeri membentuk sendi bahu."
},

// =========================
// SOAL 13 (TEXT)
// =========================
{
id: 13,
type: "text",
difficulty: "medium",
question: "Istilah 'tachycardia' berarti...",
options: [
"Denyut jantung lambat",
"Denyut jantung cepat",
"Pembesaran jantung",
"Peradangan jantung"
],
answer: 1,
explanation: "Tachy- berarti cepat dan -cardia berkaitan dengan denyut jantung. Tachycardia adalah peningkatan frekuensi denyut jantung di atas normal."
},

// =========================
// SOAL 14 (IMAGE)
// =========================
{
id: 14,
type: "image",
difficulty: "medium",
image: "images/vertebra_01.png",
imageVariant: "A",
question: "Bagian vertebra yang ditunjuk adalah...",
options: [
"Spinous process",
"Vertebral body",
"Transverse process",
"Vertebral foramen"
],
answer: 3,
explanation: "Vertebral foramen adalah lubang pada vertebra yang membentuk kanalis vertebralis tempat medula spinalis berada."
},

// =========================
// SOAL 15 (TEXT)
// =========================
{
id: 15,
type: "text",
difficulty: "medium",
question: "Suffix '-megaly' berarti...",
options: [
"Nyeri",
"Peradangan",
"Pembesaran",
"Pemotongan"
],
answer: 2,
explanation: "Megaly berarti pembesaran organ, misalnya hepatomegaly atau cardiomegaly."
},

// =========================
// SOAL 16 (IMAGE)
// =========================
{
id: 16,
type: "image",
difficulty: "medium",
image: "images/lung_01.png",
imageVariant: "A",
question: "Lobus paru yang ditunjuk pada gambar adalah...",
options: [
"Lobus superior dexter",
"Lobus medius dexter",
"Lobus inferior dexter",
"Lobus superior sinister"
],
answer: 1,
explanation: "Lobus medius hanya dimiliki paru kanan dan terletak di antara lobus superior dan inferior."
},

// =========================
// SOAL 17 (TEXT)
// =========================
{
id: 17,
type: "text",
difficulty: "hard",
question: "Seorang pasien mengalami lesi pada nervus medianus. Gerakan yang paling mungkin terganggu adalah...",
options: [
"Abduksi jari",
"Fleksi ibu jari",
"Ekstensi siku",
"Plantar fleksi"
],
answer: 1,
explanation: "Nervus medianus mempersarafi sebagian besar otot fleksor lengan bawah dan otot thenar sehingga fleksi/oposisi ibu jari dapat terganggu."
},

// =========================
// SOAL 18 (IMAGE)
// =========================
{
id: 18,
type: "image",
difficulty: "hard",
image: "images/heart_01.png",
imageVariant: "A",
question: "Ruang jantung yang ditunjuk pada gambar adalah...",
options: [
"Atrium kanan",
"Atrium kiri",
"Ventrikel kanan",
"Ventrikel kiri"
],
answer: 3,
explanation: "Ventrikel kiri memiliki dinding paling tebal karena memompa darah ke seluruh tubuh melalui sirkulasi sistemik."
},

// =========================
// SOAL 19 (TEXT)
// =========================
{
id: 19,
type: "text",
difficulty: "hard",
question: "Istilah anatomi 'supine position' berarti pasien berada dalam posisi...",
options: [
"Tengkurap",
"Berbaring terlentang",
"Duduk tegak",
"Miring kanan"
],
answer: 1,
explanation: "Supine adalah posisi berbaring terlentang dengan wajah menghadap ke atas."
},

// =========================
// SOAL 20 (IMAGE)
// =========================
{
id: 20,
type: "image",
difficulty: "hard",
image: "images/kidney_01.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada ginjal adalah...",
options: [
"Renal cortex",
"Renal pelvis",
"Renal pyramid",
"Ureter"
],
answer: 1,
explanation: "Renal pelvis merupakan tempat penampungan urin sebelum dialirkan ke ureter."
  },

];
