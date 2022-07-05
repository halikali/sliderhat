# Sliderhat 

Bu proje, basit sliderları hızlı bir şekilde oluşturmayı sağlayan bir projedir. Yalnızca deneme amacıyla oluşturulmuştur.

## Başlarken

Sliderhat'i projenize dahil edebilmeniz için kullanabileceğiniz 2 farklı seçenek bulunmaktadır.

+ ## NPM aracılığıyla dahil etmek için
  NPM kullanarak indirebilmek için aşağıdaki komutu kullanabilirsiniz.

  ```
    npm i sliderhat
  ```

  Sliderhat'i projenize stil dosyasıyla beraber import ederek öntanımlı özellikleri kullanmaya başlayabilir ve stilleri üzerinde özelleştirme yapabilirsiniz.


  ```javascript
  // Sliderhat javascript dosyasını import etmek için
  const { Slider } = require("sliderhat/core");

  // Sliderhat stil dosyasını import etmek için
  import "sliderhat/css";
  ```

  ### Node_modules altından erişmek isterseniz
  Stil dosyasını çağırmak için HTML'de head tag'i içerisine aşağıdaki linki yerleştirerek stil dosyasını projenize dahil edebilirsiniz.
  ```html
  <link rel="stylesheet" href="./node_modules/sliderhat/slider.css">
  ```
  Javascript'i çağırmak için ise kullanacağınız Javascript dosyası içerisine aşağıdaki şekilde import edebilirsiniz.
  ```javascript
  import { Slider } from "./node_modules/sliderhat/core.js";
  ```


+ ## CDN aracılığıyla aracılığıyla dahil etmek için
  Stil dosyasını çağırmak için HTML'de head tag'i içerisine aşağıdaki linki yerleştirerek stil dosyasını projenize dahil edebilirsiniz.
  ```javascript
  <link rel="stylesheet" href="https://unpkg.com/sliderhat@1.1.9/slider.css">
  ```
  Javascript dosyasını çağırmak için ise kullanacağınız Javascript dosyası içerisine Sliderhat'i aşağıda belirtilen şekilde import edebilirsiniz.
  ```javascript
  import { Slider } from "https://unpkg.com/sliderhat@1.1.9/core.js";
  ```

# Kullanmaya başlamak için

## HTML yapısı

Slider'ın doğru çalışabilmesi için:
- Ana kapsayıcı olacak div'e "slider" class'ı verilmelidir.
- Sliderda yer alacak itemler bir div ile sarmalanmalı ve kapsayıcı olan div "slider__container" class'ını içermelidir.
- Slider itemlarının herbiri birer div içerisinde olmalı ve kapsayıcı div'leri "slider__item" class'ını içermelidir.
- Slider yönlendirme okları bir kapsayıcı içerisinde olmalı ve kapsayıcı div "slider__arrows" class'ını içermelidir.
- Yönlendirme okları birer span içerisinde yer almalı ve span elementleri hem ileri hem de geri yönlendirme oku için "slider__arrow" class'ına sahip olmalıdır. İleri yönlendirme oku için 2. eklenecek olan class "slider__arrow--next" ve geri yönlendirme butonu için ise 2. eklenecek olan class "slider__arrow--prev" olmalıdır.
- Bullet eklemek için içerisi boş olacak şekilde bir div açılmalı ve "slider__bullets" class'ını içermelidir.


## Örnek yapı
Aşağıda yer alan yapı örnek teşkil etmesi adına eklenmiştir. 
```html
<div class="slider">
  <div class="slider__container">
    <div class="slider__item">slide 1</div>
    <div class="slider__item">slide 2</div>
    <div class="slider__item">slide 3</div>
    <div class="slider__item">slide 4</div>
    <div class="slider__item">slide 5</div>
    <div class="slider__item">slide 6</div>
    <div class="slider__item">slide 7</div>
  </div>

  <div class="slider__bullets"></div>
  <div class="slider__arrows">
    <span class="slider__arrow slider__arrow--prev">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
       </svg>
    </span>
    <span class="slider__arrow slider__arrow--next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
    </span>
  </div>
</div>
```

