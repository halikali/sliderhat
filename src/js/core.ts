import { ISliderOptions } from "./interfaces";

class Slider {
  private counter: number = 0;
  private sliderId: string = "";
  private slider: any;
  private container: any;
  private prevButton: any;
  private nextButton: any;
  private bulletWrapper: any;
  private sliderItem: any;
  private duration: number = 5000;
  private interval: any = null;
  private sliderOptions: ISliderOptions = {} as ISliderOptions;

  constructor(slider: string, options: ISliderOptions = {} as ISliderOptions) {
    this.counter = 0;
    this.slider = document.getElementById(slider);
    this.container = document.querySelector(`#${slider} .slider__container`);
    this.prevButton = document.querySelector(
      `#${slider} .slider__arrow.slider__arrow--left`
    );
    this.nextButton = document.querySelector(
      `#${slider} .slider__arrow.slider__arrow--right`
    );
    this.bulletWrapper = document.querySelector(`#${slider} .slider__bullets`);
    this.sliderItem = document.querySelector(`#${slider} .slider__item`);
    this.duration = this.sliderOptions.autoSlideTimer || 5000;
    this.sliderId = slider;
    this.sliderOptions = options;
  }

  public slide() {
    this.nextButton.addEventListener("click", () => {
      this.nextSlide();
    });

    this.prevButton.addEventListener("click", () => {
      this.prevSlide();
    });

    this.bulletWrapper && this.createBullets();
    this.bulletWrapper && this.setActiveBullet();
    this.addActiveSlideClass();
    this.sliderOptions.changeSlideOnBulletHover && this.setBulletHover();
    this.sliderOptions.bulletImages && this.setBulletImage();
    this.sliderOptions.bulletDefaultImage && this.setBulletDefaultImage();
    !this.sliderOptions.infiniteSlide && this.checkArrowVisibility();
    this.sliderOptions.clickableBullet &&
      this.bulletWrapper &&
      this.clickBullet();
    this.sliderOptions.autoslide &&
      this.startAutoSlide(this.nextSlide.bind(this), this.duration);
    this.sliderOptions.autoslide && this.checkHoverForAutoSlide();
    if (this.sliderOptions.verticalSlider) {
      this.slider.classList.add("slider--vertical");
      this.sliderOptions.fitVerticalContent
        ? (this.container.style.paddingLeft =
            this.bulletWrapper.clientWidth + "px")
        : 0;
    }
  }

  private startAutoSlide(callback: any, duration: number) {
    this.interval = setInterval(callback, duration);
  }

  private stopAutoSlide() {
    clearInterval(this.interval);
  }

  private checkHoverForAutoSlide() {
    Array.from([this.bulletWrapper, this.nextButton, this.prevButton]).forEach(
      (item) => {
        item &&
          item.addEventListener("mouseover", () => {
            this.stopAutoSlide();
          });

        item &&
          item.addEventListener("mouseout", () => {
            this.startAutoSlide(this.nextSlide.bind(this), this.duration);
          });
      }
    );
  }

  private prevSlide() {
    this.counter--;
    if (!this.sliderOptions.infiniteSlide && this.counter < 0) {
      this.counter = 0;
    }

    if (this.counter < 0) {
      this.counter = this.container.children.length - 1;
    }

    if (this.sliderOptions.verticalSlider) {
      this.container.style.transform = `translateY(-${
        this.slider.clientHeight * this.counter
      }px )`;
    } else {
      this.container.style.transform = `translateX(-${
        this.slider.clientWidth * this.counter
      }px )`;
    }
    this.addActiveSlideClass();
    this.bulletWrapper && this.setActiveBullet();
    !this.sliderOptions.infiniteSlide && this.checkArrowVisibility();
  }

