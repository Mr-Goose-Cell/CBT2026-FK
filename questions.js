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
  

];
