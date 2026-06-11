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
  // =========================
// SOAL 21 (TEXT)
// =========================
{
id: 21,
type: "text",
difficulty: "medium",
question: "Prefix 'brady-' dalam terminologi medis berarti...",
options: [
"Cepat",
"Lambat",
"Besar",
"Kecil"
],
answer: 1,
explanation: "Brady- berarti lambat. Contohnya bradycardia yaitu denyut jantung lebih lambat dari normal."
},

// =========================
// SOAL 22 (IMAGE)
// =========================
{
id: 22,
type: "image",
difficulty: "medium",
image: "images/clavicle_01.png",
imageVariant: "A",
question: "Tulang yang ditunjuk pada gambar adalah...",
options: [
"Scapula",
"Clavicula",
"Sternum",
"Humerus"
],
answer: 1,
explanation: "Clavicula atau tulang selangka menghubungkan sternum dengan scapula."
},

// =========================
// SOAL 23 (TEXT)
// =========================
{
id: 23,
type: "text",
difficulty: "medium",
question: "Word root 'nephr-' berhubungan dengan organ...",
options: [
"Hati",
"Paru",
"Ginjal",
"Lambung"
],
answer: 2,
explanation: "Nephr- berasal dari bahasa Yunani yang berarti ginjal, seperti pada nephrology dan nephritis."
},

// =========================
// SOAL 24 (IMAGE)
// =========================
{
id: 24,
type: "image",
difficulty: "medium",
image: "images/sternum_01.png",
imageVariant: "A",
question: "Bagian sternum yang ditunjuk pada gambar adalah...",
options: [
"Manubrium",
"Corpus sterni",
"Processus xiphoideus",
"Incisura jugularis"
],
answer: 0,
explanation: "Manubrium merupakan bagian superior sternum yang berartikulasi dengan clavicula."
},

// =========================
// SOAL 25 (TEXT)
// =========================
{
id: 25,
type: "text",
difficulty: "hard",
question: "Istilah 'hemiparesis' berarti...",
options: [
"Kelumpuhan total kedua tungkai",
"Kelemahan pada satu sisi tubuh",
"Nyeri pada setengah tubuh",
"Kehilangan sensasi pada wajah"
],
answer: 1,
explanation: "Hemi berarti setengah dan paresis berarti kelemahan parsial, sehingga hemiparesis adalah kelemahan satu sisi tubuh."
},

// =========================
// SOAL 26 (IMAGE)
// =========================
{
id: 26,
type: "image",
difficulty: "hard",
image: "images/liver_01.png",
imageVariant: "A",
question: "Lobus hepar yang ditunjuk pada gambar adalah...",
options: [
"Lobus dexter",
"Lobus sinister",
"Lobus caudatus",
"Lobus quadratus"
],
answer: 2,
explanation: "Lobus caudatus terletak pada permukaan posterior hepar dan memiliki hubungan anatomi penting dengan vena cava inferior."
},

// =========================
// SOAL 27 (TEXT)
// =========================
{
id: 27,
type: "text",
difficulty: "hard",
question: "Nervus yang bertanggung jawab terhadap sensasi sebagian besar wajah adalah...",
options: [
"N. facialis",
"N. trigeminus",
"N. vagus",
"N. hypoglossus"
],
answer: 1,
explanation: "Nervus trigeminus (CN V) merupakan saraf utama sensorik wajah."
},

// =========================
// SOAL 28 (IMAGE)
// =========================
{
id: 28,
type: "image",
difficulty: "hard",
image: "images/brain_01.png",
imageVariant: "A",
question: "Bagian otak yang ditunjuk pada gambar adalah...",
options: [
"Cerebellum",
"Pons",
"Medulla oblongata",
"Thalamus"
],
answer: 1,
explanation: "Pons merupakan bagian batang otak yang menghubungkan medulla oblongata dengan mesencephalon."
},

// =========================
// SOAL 29 (TEXT)
// =========================
{
id: 29,
type: "text",
difficulty: "hard",
question: "Suffix '-ectomy' menunjukkan tindakan...",
options: [
"Peradangan",
"Pemeriksaan visual",
"Pengangkatan melalui operasi",
"Perbaikan jaringan"
],
answer: 2,
explanation: "Ectomy berarti pengangkatan secara bedah, misalnya appendectomy atau tonsillectomy."
},

// =========================
// SOAL 30 (IMAGE)
// =========================
{
id: 30,
type: "image",
difficulty: "hard",
image: "images/pelvis_01.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada pelvis adalah...",
options: [
"Ilium",
"Ischium",
"Pubis",
"Acetabulum"
],
answer: 3,
explanation: "Acetabulum adalah rongga tempat caput femoris berartikulasi membentuk sendi panggul."
},
  // =========================