  private nextSlide() {
    this.counter++;

    if (
      !this.sliderOptions.infiniteSlide &&
      this.counter > this.container.children.length - 1
    ) {
      this.counter = this.container.children.length - 1;
    }

    if (this.counter >= this.container.children.length || this.counter < 0) {
      this.counter = 0;
    }

    if (this.sliderOptions.verticalSlider) {
      this.container.style.transform = `translateY(100px)`;
    }

    if (this.sliderOptions.verticalSlider) {
      this.container.style.transform = `translateY(-${
        this.slider.clientHeight * this.counter
      }px)`;
    } else {
      this.container.style.transform = `translateX(-${
        this.slider.clientWidth * this.counter
      }px )`;
    }

    this.addActiveSlideClass();
    this.bulletWrapper && this.setActiveBullet();
    !this.sliderOptions.infiniteSlide && this.checkArrowVisibility();
  }

  private createBullets() {
    Array.from(this.container.children).map((item, index) => {
      const bullet: HTMLSpanElement = document.createElement("span");
      bullet.classList.add("slider__bullet");
      this.bulletWrapper.appendChild(bullet);
      this.sliderOptions.showBulletIndex
        ? (bullet.innerText = String(index + 1))
        : null;

      this.bulletWrapper && this.setActiveBullet();
    });
  }

  private addActiveSlideClass() {
    this.removeActiveSlideClass();
    this.container.children[this.counter].classList.add("slider__item--active");
  }

  private clickBullet() {
    const bullets = document.querySelectorAll(
      `#${this.sliderId} .slider__bullet`
    );

    Array.from(bullets).forEach((item, index) => {
      item.addEventListener("click", () => {
        this.counter = index;
        this.container.style.transform = `translateX(-${
          this.container.clientWidth * this.counter
        }px )`;

        this.bulletWrapper && this.setActiveBullet();
      });
    });
  }

  private checkArrowVisibility() {
    if (this.counter === 0) {
      this.prevButton.classList.add("slider__arrow--passive");
    } else {
      this.prevButton.classList.remove("slider__arrow--passive");
    }

    if (this.counter === this.container.children.length - 1) {
      this.nextButton.classList.add("slider__arrow--passive");
    } else {
      this.nextButton.classList.remove("slider__arrow--passive");
    }
  }

  private removeActiveSlideClass() {
    Array.from(this.container.children).forEach((item: any) => {
      item.classList.remove("slider__item--active");
    });
  }

  private setActiveBullet() {
    this.clearActiveBulletClass();
    this.addActiveSlideClass();
    this.bulletWrapper.children[this.counter].classList.add(
      "slider__bullet--active"
    );
    !this.sliderOptions.infiniteSlide && this.checkArrowVisibility();
  }

  private clearActiveBulletClass() {
    Array.from(this.bulletWrapper.children).forEach((item: any) => {
      item.classList.remove("slider__bullet--active");
    });
  }

  private setBulletHover() {
    const sliderBullets = document.querySelectorAll(
      `#${this.sliderId} .slider__bullet`
    );

    for (let i = 0; i < sliderBullets.length; i++) {
      Array.from(sliderBullets)[i].addEventListener("mouseover", () => {
        this.counter = i;
        this.container.style.transform = `translateX(-${
          this.container.clientWidth * this.counter
        }px )`;

        this.bulletWrapper && this.setActiveBullet();
      });
    }
  }

  private setBulletImage() {
    const sliderBullets: any = document.querySelectorAll(
      `#${this.sliderId} .slider__bullet`
    );
    Array.from(sliderBullets).forEach((item: any, index) => {
      (item.style.backgroundImage = `url("${
        this.sliderOptions.bulletImages &&
        this.sliderOptions.bulletImages[index]
      }")`),
        (sliderBullets[index].style.backgroundSize = "cover"),
        (sliderBullets[index].style.backgroundPosition = "center");
    });
  }

  private setBulletDefaultImage() {
    const sliderBullets: any = document.querySelectorAll(
      `#${this.sliderId} .slider__bullet`
    );
    Array.from(sliderBullets).forEach((item: any, index) => {
      (item.style.backgroundImage = `url("${
        this.container.children[index].firstElementChild &&
        this.container.children[index].firstElementChild.currentSrc
      }")`),
        (sliderBullets[index].style.backgroundSize = "cover"),
        (sliderBullets[index].style.backgroundPosition = "center");
    });
  }
}

export { Slider };
