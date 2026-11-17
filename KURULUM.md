# Kick IRL: yayın kopunca chat'in klip oylaması

Telefon bağlantısı koptuğunda OBS "BRB" sahnesine geçer. Bu sahnede 3 klibin ön izlemesi çıkar,
chat `1`, `2` veya `3` yazar, süre bitince en çok oy alan klip tam ekran oynar. Klip bitince yeni
oylama başlar. Telefon geri bağlanınca OBS canlı sahneye döner.

## Önce şunu bil

Telefondan **direkt Kick'e** (Kick uygulaması, Prism, Larix → Kick) yayın yapıyorsan bu çalışmaz:
telefon koptuğu an Kick'teki yayın da biter ve ekrana bir şey basacak kimse kalmaz.

Gereken yapı:

```
Telefon (Moblin / IRL Pro / Larix / BELABOX)
   │  SRT veya RTMP
   ▼
Ara sunucu + OBS  (evdeki PC ya da bulut sunucu, 7/24 açık)
   │  RTMP
   ▼
Kick
```

Telefon koptuğunda Kick'e giden yayın kopmaz, çünkü Kick'e yayını OBS yapıyor. OBS sadece
sahneyi değiştirir.

Hazır çözümler: **IRLToolkit**, **BELABOX Cloud**, **IRLHosting** gibi servisler bulut OBS +
SRT sunucu + otomatik sahne geçişini hazır verir. Kendin kurmak istersen: evdeki PC'de OBS +
SRT/RTMP sunucu (ör. SRT Live Server veya nginx-rtmp) + **NOALBS**.

## 1) Otomatik sahne geçişi (NOALBS)

NOALBS, telefondan gelen bitrate'i izler:
- bağlantı iyi → `CANLI` sahnesi
- bitrate düşük → `DUSUK` sahnesi (isteğe bağlı)
- bağlantı yok → `BRB` sahnesi

OBS'te 3 sahne aç (`CANLI`, `DUSUK`, `BRB`), NOALBS ayarında sahne adlarını bunlarla eşle.
OBS'te Araçlar → WebSocket Sunucusu Ayarları'ndan websocket'i aç, NOALBS'e şifresini ver.
NOALBS ayrıca chat'ten `!bitrate`, `!switch` gibi komutlar da destekler.

## 2) Klipleri koy

1. Videoları `klipler` klasörüne at (mp4 en sağlamı; H.264 + AAC).
2. `klipleri-tara.bat`'a çift tıkla. `klipler.js` otomatik oluşur, dosya adı başlık olarak görünür.
   Dosya adını `Taksici kavgası.mp4` gibi koyarsan ekranda öyle yazar.
3. Örnek satırlar (`ornek-1.mp4` …) gerçek video değil; tarayınca kendiliğinden silinir.

Kick'teki kliplerini kullanmak istersen önce indirip bu klasöre koy.

## 3) Ayarlar (`config.js`)

Not Defteri ile aç:
- `kanal`: Kick kanal adın. Chat'i otomatik bulmaya çalışır.
- `chatroomId`: Otomatik bulamazsa (sağ üstte "Chat bulunamadı" yazar) tarayıcıda
  `https://kick.com/api/v2/channels/KANAL_ADIN` aç, `"chatroom":{"id": 12345678` kısmındaki sayıyı yaz.
- `oylamaSuresi`, `secenekSayisi`, `sonrakiTurBekleme`, `ses`, başlık yazıları.

## 4) OBS'e ekle

`BRB` sahnesinde: Kaynak ekle → **Tarayıcı**
- **Yerel dosya** kutusunu işaretle → `index.html`'i seç
- Genişlik `1920`, Yükseklik `1080`
- **Sesi OBS üzerinden kontrol et** → işaretle (klip sesi yayına gitsin diye)
- **Görünmez olduğunda kaynağı kapat** → işaretle
- **Sahne etkinleştiğinde tarayıcıyı yenile** → işaretle

Son iki ayar sayesinde her kopuşta oylama baştan başlar, canlıya dönünce video arkada çalmaz.

## 5) Dene

OBS'e eklemeden önce `index.html`'i Chrome'da şöyle aç (adresin sonuna `?test=1` ekle):

```
file:///C:/.../kick-brb-oylama/index.html?test=1&sure=10
```

Test modunda sahte izleyiciler oy verir, klavyeden 1/2/3'e basarak sen de oy verebilirsin.
Adres satırından ayar da geçebilirsin: `?kanal=xxx`, `?chatroom=123`, `?sure=20`, `?secenek=4`.

## Kurallar

- Kişi başı 1 oy. Fikrini değiştiren son yazdığına sayılır.
- Sadece mesajın tamamı numara ise oy sayılır (`1`, `2`, `!3`). "1 numara efsane" sayılmaz.
- Beraberlikte kura çekilir; hiç oy gelmezse rastgele seçer.
- Arka arkaya iki turda aynı klipler çıkmaz (yeterince klip varsa).

## Not

Chat okuma, Kick'in kendi sitesinin kullandığı Pusher bağlantısıyla yapılıyor (giriş/token
gerekmez, sadece okur). Bağlantı anahtarını her seferinde Kick'ten güncel olarak ister, alamazsa
bilinen son anahtarı kullanır. Sağ üstte "Chat bağlı · 37 mesaj" gibi bir sayaç görürsün;
sayı artıyorsa chat okunuyor demektir.

Bu resmi bir API değil. Kick altyapısını değiştirirse sayaç artmaz; o zaman `index.html`'deki
"Kick chat" bölümünün güncellenmesi gerekir.