// SOAL 31 (TEXT)
// =========================
{
id: 31,
type: "text",
difficulty: "medium",
question: "Jika struktur A terletak lebih dekat ke garis tengah tubuh dibanding struktur B, maka struktur A bersifat...",
options: [
"Lateral",
"Distal",
"Medial",
"Superfisial"
],
answer: 2,
explanation: "Medial berarti lebih dekat ke garis tengah tubuh (midline)."
},

// =========================
// SOAL 32 (IMAGE)
// =========================
{
id: 32,
type: "image",
difficulty: "medium",
image: "images/brain_lobe_01.png",
imageVariant: "A",
question: "Lobus serebri yang ditunjuk pada gambar adalah...",
options: [
"Lobus frontalis",
"Lobus parietalis",
"Lobus temporalis",
"Lobus occipitalis"
],
answer: 0,
explanation: "Lobus frontalis berperan dalam fungsi motorik, perencanaan, dan fungsi eksekutif."
},

// =========================
// SOAL 33 (TEXT)
// =========================
{
id: 33,
type: "text",
difficulty: "medium",
question: "Pasien berbaring dengan wajah menghadap ke bawah. Posisi tersebut disebut...",
options: [
"Supine",
"Prone",
"Fowler",
"Lithotomy"
],
answer: 1,
explanation: "Prone adalah posisi tengkurap dengan wajah menghadap ke bawah."
},

// =========================
// SOAL 34 (IMAGE)
// =========================
{
id: 34,
type: "image",
difficulty: "medium",
image: "images/body_plane_01.png",
imageVariant: "A",
question: "Bidang anatomi yang ditunjuk membagi tubuh menjadi bagian kanan dan kiri adalah...",
options: [
"Coronal plane",
"Transverse plane",
"Sagittal plane",
"Oblique plane"
],
answer: 2,
explanation: "Sagittal plane membagi tubuh menjadi bagian kanan dan kiri."
},

// =========================
// SOAL 35 (TEXT)
// =========================
{
id: 35,
type: "text",
difficulty: "hard",
question: "Istilah 'pericarditis' dapat diuraikan menjadi...",
options: [
"Peri + card + itis",
"Peri + nephr + itis",
"Card + oma",
"Peri + gastr + itis"
],
answer: 0,
explanation: "Peri = sekitar, card = jantung, itis = peradangan."
},

// =========================
// SOAL 36 (IMAGE)
// =========================
{
id: 36,
type: "image",
difficulty: "hard",
image: "images/abdominal_quadrant_01.png",
imageVariant: "A",
question: "Kuadran abdomen yang ditunjuk pada gambar adalah...",
options: [
"RUQ",
"LUQ",
"RLQ",
"LLQ"
],
answer: 2,
explanation: "RLQ (Right Lower Quadrant) merupakan lokasi anatomis apendiks pada sebagian besar individu."
},

// =========================
// SOAL 37 (TEXT)
// =========================
{
id: 37,
type: "text",
difficulty: "hard",
question: "Jika suatu struktur berada di antara bahu dan siku, maka struktur tersebut bersifat...",
options: [
"Proksimal terhadap bahu",
"Distal terhadap siku",
"Distal terhadap bahu dan proksimal terhadap siku",
"Medial terhadap siku"
],
answer: 2,
explanation: "Posisi di antara bahu dan siku berarti distal terhadap bahu namun proksimal terhadap siku."
},

// =========================
// SOAL 38 (IMAGE)
// =========================
{
id: 38,
type: "image",
difficulty: "hard",
image: "images/thoracic_cavity_01.png",
imageVariant: "A",
question: "Rongga tubuh yang ditunjuk pada gambar adalah...",
options: [
"Abdominal cavity",
"Pelvic cavity",
"Thoracic cavity",
"Cranial cavity"
],
answer: 2,
explanation: "Thoracic cavity berisi paru-paru, jantung, dan struktur mediastinum."
},

// =========================
// SOAL 39 (TEXT)
// =========================
{
id: 39,
type: "text",
difficulty: "hard",
question: "Istilah 'hypoglycemia' menunjukkan kondisi...",
options: [
"Kadar gula darah tinggi",
"Kadar gula darah rendah",
"Kadar lemak darah tinggi",
"Kadar oksigen darah rendah"
],
answer: 1,
explanation: "Hypo berarti rendah dan glycemia berkaitan dengan kadar glukosa darah."
},

// =========================
// SOAL 40 (IMAGE)
// =========================
{
id: 40,
type: "image",
difficulty: "hard",
image: "images/eye_01.png",
imageVariant: "A",
question: "Struktur bola mata yang ditunjuk pada gambar adalah...",
options: [
"Cornea",
"Lens",
"Retina",
"Iris"
],
answer: 1,
explanation: "Lens berfungsi memfokuskan cahaya ke retina."
  },
  // =========================
