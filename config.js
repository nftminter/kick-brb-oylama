// Kick BRB klip oylaması — ayarlar
// Bu dosyayı Not Defteri ile açıp düzenleyebilirsin.

window.BRB_CONFIG = {
  // Kick kanal adın (kick.com/BURASI). Chat'i otomatik bulmaya çalışır.
  kanal: "irlandas",

  // Otomatik bulamazsa: tarayıcıda kick.com/api/v2/channels/KANAL_ADIN aç,
  // "chatroom":{"id":12345678 ...} kısmındaki sayıyı buraya yaz.
  chatroomId: "6439653",

  // Oylama kaç saniye sürsün
  oylamaSuresi: 30,

  // Ekranda kaç klip seçenek olarak çıksın (2-5 arası mantıklı)
  secenekSayisi: 3,

  // Kazanan klip bittikten kaç saniye sonra yeni oylama başlasın
  sonrakiTurBekleme: 4,

  // Ön izlemeler klibin kaçıncı saniyesinden başlasın
  onizlemeBaslangic: 3,

  // Kazanan klibin ses seviyesi (0.0 - 1.0)
  ses: 1.0,

  // Başlık yazıları
  baslik: "Yayın koptu, birazdan dönüyorum!",
  altBaslik: "Bu arada ne izleyelim? Chat'e numarasını yaz:",

  // Klip listesi. Boş bırakırsan klipler.js kullanılır
  // (klipleri-tara.bat'a çift tıklayınca klipler klasöründen otomatik oluşur).
  // Elle yazmak istersen örnek:
  // klipler: [
  //   { dosya: "klipler/kavga.mp4", baslik: "Taksici kavgası" },
  //   { dosya: "klipler/dusme.mp4", baslik: "Merdivenden düştüm" },
  // ],
  klipler: [],
};
