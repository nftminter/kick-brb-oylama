// Kelime Avı — ayarlar. Not Defteri ile düzenleyebilirsin.

window.OYUN_AYAR = {
  kanal: "irlandas",
  chatroomId: "6439653",

  // Kaç saniyede bir yeni harf açılsın
  ipucuAraligi: 7,

  // Kelime bilinince yeni kelimeye kaç saniye sonra geçilsin
  sonrakiTur: 6,

  // En fazla kaç puan (hiç harf açılmadan bilen alır). Her açılan harf 1 puan düşürür, en az 2.
  enYuksekPuan: 10,

  // Kelimeler. İstediğin kategoriyi ekle/sil. Türkçe karakter şart değil;
  // chat "kokorec" yazsa da "KOKOREÇ" sayılır.
  kategoriler: [
    { ad: "Yemek", kelimeler: ["Lahmacun", "Kokoreç", "Menemen", "Mantı", "Baklava", "İskender", "Kumpir",
      "Künefe", "Tantuni", "Gözleme", "Midye dolma", "Çiğ köfte", "Kuru fasulye", "Kazandibi", "Börek"] },
    { ad: "İstanbul", kelimeler: ["Kadıköy", "Beşiktaş", "Üsküdar", "Karaköy", "Eminönü", "Galata", "Balat",
      "Ortaköy", "Kız Kulesi", "Kapalıçarşı", "Bebek", "Sultanahmet", "Moda", "Cihangir"] },
    { ad: "Şehir", kelimeler: ["Trabzon", "Eskişehir", "Gaziantep", "Antalya", "Erzurum", "Mardin", "Bursa",
      "İzmir", "Kastamonu", "Diyarbakır", "Çanakkale", "Hatay"] },
    { ad: "Hayvan", kelimeler: ["Martı", "Sincap", "Kirpi", "Flamingo", "Penguen", "Zürafa", "Timsah",
      "Kaplumbağa", "Ahtapot", "Yunus", "Baykuş"] },
    { ad: "Meslek", kelimeler: ["Taksici", "Berber", "Kasap", "Simitçi", "İtfaiyeci", "Astronot", "Kuaför",
      "Garson", "Kurye", "Dalgıç"] },
    { ad: "Yayın", kelimeler: ["Takipçi", "Moderatör", "Powerbank", "Kamera", "Bağış", "Abone", "Mikrofon",
      "Selfie çubuğu", "Bağlantı"] },
  ],
};