// SOAL 41 (TEXT)
// =========================
{
id: 41,
type: "text",
difficulty: "medium",
question: "Istilah anatomi yang menunjukkan posisi lebih dekat ke permukaan tubuh adalah...",
options: [
"Deep",
"Internal",
"Superficial",
"Proximal"
],
answer: 2,
explanation: "Superficial berarti lebih dekat ke permukaan tubuh, sedangkan deep berarti lebih jauh dari permukaan."
},

// =========================
// SOAL 42 (IMAGE)
// =========================
{
id: 42,
type: "image",
difficulty: "medium",
image: "images/skull_02.png",
imageVariant: "A",
question: "Tulang yang ditunjuk pada cranium adalah...",
options: [
"Frontal bone",
"Parietal bone",
"Temporal bone",
"Occipital bone"
],
answer: 1,
explanation: "Parietal bone membentuk sebagian besar atap dan sisi cranium."
},

// =========================
// SOAL 43 (TEXT)
// =========================
{
id: 43,
type: "text",
difficulty: "hard",
question: "Seorang pasien mengalami peradangan hati. Terminologi medis yang paling tepat adalah...",
options: [
"Hepatoma",
"Hepatitis",
"Hepatectomy",
"Hepatosis"
],
answer: 1,
explanation: "Hepat = hati dan -itis = peradangan."
},

// =========================
// SOAL 44 (IMAGE)
// =========================
{
id: 44,
type: "image",
difficulty: "medium",
image: "images/fibula_01.png",
imageVariant: "A",
question: "Struktur tulang yang ditunjuk adalah...",
options: [
"Tibia",
"Fibula",
"Femur",
"Patella"
],
answer: 1,
explanation: "Fibula adalah tulang lateral pada tungkai bawah."
},

// =========================
// SOAL 45 (TEXT)
// =========================
{
id: 45,
type: "text",
difficulty: "hard",
question: "Istilah 'tachypnea' menunjukkan kondisi...",
options: [
"Napas lambat",
"Napas cepat",
"Denyut jantung cepat",
"Denyut jantung lambat"
],
answer: 1,
explanation: "Tachy = cepat, pnea = pernapasan."
},

// =========================
// SOAL 46 (IMAGE)
// =========================
{
id: 46,
type: "image",
difficulty: "hard",
image: "images/spinalcord_01.png",
imageVariant: "A",
question: "Bagian sistem saraf yang ditunjuk pada gambar adalah...",
options: [
"Cerebrum",
"Cerebellum",
"Spinal cord",
"Brainstem"
],
answer: 2,
explanation: "Spinal cord merupakan bagian sistem saraf pusat yang berada dalam kanalis vertebralis."
},

// =========================
// SOAL 47 (TEXT)
// =========================
{
id: 47,
type: "text",
difficulty: "hard",
question: "Jika suatu organ berada inferior terhadap diafragma dan superior terhadap pelvis, organ tersebut berada dalam...",
options: [
"Cranial cavity",
"Thoracic cavity",
"Abdominal cavity",
"Vertebral cavity"
],
answer: 2,
explanation: "Abdominal cavity berada di antara diafragma dan pelvis."
},

// =========================
// SOAL 48 (IMAGE)
// =========================
{
id: 48,
type: "image",
difficulty: "hard",
image: "images/muscle_01.png",
imageVariant: "A",
question: "Otot yang ditunjuk pada gambar adalah...",
options: [
"Biceps brachii",
"Triceps brachii",
"Deltoid",
"Brachialis"
],
answer: 0,
explanation: "Biceps brachii merupakan fleksor utama siku dan terletak di bagian anterior lengan atas."
},

// =========================
// SOAL 49 (TEXT)
// =========================
{
id: 49,
type: "text",
difficulty: "very_hard",
question: "Istilah 'osteoarthritis' tersusun dari kombinasi...",
options: [
"Oste + arthr + itis",
"Oste + oma",
"Oste + pathy",
"Oste + emia"
],
answer: 0,
explanation: "Oste = tulang, arthr = sendi, itis = peradangan."
},

// =========================
// SOAL 50 (IMAGE)
// =========================
{
id: 50,
type: "image",
difficulty: "very_hard",
image: "images/ear_01.png",
imageVariant: "A",
question: "Struktur telinga yang ditunjuk pada gambar adalah...",
options: [
"Cochlea",
"Semicircular canal",
"Tympanic membrane",
"Malleus"
],
answer: 0,
explanation: "Cochlea merupakan bagian telinga dalam yang berfungsi dalam proses pendengaran."
},
  // =========================
// SOAL 51 (TEXT)
// =========================
{
id: 51,
type: "text",
difficulty: "medium",
question: "Word root 'dermat-' mengacu pada...",
options: [
"Otot",
"Tulang",
"Kulit",
"Sendi"
],
answer: 2,
explanation: "Dermat- berasal dari bahasa Yunani derma yang berarti kulit. Contohnya dermatitis dan dermatology."
},

