# Image Loading Blur Effect

Bu loyiha foydalanuvchiga rasm yuklanish jarayonini interaktiv va qiziqarli tarzda ko‘rsatish uchun mo‘ljallangan. Rasm yuklanayotganda xira (blur) bo‘lib, yuklanish foizi oshgani sari to‘liq aniqlik hosil qiladi. Tugma orqali jarayonni qayta boshlash mumkin.

---

## Loyihada ishlatilgan texnologiyalar

- **HTML**:  
  - Rasmni yuklash foizini va qayta yuklash tugmasini ko‘rsatish uchun asosiy struktura yaratilgan.  
  - **`<button>`** elementi: Rasmni qayta yuklash tugmasi.
  - **`<img>`** elementi: Yuklanayotgan rasm.  
  - **`<h1>`** elementi: Yuklanish foizini ko‘rsatish.

- **CSS**:  
  - Rasm yuklanishidagi xira ko‘rinish va animatsiya uchun foydalanilgan.  
  - **`opacity`** orqali rasmning ko‘rinishini dinamik o‘zgartirishga asos bo‘ladi.  
  - Tugma va yuklanish foizi uchun zamonaviy dizayn elementlari qo‘llangan.  
  - **`position`** yordamida barcha elementlar sahifaning kerakli joyiga joylashtirilgan.

- **JavaScript**:  
  - Yuklanish foizini oshirish uchun **`setInterval`** funksiyasidan foydalanilgan.  
  - Rasmning ko‘rinishini yuklanish foiziga bog‘langan holda o‘zgartirish uchun **`img.style.opacity`** ishlatilgan.  
  - Tugma bosilganda jarayonni qayta boshlash uchun dinamik funksiya yozilgan.