## Slider'ı başlatmak için
Sliderhat slider'ları yakalamak için id'leri kullanır. Kapsayıcı olan ve "slider" class'ı eklenen div'e bir id değeri verilmelidir.
Daha sonrasında slider'ı Javascript tarafında initialize etmek için bu verilen id değeri kullanılacaktır. Yukarıda belirtilmiş olan yollardan birisini tercih ettikten sonra Sliderhat'i aşağıda belirtilen şekilde kullanmaya başlayabilirsiniz.


- ## Slider initialize edilir 
  Slider new anahtar kelimesi ile çağırılır ve parametre olarak ilgili slider'ın id değeri gönderilir.
  ```javascript
  const mainSlider = new Slider(...)
  ```

- ## Slider çalıştırılır
  ```javascript
  mainSlider.slide();
  ```

Sliderhat ile oluşturduğunuz slider'ları özelleştirmek için kullanabileceğiniz parametreler bulunmaktadır. Parametrelerin özellikleri ve kullanım şekli aşağıda belirtilmiştir.

# Slider için eklenebilecek parametreler ve kullanım örneği

|Adı|Tipi|Başlangıç Değeri|Açıklama|
|---|---|---|---|
|changeSlideOnBulletHover|boolean|false|Mouse aracılığıyla bullet'ın üzerine gelindiğinde sliderı ilgili kaydırır|
|showBulletIndex|boolean|false|Bullet'ların içerisinde index numarasını yazar|   
|bulletImages|string[ ]|-|Bulletlar'a istenilen resimleri eklemeyi sağlar. Bir array içerisinde gönderilen url adresleri sırasıyla ilgili bulletlara yerleşir.|   
|bulletDefaultImage|boolean|false|Slider'da yer alan resimlerin, kendi index değeri ile eşleşen bulletlarda da görünmesini sağlar.|   
|infiniteSlide|boolean|false|Slider'ın son slide'a ulaştığında tekrar ilk slide'a geçerek durmadan devam etmesini sağlar|   
|clickableBullet|boolean|false|Bullet'lara tıklandığında slider'ı ilgili slide'a kaydırır.|   
|autoSlide|boolean|false|Slider'ın belirli bir süre sonra otomatik olarak sıradaki slide'a geçmesini sağlar|   
|autoSlideTimer|number|5000|Slider'ın ne kadar süre sonra sıradaki slide'a geçiş yapacağını belirler. Milisaniye cinsindendir.|
|verticalSlider|boolean|false|Slider'ı dikey olarak çalışacak şekilde değiştirir. Bu özelliği kullanacaksanız eklediğiniz yönlendirme oklarını yukarıyı ve aşağıyı işaret edecek oklar ile değiştirmek isteyebilirsiniz.|      
|fitVerticalContent|boolean|false|Slider dikey olarak kullanıldığında slider bullet'ları otomatik olarak sol tarafa yerleşir ve şeffaf arkaplan ile slide'ın üzerinde yer alır.Bu özellik slide'ı bullet'ların bitiminden itibaren başlatır.|   


## Parametreleri kullanmak
Parametreleri kullanmak için slider fonksiyonuna ikinci parametre olarak bir obje gönderilir.

#### Örnek olarak
```javascript
const mainSlider = new Slider("main-slider", {
  clickableBullet: true,
  autoSlide: true,
  autoSlideTimer: 4000,
  infiniteSlide: true,
});

mainSlider.slide();
```
veya 
```javascript
let sliderObj = {
  clickableBullet: true,
  autoSlide: true,
  autoSlideTimer: 4000,
  infiniteSlide: true,
}

const mainSlider = new Slider("main-slider",sliderObj);

mainSlider.slide();
```
