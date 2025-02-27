import React from "react";

export default function SkripsiOnline() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="w-full bg-blue-600 text-white p-4 text-xl font-semibold shadow-md sticky top-0 z-50 flex justify-between">
        <span>Skripsi Online Raihand F</span>
        <div className="space-x-6">
          {["Home", "Tentang", "Layanan", "Stories", "Kontak", "Latihan"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-bold"
              >
                {item}
              </a>
            )
          )}
        </div>
      </nav>
      <div className="p-6 space-y-12">
        {[
          { id: "bab1", title: "Bab 1 - Pendahuluan", content: bab1Content() },
          {
            id: "bab2",
            title: "Bab 2 - Tinjauan Pustaka",
            content: bab2Content(),
          },
          {
            id: "bab3",
            title: "Bab 3 - Metodologi Penelitian",
            content: bab3Content(),
          },
          {
            id: "bab4",
            title: "Bab 4 - Hasil dan Pembahasan",
            content: bab4Content(),
          },
          {
            id: "bab5",
            title: "Bab 5 - Kesimpulan dan Saran",
            content: bab5Content(),
          },
        ].map((bab) => (
          <section key={bab.id} className="space-y-6">
            <h2
              id={bab.id}
              className="text-2xl font-bold bg-white p-4 sticky top-16 shadow z-40 border-b text-black"
            >
              {bab.title}
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-md leading-relaxed text-black">
              {bab.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function bab1Content() {
  return (
    <>
      <p>
        Bab ini membahas latar belakang penelitian, rumusan masalah, tujuan
        penelitian, serta manfaat yang diharapkan dari penelitian ini.
      </p>
      <p>
        Pendahuluan juga mencakup batasan masalah agar penelitian lebih terfokus
        serta sistematika penulisan yang digunakan dalam penyusunan skripsi ini.
      </p>
      <p>
        Selain itu, peneliti juga menjelaskan alasan pemilihan topik serta
        urgensi penelitian dalam bidang yang sedang dikaji.
      </p>
    </>
  );
}

function bab2Content() {
  return (
    <>
      <p>
        Bab ini menyajikan kajian teori dan tinjauan pustaka yang relevan dengan
        penelitian, termasuk penelitian terdahulu yang mendukung penelitian ini.
      </p>
      <p>
        Di dalamnya terdapat landasan teori yang menjelaskan konsep-konsep dasar
        yang mendukung penelitian.
      </p>
      <p>
        Peneliti juga melakukan perbandingan terhadap penelitian sebelumnya guna
        menyoroti kontribusi dari penelitian ini.
      </p>
    </>
  );
}

function bab3Content() {
  return (
    <>
      <p>
        Bab ini menjelaskan metode yang digunakan dalam penelitian, seperti
        jenis penelitian, teknik pengumpulan data, serta metode analisis data.
      </p>
      <p>
        Dalam bab ini juga dijelaskan bagaimana data dikumpulkan, instrumen yang
        digunakan, serta tahapan analisis yang dilakukan.
      </p>
      <p>
        Selain itu, peneliti juga menjelaskan subjek penelitian serta teknik
        validasi data yang digunakan.
      </p>
    </>
  );
}

function bab4Content() {
  return (
    <>
      <p>
        Bab ini berisi hasil penelitian yang telah diperoleh serta pembahasan
        mengenai hasil tersebut berdasarkan teori yang telah dikaji.
      </p>
      <p>
        Analisis data dilakukan untuk menafsirkan hasil yang diperoleh dan
        menghubungkannya dengan pertanyaan penelitian.
      </p>
      <p>
        Selain itu, peneliti membandingkan temuan dengan penelitian sebelumnya
        untuk menunjukkan kesesuaian atau perbedaan hasil.
      </p>
    </>
  );
}

function bab5Content() {
  return (
    <>
      <p>
        Bab ini memberikan kesimpulan dari penelitian yang dilakukan serta saran
        untuk pengembangan lebih lanjut berdasarkan temuan yang diperoleh.
      </p>
      <p>
        Kesimpulan dibuat berdasarkan hasil analisis dan menjawab rumusan
        masalah yang telah dikemukakan di bab sebelumnya.
      </p>
      <p>
        Peneliti juga memberikan rekomendasi bagi penelitian selanjutnya serta
        implikasi dari temuan yang telah diperoleh.
      </p>
    </>
  );
}