// =========================
// SOAL 52 (IMAGE)
// =========================
{
id: 52,
type: "image",
difficulty: "medium",
image: "images/rib_01.png",
imageVariant: "A",
question: "Tulang yang ditunjuk pada gambar termasuk kelompok...",
options: [
"Tulang panjang",
"Tulang pipih",
"Tulang pendek",
"Tulang tidak beraturan"
],
answer: 1,
explanation: "Costa (iga) diklasifikasikan sebagai tulang pipih yang berfungsi melindungi organ toraks."
},

// =========================
// SOAL 53 (TEXT)
// =========================
{
id: 53,
type: "text",
difficulty: "medium",
question: "Prefix 'hyper-' memiliki arti...",
options: [
"Di bawah normal",
"Berlebihan atau meningkat",
"Di sekitar",
"Di dalam"
],
answer: 1,
explanation: "Hyper- menunjukkan kondisi berlebihan atau meningkat, misalnya hypertension dan hyperglycemia."
},

// =========================
// SOAL 54 (IMAGE)
// =========================
{
id: 54,
type: "image",
difficulty: "medium",
image: "images/ulna_01.png",
imageVariant: "A",
question: "Bagian tulang yang ditunjuk pada gambar merupakan...",
options: [
"Olecranon",
"Capitulum",
"Trochlea",
"Coronoid fossa"
],
answer: 0,
explanation: "Olecranon adalah tonjolan proksimal ulna yang membentuk ujung siku."
},

// =========================
// SOAL 55 (TEXT)
// =========================
{
id: 55,
type: "text",
difficulty: "hard",
question: "Istilah 'osteopenia' paling tepat menggambarkan kondisi...",
options: [
"Infeksi tulang",
"Penurunan massa tulang",
"Fraktur tulang",
"Peradangan tulang"
],
answer: 1,
explanation: "Osteo berarti tulang dan penia berarti kekurangan. Osteopenia menunjukkan penurunan densitas tulang."
},

// =========================
// SOAL 56 (IMAGE)
// =========================
{
id: 56,
type: "image",
difficulty: "hard",
image: "images/elbow_joint_01.png",
imageVariant: "A",
question: "Sendi yang ditunjuk pada gambar termasuk tipe...",
options: [
"Ball and socket",
"Hinge joint",
"Pivot joint",
"Saddle joint"
],
answer: 1,
explanation: "Sendi siku merupakan contoh hinge joint yang terutama memungkinkan gerakan fleksi dan ekstensi."
},

// =========================
// SOAL 57 (TEXT)
// =========================
{
id: 57,
type: "text",
difficulty: "hard",
question: "Pasien mengalami cedera pada otot yang berfungsi utama melakukan abduksi lengan pada 15°–90°. Otot yang paling mungkin terkena adalah...",
options: [
"Biceps brachii",
"Trapezius",
"Deltoid",
"Latissimus dorsi"
],
answer: 2,
explanation: "Deltoid merupakan penggerak utama abduksi lengan setelah inisiasi oleh supraspinatus."
},

// =========================
// SOAL 58 (IMAGE)
// =========================
{
id: 58,
type: "image",
difficulty: "hard",
image: "images/heart_valve_01.png",
imageVariant: "A",
question: "Katup jantung yang ditunjuk pada gambar adalah...",
options: [
"Tricuspid valve",
"Mitral valve",
"Pulmonary valve",
"Aortic valve"
],
answer: 1,
explanation: "Mitral valve terletak antara atrium kiri dan ventrikel kiri serta memiliki dua daun katup."
},

// =========================
// SOAL 59 (TEXT)
// =========================
{
id: 59,
type: "text",
difficulty: "very_hard",
question: "Istilah 'intramuscular injection' menunjukkan bahwa obat diberikan...",
options: [
"Di bawah kulit",
"Ke dalam vena",
"Ke dalam otot",
"Ke dalam rongga sendi"
],
answer: 2,
explanation: "Intra berarti di dalam dan muscular berarti otot. Intramuscular injection adalah injeksi ke jaringan otot."
},

// =========================
// SOAL 60 (IMAGE)
// =========================
{
id: 60,
type: "image",
difficulty: "very_hard",
image: "images/brain_artery_01.png",
imageVariant: "A",
question: "Pembuluh darah yang ditunjuk pada gambar merupakan bagian dari...",
options: [
"Circle of Willis",
"Portal system",
"Coronary circulation",
"Pulmonary circulation"
],
answer: 0,
explanation: "Circle of Willis adalah anastomosis arteri di dasar otak yang menjaga suplai darah serebral."
},
  // =========================
