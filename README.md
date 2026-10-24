# Egzersiz Planı

Minimal, mobil ve masaüstü uyumlu haftalık egzersiz planı.

## Özellikler

- Haftanın yedi günü için sabit program
- Günlük hareketleri tek dokunuşla işaretleme
- Geçmiş ve gelecek haftalar arasında gezinme
- Günlük ve haftalık ilerleme göstergeleri
- Verileri yalnızca tarayıcıda saklama (localStorage)
- Kurulum, hesap veya harici servis gerektirmeyen tek HTML sayfası

## Kullanım

[Web uygulamasını aç](https://hmetgundogdu.github.io/my-egzersize-program/)

Yerel kullanım için `index.html` dosyasını bir tarayıcıda açmak yeterlidir.

**Not:** İşaretlemeler yalnızca kullanılan cihazın ve tarayıcının yerel depolama alanında tutulur. Cihazlar arasında otomatik senkronizasyon yoktur; tarayıcı verileri temizlenirse kayıtlar da silinebilir.

## Yayınlama

GitHub Pages için `Settings → Pages → Build and deployment → Source: GitHub Actions` seçilir. `.github/workflows/pages.yml` iş akışı `main` dalına gönderilen değişiklikleri yayımlar.

## Teknoloji

HTML, CSS ve vanilla JavaScript. Harici bağımlılık yok.
