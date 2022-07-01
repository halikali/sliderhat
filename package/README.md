# Sliderhat 

Bu proje basit sliderları hızlı bir şekilde oluşturmayı sağlayan bir projedir. Yalnızca deneme amacıyla oluşturulmuştur.

## Başlarken

Projenize kurmak için sliderhat'i bilgisayarınıza indiriniz.

```
  npm i sliderhat
```

## Kullanmaya başlamak için

### Html yapısı

Slider'ın doğru çalışabilmesi için:
- Ana kapsayıcı olacak div'e "slider" class'ı verilmelidir.
- Sliderda yer alacak itemler bir div ile sarmalanmalı ve kapsayıcı olan div "slider__container" class'ını içermelidir.
- Slider itemlarının herbiri birer div içerisinde olmalı ve kapsayıcı div'leri "slider__item" class'ına sahip olmalıdır.
- Slider yönlendirme okları bir kapsayıcı içerisinde olmalı ve kapsayıcı div'in class'ı "slider__arrows" olmalıdır.
- Yönlendirme okları birer span içerisinde yer almalı ve span elementleri hem ileri hem de geri yönlendirme oku için "slider__arrow" olmalıdır. İleri yönlendirme oku için 2. eklenecek olan class "slider__arrow--right" ve geri yönlendirme butonu için ise 2. eklenecek olan class "slider__arrow--left" olmalıdır.
- Bullet eklemek için içerisi boş olacak şekilde bir div açılmalı ve "slider__bullets" class'ı eklenmelidir.


## Örnek yapı
Aşağıda yer alan yapı örnek teşkil etmesi adına eklenmmiştir. 
```
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
    <span class="slider__arrow slider__arrow--left">
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
    <span class="slider__arrow slider__arrow--right">
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
Sliderhat slider'ları yakalamak için id'leri kullanır. kapsayıcı olan  ve "slider" class'ını eklenen div'e bir id değeri verilmelidir.
Daha sonrasında slider'ı javascprit tarafında initialize etmek için bu verilen id değeri kullanılacaktır.

- ## Sliderhat proje dosyasına çağırılır
```
const Slider = require("sliderhat");
```

- ## Slider initialize edilir 
Slider new anahtar kelimesi ile çağırılır ve parametre olarak ilgili slider'ın id değeri gönderilir.
```
const mainSlider = new Slider("main-slider")
```

- ## Slider çalıştırılır
```
mainSlider.slide();
```

# Slider için eklenebilecek parametreler ve kullanım örneği

|Adı|Tipi|Başlangıç Değeri|Açıklama|
|---|---|---|---|
|changeSlideOnBulletHover|boolean|false|Mouse aracılığıyla bullet'ın üzerine gelindiğinde sliderı ilgili kaydırır|
|showBulletIndex|boolean|false|Bullet'ların içerisinde index numarasını yazar|   
|bulletImages|string[]|-|Bulletlar'a istenilen resimleri eklemeyi sağlar. Bir array içerisinde gönderilen url adresleri sırasıyla ilgili bulletlara yerleşir.|   
|bulletDefaultImage|boolean|false|Slider'da yer alan resimlerin, kendi index değeri ile eşleşen bulletlarda da görünmesini sağlar.|   
|infiniteSlide|boolean|false|Slider'ın son slide'a ulaştığında tekrar ilk slide'a geçerek durmadan devam etmesini sağlar|   
|clickableBullet|boolean|false|Bullet'lara tıklandığında slider'ı ilgili slide'a kaydırır.|   
|autoSlide|boolean|false|Slider'ın belirli bir süre sonra otomatik olarak sıradaki slide'a geçmesini sağlar|   
|autoSlideTimer|number|5000|Slider'ın ne kadar süre sonra sıradaki slide'a geçiş yapacağını belirler. Milisaniye cinsindendir.|
|verticalSlider|boolean|false|Slider'ı dikey olarak çalışacak şekilde değiştirir. Bu özelliği kullanacaksanız eklediğiniz yönlendirme oklarını yukarıyı ve aşağıyı işaret edecek oklar ile değiştirmek isteyebilirsiniz.|      
|fitVerticalContent|boolean|false|Slider dikey olarak kullanıldığında slider bullet'ları otomatik olarak sol tarafa yerleşir ve şeffaf arkaplan ile slide'ın üzerinde yer alır.Bu özellik slide'ı bullet'ların bitiminden itibaren başlatır.|   


## Parametreleri kullanmak
Parametreleri kullanmak için slider fonksiyonuna ikinci bir parametre olarak obje şeklinde gönderilir.

#### Örnek olarak
```
const mainSlider = new Slider("main-slider", {
  clickableBullet: true,
  autoslide: true,
  autoSlideTimer: 4000,
  infiniteSlide: true,
});
```
veya 
```
let sliderObj = {
  clickableBullet: true,
  autoslide: true,
  autoSlideTimer: 4000,
  infiniteSlide: true,
}

const mainSlider = new Slider("main-slider",sliderObj);
```