// SOAL 61 (TEXT)
// =========================
{
id: 61,
type: "text",
difficulty: "medium",
question: "Word root 'gastr-' mengacu pada organ...",
options: [
"Usus",
"Lambung",
"Hati",
"Pankreas"
],
answer: 1,
explanation: "Gastr- berasal dari bahasa Yunani gaster yang berarti lambung. Contohnya gastritis dan gastrectomy."
},

// =========================
// SOAL 62 (IMAGE)
// =========================
{
id: 62,
type: "image",
difficulty: "medium",
image: "images/stomach_01.png",
imageVariant: "A",
question: "Bagian lambung yang ditunjuk pada gambar adalah...",
options: [
"Cardia",
"Fundus",
"Pylorus",
"Corpus"
],
answer: 1,
explanation: "Fundus merupakan bagian superior lambung yang terletak di atas muara esofagus."
},

// =========================
// SOAL 63 (TEXT)
// =========================
{
id: 63,
type: "text",
difficulty: "medium",
question: "Suffix '-logy' berarti...",
options: [
"Ilmu yang mempelajari",
"Peradangan",
"Pemotongan",
"Penyakit"
],
answer: 0,
explanation: "Suffix -logy menunjukkan bidang ilmu atau studi, misalnya cardiology dan neurology."
},

// =========================
// SOAL 64 (IMAGE)
// =========================
{
id: 64,
type: "image",
difficulty: "medium",
image: "images/esophagus_01.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada gambar merupakan...",
options: [
"Trakea",
"Esofagus",
"Bronkus utama",
"Laring"
],
answer: 1,
explanation: "Esofagus adalah saluran muskular yang menghubungkan faring dengan lambung."
},

// =========================
// SOAL 65 (TEXT)
// =========================
{
id: 65,
type: "text",
difficulty: "hard",
question: "Istilah 'neuropathy' paling tepat berarti...",
options: [
"Peradangan saraf",
"Tumor saraf",
"Gangguan atau penyakit saraf",
"Operasi saraf"
],
answer: 2,
explanation: "Neuro berarti saraf dan pathy berarti penyakit atau gangguan."
},

// =========================
// SOAL 66 (IMAGE)
// =========================
{
id: 66,
type: "image",
difficulty: "hard",
image: "images/pancreas_01.png",
imageVariant: "A",
question: "Bagian pankreas yang ditunjuk pada gambar adalah...",
options: [
"Caput pancreatis",
"Corpus pancreatis",
"Cauda pancreatis",
"Ductus pancreaticus"
],
answer: 2,
explanation: "Cauda pancreatis merupakan bagian pankreas yang memanjang menuju limpa."
},

// =========================
// SOAL 67 (TEXT)
// =========================
{
id: 67,
type: "text",
difficulty: "hard",
question: "Prefix 'peri-' memiliki arti...",
options: [
"Di dalam",
"Di bawah",
"Di sekitar",
"Di antara"
],
answer: 2,
explanation: "Peri- berarti mengelilingi atau berada di sekitar suatu struktur."
},

// =========================
// SOAL 68 (IMAGE)
// =========================
{
id: 68,
type: "image",
difficulty: "hard",
image: "images/spleen_01.png",
imageVariant: "A",
question: "Organ yang ditunjuk pada gambar adalah...",
options: [
"Hepar",
"Pankreas",
"Limpa",
"Ginjal kiri"
],
answer: 2,
explanation: "Limpa (spleen) merupakan organ limfoid terbesar dalam tubuh."
},

// =========================
// SOAL 69 (TEXT)
// =========================
{
id: 69,
type: "text",
difficulty: "very_hard",
question: "Istilah 'polyuria' menunjukkan kondisi...",
options: [
"Nyeri saat berkemih",
"Sering berkemih dengan volume meningkat",
"Tidak dapat berkemih",
"Darah dalam urin"
],
answer: 1,
explanation: "Poly berarti banyak dan uria berkaitan dengan urin. Polyuria adalah produksi urin berlebihan."
},

// =========================
// SOAL 70 (IMAGE)
// =========================
{
id: 70,
type: "image",
difficulty: "very_hard",
image: "images/nephron_01.png",
imageVariant: "A",
question: "Struktur nefron yang ditunjuk pada gambar adalah...",
options: [
"Glomerulus",
"Loop of Henle",
"Tubulus distal",
"Ductus kolektivus"
],
answer: 0,
explanation: "Glomerulus merupakan anyaman kapiler tempat terjadinya filtrasi darah pertama kali."
},
  // =========================
// SOAL 71 (TEXT)
// =========================
{
id: 71,
type: "text",
difficulty: "medium",
question: "Kelenjar endokrin utama yang menghasilkan hormon insulin adalah...",
options: [
"Tiroid",
"Hipofisis",
"Pankreas",
"Adrenal"
],
answer: 2,
explanation: "Sel beta pulau Langerhans pankreas menghasilkan hormon insulin yang berperan mengatur kadar glukosa darah."
},

