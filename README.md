# Proje Teknik Detayları

Projenin genelinde **slide** ve **image** kullanımı yoğun olduğu için **Next.js** tercih yerine bir karar.  
Next.js’in `Image` bileşeni ve render özellikleri sayesinde, proje canlıya alınsaydı **SEO açısından önemli katkılar** sağlayacaktı.

## Yapı ve Organizasyon

- **Modüler ve tekrar kullanılabilir component** yapısı kuruldu.
- Çok sayıda görsel, ikon ve vektör bulunduğundan dosyalara **anlamlı isimler** verilerek yazılımcılar açısından erişilebilirlik artırıldı.
- Ortak bir **container yapısı** ile sayfada gerekli hizalamalar sağlandı.

## Stil ve Responsive Tasarım

- **TailwindCSS** kullanılarak responsive uyumluluk artırıldı ve klasik CSS kullanımı minimum seviyede tutuldu.
- Normal CSS dosyalarında Tailwind’in `@apply` özelliği kullanıldı.  
  Böylece doğrudan Tailwind sınıfları ile erişilemeyen yapılara müdahale edilerek **pure CSS yazma ihtiyacı azaltıldı** ve **optimizasyon artırıldı**.

## Tasarım ve Performans

- Figma tasarımları baz alınarak geliştirme yapıldı.
- Eğer “extra” başlığındaki tasarım da uygulanacak olsaydı, farklı sayfalarda tekrar eden yapılar göz önünde bulundurularak dosya yapısı buna göre organize edilirdi.
- **Özel imgeler** dışında, performans avantajı nedeniyle **ikon kütüphanesi** kullanıldı.  
  Çünkü ikonların yüklenme maliyeti görsellere göre çok daha düşüktür.
- Projede kullanılan **Next.js Image** özelliği sayesinde görseller için lazy loading, otomatik optimizasyon ve farklı çözünürlükler desteklendi.  
  Bu da **yükleme hızını ve SEO değerini** artırdı.

## Özel Bölümler

- **Monthly Favorites** kısmında sabit bir tasarım yerine, birden fazla “Top 10 Şarkı” listelenme ihtimaline karşı **Swiper.js ile responsive bir slider** eklendi.
- **Keşfet (Discover)** bölümünde ise belirtilen **mock datalar** projeye entegre edilerek ilgili alanlarda kullanıldı.

## Sonuç

Bu yaklaşımlar sayesinde proje:

- **Performans odaklı**,
- **SEO uyumlu**,
- **Erişilebilir ve geliştirici dostu**,
- **Modüler ve sürdürülebilir** bir yapıya kavuşmuştur.