// =========================
// SOAL 72 (IMAGE)
// =========================
{
id: 72,
type: "image",
difficulty: "medium",
image: "images/thyroid_01.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada gambar adalah...",
options: [
"Kelenjar parotis",
"Kelenjar tiroid",
"Kelenjar timus",
"Kelenjar hipofisis"
],
answer: 1,
explanation: "Kelenjar tiroid terletak di bagian anterior leher dan mengelilingi trakea."
},

// =========================
// SOAL 73 (TEXT)
// =========================
{
id: 73,
type: "text",
difficulty: "medium",
question: "Istilah 'endocrine' berarti sekresi hormon...",
options: [
"Melalui saluran khusus",
"Ke permukaan epitel",
"Langsung ke aliran darah",
"Ke rongga tubuh"
],
answer: 2,
explanation: "Kelenjar endokrin tidak memiliki duktus dan mensekresikan hormon langsung ke sirkulasi darah."
},

// =========================
// SOAL 74 (IMAGE)
// =========================
{
id: 74,
type: "image",
difficulty: "medium",
image: "images/adrenal_01.png",
imageVariant: "A",
question: "Organ yang ditunjuk pada gambar adalah...",
options: [
"Ginjal",
"Limpa",
"Kelenjar adrenal",
"Pankreas"
],
answer: 2,
explanation: "Kelenjar adrenal terletak di bagian superior ginjal dan menghasilkan berbagai hormon penting."
},

// =========================
// SOAL 75 (TEXT)
// =========================
{
id: 75,
type: "text",
difficulty: "hard",
question: "Jaringan epitel selapis pipih paling sesuai untuk fungsi...",
options: [
"Proteksi mekanik berat",
"Difusi cepat",
"Kontraksi",
"Penyimpanan energi"
],
answer: 0,
explanation: "Epitel selapis pipih memungkinkan difusi dan filtrasi berlangsung secara efisien, misalnya pada alveolus paru."
},

// =========================
// SOAL 76 (IMAGE)
// =========================
{
id: 76,
type: "image",
difficulty: "hard",
image: "images/neuron_01.png",
imageVariant: "A",
question: "Bagian neuron yang ditunjuk pada gambar adalah...",
options: [
"Dendrit",
"Akson",
"Badan sel",
"Nodus Ranvier"
],
answer: 1,
explanation: "Akson menghantarkan impuls saraf menjauhi badan sel menuju neuron atau efektor lain."
},

// =========================
// SOAL 77 (TEXT)
// =========================
{
id: 77,
type: "text",
difficulty: "hard",
question: "Istilah 'anuria' menunjukkan kondisi...",
options: [
"Peningkatan produksi urin",
"Tidak adanya produksi urin atau sangat sedikit",
"Nyeri saat berkemih",
"Adanya glukosa dalam urin"
],
answer: 1,
explanation: "Anuria adalah kondisi produksi urin sangat sedikit atau hampir tidak ada."
},

// =========================
// SOAL 78 (IMAGE)
// =========================
{
id: 78,
type: "image",
difficulty: "hard",
image: "images/pituitary_01.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada dasar otak adalah...",
options: [
"Hipotalamus",
"Hipofisis",
"Pineal",
"Thalamus"
],
answer: 1,
explanation: "Hipofisis dikenal sebagai master gland karena mengatur banyak kelenjar endokrin lainnya."
},

// =========================
// SOAL 79 (TEXT)
// =========================
{
id: 79,
type: "text",
difficulty: "very_hard",
question: "Lesi pada lobus occipitalis paling mungkin menyebabkan gangguan...",
options: [
"Pendengaran",
"Penglihatan",
"Keseimbangan",
"Motorik halus"
],
answer: 1,
explanation: "Korteks visual primer berada pada lobus occipitalis sehingga lesi dapat menyebabkan gangguan penglihatan."
},

// =========================
// SOAL 80 (IMAGE)
// =========================
{
id: 80,
type: "image",
difficulty: "very_hard",
image: "images/spinal_nerve_01.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada gambar merupakan...",
options: [
"Radix dorsalis",
"Radix ventralis",
"Ganglion spinale",
"Nervus spinalis"
],
answer: 2,
explanation: "Ganglion spinale berisi badan sel neuron sensorik dan terletak pada radix dorsalis."
},
  // =========================
// SOAL 81 (TEXT)
// =========================
{
id: 81,
type: "text",
difficulty: "medium",
question: "Word root 'myel-' dalam terminologi kedokteran paling sering mengacu pada...",
options: [
"Otot",
"Sumsum tulang atau medula spinalis",
"Kulit",
"Sendi"
],
answer: 1,
explanation: "Myel- dapat mengacu pada sumsum tulang maupun medula spinalis, tergantung konteks istilah medis yang digunakan."
},

// =========================
// SOAL 82 (IMAGE)
// =========================
{
id: 82,
type: "image",
difficulty: "medium",
image: "images/radius_02.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada tulang radius adalah...",
options: [
"Styloid process",
"Radial tuberosity",
"Head of radius",
"Ulnar notch"
],
answer: 1,
explanation: "Radial tuberosity merupakan tempat perlekatan tendon m. biceps brachii."
},

// =========================
// SOAL 83 (TEXT)
// =========================
{
id: 83,
type: "text",
difficulty: "hard",
question: "Prefix 'inter-' memiliki arti...",
options: [
"Di bawah",
"Di dalam",
"Di antara",
"Di luar"
],
answer: 2,
explanation: "Inter- berarti berada di antara dua struktur atau lebih, misalnya intercostal (di antara tulang iga)."
},

// =========================
// SOAL 84 (IMAGE)
// =========================
{
id: 84,
type: "image",
difficulty: "hard",
image: "images/scapula_02.png",
imageVariant: "A",
question: "Bagian scapula yang ditunjuk pada gambar adalah...",
options: [
"Supraspinous fossa",
"Infraspinous fossa",
"Acromion",
"Coracoid process"
],
answer: 0,
explanation: "Supraspinous fossa merupakan cekungan di atas spina scapula yang menjadi tempat m. supraspinatus."
},

// =========================
// SOAL 85 (TEXT)
// =========================
{
id: 85,
type: "text",
difficulty: "hard",
question: "Istilah 'dysphagia' menunjukkan kondisi...",
options: [
"Kesulitan menelan",
"Nyeri menelan",
"Tidak mampu berbicara",
"Kesulitan bernapas"
],
answer: 0,
explanation: "Dys- berarti gangguan dan -phagia berkaitan dengan proses menelan. Dysphagia berarti kesulitan menelan."
},

// =========================
// SOAL 86 (IMAGE)
// =========================
{
id: 86,
type: "image",
difficulty: "hard",
image: "images/foot_bone_01.png",
imageVariant: "A",
question: "Tulang yang ditunjuk pada gambar kaki adalah...",
options: [
"Talus",
"Calcaneus",
"Navicular",
"Cuboid"
],
answer: 0,
explanation: "Talus berartikulasi dengan tibia dan fibula membentuk sendi pergelangan kaki."
},

// =========================
// SOAL 87 (TEXT)
// =========================
{
id: 87,
type: "text",
difficulty: "very_hard",
question: "Istilah anatomi 'ipsilateral' berarti...",
options: [
"Berada pada sisi tubuh yang berlawanan",
"Berada pada sisi tubuh yang sama",
"Berada di garis tengah tubuh",
"Berada di dalam rongga tubuh"
],
answer: 1,
explanation: "Ipsilateral menunjukkan dua struktur berada pada sisi tubuh yang sama, sedangkan contralateral berarti berlawanan sisi."
},

// =========================
// SOAL 88 (IMAGE)
// =========================
{
id: 88,
type: "image",
difficulty: "very_hard",
image: "images/circle_willis_02.png",
imageVariant: "A",
question: "Arteri yang ditunjuk pada gambar merupakan bagian dari Circle of Willis, yaitu...",
options: [
"Anterior cerebral artery",
"Middle cerebral artery",
"Posterior cerebral artery",
"Basilar artery"
],
answer: 0,
explanation: "Anterior cerebral artery merupakan salah satu komponen utama Circle of Willis yang menyuplai bagian medial hemisfer serebri."
},

// =========================
// SOAL 89 (TEXT)
// =========================
{
id: 89,
type: "text",
difficulty: "very_hard",
question: "Suffix '-rrhage' atau '-rrhagia' menunjukkan...",
options: [
"Pembentukan jaringan",
"Perdarahan berlebihan",
"Peradangan",
"Pemecahan jaringan"
],
answer: 1,
explanation: "Suffix -rrhage/-rrhagia menunjukkan perdarahan atau keluarnya darah dalam jumlah besar, misalnya hemorrhage."
},

// =========================
// SOAL 90 (IMAGE)
// =========================
{
id: 90,
type: "image",
difficulty: "very_hard",
image: "images/corpus_callosum_01.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada potongan sagital otak berikut adalah...",
options: [
"Corpus callosum",
"Thalamus",
"Pons",
"Cerebellum"
],
answer: 0,
explanation: "Corpus callosum merupakan kumpulan serabut komisural terbesar pada otak yang menghubungkan hemisfer serebri kanan dan kiri sehingga memungkinkan pertukaran informasi antar kedua hemisfer."
},
  // =========================
// SOAL 91 (TEXT)
// =========================
{
id: 91,
type: "text",
difficulty: "hard",
question: "Istilah 'diplopia' berarti...",
options: [
"Penglihatan ganda",
"Kehilangan pendengaran",
"Kesulitan berbicara",
"Kesulitan menelan"
],
answer: 0,
explanation: "Diplopia berasal dari diplo- (ganda) dan -opia (penglihatan), sehingga berarti melihat satu objek menjadi dua bayangan."
},

// =========================
// SOAL 92 (IMAGE)
// =========================
{
id: 92,
type: "image",
difficulty: "hard",
image: "images/ethmoid_01.png",
imageVariant: "A",
question: "Tulang kranium yang ditunjuk pada gambar adalah...",
options: [
"Frontal bone",
"Ethmoid bone",
"Sphenoid bone",
"Temporal bone"
],
answer: 1,
explanation: "Ethmoid bone terletak di antara kedua orbita dan berkontribusi terhadap pembentukan rongga hidung serta dinding medial orbita."
},

// =========================
// SOAL 93 (TEXT)
// =========================
{
id: 93,
type: "text",
difficulty: "hard",
question: "Suffix '-plegia' menunjukkan kondisi...",
options: [
"Kelemahan otot",
"Kelumpuhan",
"Peradangan",
"Nyeri"
],
answer: 1,
explanation: "Plegia berarti kehilangan fungsi motorik atau kelumpuhan total, berbeda dengan paresis yang berarti kelemahan parsial."
},

// =========================
// SOAL 94 (IMAGE)
// =========================
{
id: 94,
type: "image",
difficulty: "very_hard",
image: "images/optic_chiasm_01.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada dasar otak adalah...",
options: [
"Optic nerve",
"Optic chiasm",
"Optic tract",
"Oculomotor nerve"
],
answer: 1,
explanation: "Optic chiasm merupakan tempat sebagian serabut nervus opticus menyilang sebelum melanjutkan perjalanan sebagai tractus opticus."
},

// =========================
// SOAL 95 (TEXT)
// =========================
{
id: 95,
type: "text",
difficulty: "hard",
question: "Istilah 'melena' menunjukkan...",
options: [
"Muntah darah segar",
"Feses berwarna hitam akibat perdarahan saluran cerna",
"Darah dalam urin",
"Perdarahan hidung"
],
answer: 1,
explanation: "Melena adalah feses hitam seperti ter akibat perdarahan saluran cerna bagian atas yang telah mengalami pencernaan."
},

// =========================
// SOAL 96 (IMAGE)
// =========================
{
id: 96,
type: "image",
difficulty: "very_hard",
image: "images/scaphoid_01.png",
imageVariant: "A",
question: "Tulang karpal yang ditunjuk pada gambar adalah...",
options: [
"Lunate",
"Triquetrum",
"Scaphoid",
"Pisiform"
],
answer: 2,
explanation: "Scaphoid merupakan tulang karpal yang paling sering mengalami fraktur akibat jatuh dengan tangan menumpu."
},

// =========================
// SOAL 97 (TEXT)
// =========================
{
id: 97,
type: "text",
difficulty: "very_hard",
question: "Prefix 'retro-' dalam terminologi anatomi berarti...",
options: [
"Di atas",
"Di depan",
"Di belakang",
"Di antara"
],
answer: 2,
explanation: "Retro- berarti berada di belakang suatu struktur, misalnya ruang retroperitoneal yang terletak di belakang peritoneum."
},

// =========================
// SOAL 98 (IMAGE)
// =========================
{
id: 98,
type: "image",
difficulty: "very_hard",
image: "images/uvula_01.png",
imageVariant: "A",
question: "Struktur yang ditunjuk pada rongga mulut adalah...",
options: [
"Palatum durum",
"Palatum molle",
"Uvula",
"Tonsilla palatina"
],
answer: 2,
explanation: "Uvula merupakan tonjolan berbentuk kerucut yang menggantung dari bagian posterior palatum molle."
},

// =========================
// SOAL 99 (TEXT)
// =========================
{
id: 99,
type: "text",
difficulty: "very_hard",
question: "Istilah 'xerostomia' berarti...",
options: [
"Mulut kering",
"Lidah membesar",
"Peradangan gusi",
"Kesulitan mengunyah"
],
answer: 0,
explanation: "Xero- berarti kering dan -stomia berkaitan dengan rongga mulut. Xerostomia adalah kondisi mulut kering akibat berkurangnya produksi saliva."
},

// =========================
// SOAL 100 (IMAGE)
// =========================
{
id: 100,
type: "image",
difficulty: "very_hard",
image: "images/foramen_ovale_01.png",
imageVariant: "A",
question: "Foramen yang ditunjuk pada dasar kranium adalah...",
options: [
"Foramen rotundum",
"Foramen spinosum",
"Foramen ovale",
"Jugular foramen"
],
answer: 2,
explanation: "Foramen ovale pada os sphenoidale dilalui oleh nervus mandibularis (V3), cabang terbesar dari nervus trigeminus."
},

];
