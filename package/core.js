var __classPrivateFieldSet =
  (this && this.__classPrivateFieldSet) ||
  function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (
      typeof state === "function"
        ? receiver !== state || !f
        : !state.has(receiver)
    )
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it"
      );
    return (
      kind === "a"
        ? f.call(receiver, value)
        : f
        ? (f.value = value)
        : state.set(receiver, value),
      value
    );
  };
var __classPrivateFieldGet =
  (this && this.__classPrivateFieldGet) ||
  function (receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (
      typeof state === "function"
        ? receiver !== state || !f
        : !state.has(receiver)
    )
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return kind === "m"
      ? f
      : kind === "a"
      ? f.call(receiver)
      : f
      ? f.value
      : state.get(receiver);
  };
var _Slider_instances,
  _Slider_counter,
  _Slider_sliderId,
  _Slider_slider,
  _Slider_container,
  _Slider_prevButton,
  _Slider_nextButton,
  _Slider_bulletWrapper,
  _Slider_duration,
  _Slider_interval,
  _Slider_sliderOptions,
  _Slider_startautoSlide,
  _Slider_stopautoSlide,
  _Slider_checkHoverForautoSlide,
  _Slider_prevSlide,
  _Slider_nextSlide,
  _Slider_createBullets,
  _Slider_addActiveSlideClass,
  _Slider_clickBullet,
  _Slider_checkArrowVisibility,
  _Slider_removeActiveSlideClass,
  _Slider_setActiveBullet,
  _Slider_clearActiveBulletClass,
  _Slider_setBulletHover,
  _Slider_setBulletImage,
  _Slider_setBulletDefaultImage;
class Slider {
  constructor(slider, options = {}) {
    _Slider_instances.add(this);
    _Slider_counter.set(this, 0);
    _Slider_sliderId.set(this, "");
    _Slider_slider.set(this, void 0);
    _Slider_container.set(this, void 0);
    _Slider_prevButton.set(this, void 0);
    _Slider_nextButton.set(this, void 0);
    _Slider_bulletWrapper.set(this, void 0);
    _Slider_duration.set(this, 5000);
    _Slider_interval.set(this, null);
    _Slider_sliderOptions.set(this, {});
    __classPrivateFieldSet(this, _Slider_counter, 0, "f");
    __classPrivateFieldSet(
      this,
      _Slider_slider,
      document.getElementById(slider),
      "f"
    );
    __classPrivateFieldSet(
      this,
      _Slider_container,
      document.querySelector(`#${slider} .slider__container`),
      "f"
    );
    __classPrivateFieldSet(
      this,
      _Slider_prevButton,
      document.querySelector(`#${slider} .slider__arrow.slider__arrow--left`),
      "f"
    );
    __classPrivateFieldSet(
      this,
      _Slider_nextButton,
      document.querySelector(`#${slider} .slider__arrow.slider__arrow--right`),
      "f"
    );
    __classPrivateFieldSet(
      this,
      _Slider_bulletWrapper,
      document.querySelector(`#${slider} .slider__bullets`),
      "f"
    );
    __classPrivateFieldSet(
      this,
      _Slider_duration,
      __classPrivateFieldGet(this, _Slider_sliderOptions, "f").autoSlideTimer ||
        5000,
      "f"
    );
    __classPrivateFieldSet(this, _Slider_sliderId, slider, "f");
    __classPrivateFieldSet(this, _Slider_sliderOptions, options, "f");
  }
  slide() {
    __classPrivateFieldGet(this, _Slider_nextButton, "f").addEventListener(
      "click",
      () => {
        __classPrivateFieldGet(
          this,
          _Slider_instances,
          "m",
          _Slider_nextSlide
        ).call(this);
      }
    );
    __classPrivateFieldGet(this, _Slider_prevButton, "f").addEventListener(
      "click",
      () => {
        __classPrivateFieldGet(
          this,
          _Slider_instances,
          "m",
          _Slider_prevSlide
        ).call(this);
      }
    );
    __classPrivateFieldGet(this, _Slider_bulletWrapper, "f") &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_createBullets
      ).call(this);
    __classPrivateFieldGet(this, _Slider_bulletWrapper, "f") &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_setActiveBullet
      ).call(this);
    __classPrivateFieldGet(
      this,
      _Slider_instances,
      "m",
      _Slider_addActiveSlideClass
    ).call(this);
    __classPrivateFieldGet(this, _Slider_sliderOptions, "f")
      .changeSlideOnBulletHover &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_setBulletHover
      ).call(this);
    __classPrivateFieldGet(this, _Slider_sliderOptions, "f").bulletImages &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_setBulletImage
      ).call(this);
    __classPrivateFieldGet(this, _Slider_sliderOptions, "f")
      .bulletDefaultImage &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_setBulletDefaultImage
      ).call(this);
    !__classPrivateFieldGet(this, _Slider_sliderOptions, "f").infiniteSlide &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_checkArrowVisibility
      ).call(this);
    __classPrivateFieldGet(this, _Slider_sliderOptions, "f").clickableBullet &&
      __classPrivateFieldGet(this, _Slider_bulletWrapper, "f") &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_clickBullet
      ).call(this);
    __classPrivateFieldGet(this, _Slider_sliderOptions, "f").autoSlide &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_startautoSlide
      ).call(
        this,
        __classPrivateFieldGet(
          this,
          _Slider_instances,
          "m",
          _Slider_nextSlide
        ).bind(this),
        __classPrivateFieldGet(this, _Slider_duration, "f")
      );
    __classPrivateFieldGet(this, _Slider_sliderOptions, "f").autoSlide &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_checkHoverForautoSlide
      ).call(this);
    if (
      __classPrivateFieldGet(this, _Slider_sliderOptions, "f").verticalSlider
    ) {
      __classPrivateFieldGet(this, _Slider_slider, "f").classList.add(
        "slider--vertical"
      );
      __classPrivateFieldGet(this, _Slider_sliderOptions, "f")
        .fitVerticalContent
        ? (__classPrivateFieldGet(
            this,
            _Slider_container,
            "f"
          ).style.paddingLeft =
            __classPrivateFieldGet(this, _Slider_bulletWrapper, "f")
              .clientWidth + "px")
        : 0;
    }
  }
}
(_Slider_counter = new WeakMap()),
  (_Slider_sliderId = new WeakMap()),
  (_Slider_slider = new WeakMap()),
  (_Slider_container = new WeakMap()),
  (_Slider_prevButton = new WeakMap()),
  (_Slider_nextButton = new WeakMap()),
  (_Slider_bulletWrapper = new WeakMap()),
  (_Slider_duration = new WeakMap()),
  (_Slider_interval = new WeakMap()),
  (_Slider_sliderOptions = new WeakMap()),
  (_Slider_instances = new WeakSet()),
  (_Slider_startautoSlide = function _Slider_startautoSlide(
    callback,
    duration
  ) {
    __classPrivateFieldSet(
      this,
      _Slider_interval,
      setInterval(callback, duration),
      "f"
    );
  }),
  (_Slider_stopautoSlide = function _Slider_stopautoSlide() {
    clearInterval(__classPrivateFieldGet(this, _Slider_interval, "f"));
  }),
  (_Slider_checkHoverForautoSlide = function _Slider_checkHoverForautoSlide() {
    Array.from([
      __classPrivateFieldGet(this, _Slider_bulletWrapper, "f"),
      __classPrivateFieldGet(this, _Slider_nextButton, "f"),
      __classPrivateFieldGet(this, _Slider_prevButton, "f"),
    ]).forEach((item) => {
      item &&
        item.addEventListener("mouseover", () => {
          __classPrivateFieldGet(
            this,
            _Slider_instances,
            "m",
            _Slider_stopautoSlide
          ).call(this);
        });
      item &&
        item.addEventListener("mouseout", () => {
          __classPrivateFieldGet(
            this,
            _Slider_instances,
            "m",
            _Slider_startautoSlide
          ).call(
            this,
            __classPrivateFieldGet(
              this,
              _Slider_instances,
              "m",
              _Slider_nextSlide
            ).bind(this),
            __classPrivateFieldGet(this, _Slider_duration, "f")
          );
        });
    });
  }),
  (_Slider_prevSlide = function _Slider_prevSlide() {
    var _a;
    __classPrivateFieldSet(
      this,
      _Slider_counter,
      ((_a = __classPrivateFieldGet(this, _Slider_counter, "f")), _a--, _a),
      "f"
    );
    if (
      !__classPrivateFieldGet(this, _Slider_sliderOptions, "f").infiniteSlide &&
      __classPrivateFieldGet(this, _Slider_counter, "f") < 0
    ) {
      __classPrivateFieldSet(this, _Slider_counter, 0, "f");
    }
    if (__classPrivateFieldGet(this, _Slider_counter, "f") < 0) {
      __classPrivateFieldSet(
        this,
        _Slider_counter,
        __classPrivateFieldGet(this, _Slider_container, "f").children.length -
          1,
        "f"
      );
    }
    if (
      __classPrivateFieldGet(this, _Slider_sliderOptions, "f").verticalSlider
    ) {
      __classPrivateFieldGet(
        this,
        _Slider_container,
        "f"
      ).style.transform = `translateY(-${
        __classPrivateFieldGet(this, _Slider_slider, "f").clientHeight *
        __classPrivateFieldGet(this, _Slider_counter, "f")
      }px )`;
    } else {
      __classPrivateFieldGet(
        this,
        _Slider_container,
        "f"
      ).style.transform = `translateX(-${
        __classPrivateFieldGet(this, _Slider_slider, "f").clientWidth *
        __classPrivateFieldGet(this, _Slider_counter, "f")
      }px )`;
    }
    __classPrivateFieldGet(
      this,
      _Slider_instances,
      "m",
      _Slider_addActiveSlideClass
    ).call(this);
    __classPrivateFieldGet(this, _Slider_bulletWrapper, "f") &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_setActiveBullet
      ).call(this);
    !__classPrivateFieldGet(this, _Slider_sliderOptions, "f").infiniteSlide &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_checkArrowVisibility
      ).call(this);
  }),
  (_Slider_nextSlide = function _Slider_nextSlide() {
    var _a;
    __classPrivateFieldSet(
      this,
      _Slider_counter,
      ((_a = __classPrivateFieldGet(this, _Slider_counter, "f")), _a++, _a),
      "f"
    );
    if (
      !__classPrivateFieldGet(this, _Slider_sliderOptions, "f").infiniteSlide &&
      __classPrivateFieldGet(this, _Slider_counter, "f") >
        __classPrivateFieldGet(this, _Slider_container, "f").children.length - 1
    ) {
      __classPrivateFieldSet(
        this,
        _Slider_counter,
        __classPrivateFieldGet(this, _Slider_container, "f").children.length -
          1,
        "f"
      );
    }
    if (
      __classPrivateFieldGet(this, _Slider_counter, "f") >=
        __classPrivateFieldGet(this, _Slider_container, "f").children.length ||
      __classPrivateFieldGet(this, _Slider_counter, "f") < 0
    ) {
      __classPrivateFieldSet(this, _Slider_counter, 0, "f");
    }
    if (
      __classPrivateFieldGet(this, _Slider_sliderOptions, "f").verticalSlider
    ) {
      __classPrivateFieldGet(
        this,
        _Slider_container,
        "f"
      ).style.transform = `translateY(100px)`;
    }
    if (
      __classPrivateFieldGet(this, _Slider_sliderOptions, "f").verticalSlider
    ) {
      __classPrivateFieldGet(
        this,
        _Slider_container,
        "f"
      ).style.transform = `translateY(-${
        __classPrivateFieldGet(this, _Slider_slider, "f").clientHeight *
        __classPrivateFieldGet(this, _Slider_counter, "f")
      }px)`;
    } else {
      __classPrivateFieldGet(
        this,
        _Slider_container,
        "f"
      ).style.transform = `translateX(-${
        __classPrivateFieldGet(this, _Slider_slider, "f").clientWidth *
        __classPrivateFieldGet(this, _Slider_counter, "f")
      }px )`;
    }
    __classPrivateFieldGet(
      this,
      _Slider_instances,
      "m",
      _Slider_addActiveSlideClass
    ).call(this);
    __classPrivateFieldGet(this, _Slider_bulletWrapper, "f") &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_setActiveBullet
      ).call(this);
    !__classPrivateFieldGet(this, _Slider_sliderOptions, "f").infiniteSlide &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_checkArrowVisibility
      ).call(this);
  }),
  (_Slider_createBullets = function _Slider_createBullets() {
    Array.from(
      __classPrivateFieldGet(this, _Slider_container, "f").children
    ).map((item, index) => {
      const bullet = document.createElement("span");
      bullet.classList.add("slider__bullet");
      __classPrivateFieldGet(this, _Slider_bulletWrapper, "f").appendChild(
        bullet
      );
      __classPrivateFieldGet(this, _Slider_sliderOptions, "f").showBulletIndex
        ? (bullet.innerText = String(index + 1))
        : null;
      __classPrivateFieldGet(this, _Slider_bulletWrapper, "f") &&
        __classPrivateFieldGet(
          this,
          _Slider_instances,
          "m",
          _Slider_setActiveBullet
        ).call(this);
    });
  }),
  (_Slider_addActiveSlideClass = function _Slider_addActiveSlideClass() {
    __classPrivateFieldGet(
      this,
      _Slider_instances,
      "m",
      _Slider_removeActiveSlideClass
    ).call(this);
    __classPrivateFieldGet(this, _Slider_container, "f").children[
      __classPrivateFieldGet(this, _Slider_counter, "f")
    ].classList.add("slider__item--active");
  }),
  (_Slider_clickBullet = function _Slider_clickBullet() {
    const bullets = document.querySelectorAll(
      `#${__classPrivateFieldGet(this, _Slider_sliderId, "f")} .slider__bullet`
    );
    Array.from(bullets).forEach((item, index) => {
      item.addEventListener("click", () => {
        __classPrivateFieldSet(this, _Slider_counter, index, "f");
        __classPrivateFieldGet(
          this,
          _Slider_container,
          "f"
        ).style.transform = `translateX(-${
          __classPrivateFieldGet(this, _Slider_container, "f").clientWidth *
          __classPrivateFieldGet(this, _Slider_counter, "f")
        }px )`;
        __classPrivateFieldGet(this, _Slider_bulletWrapper, "f") &&
          __classPrivateFieldGet(
            this,
            _Slider_instances,
            "m",
            _Slider_setActiveBullet
          ).call(this);
      });
    });
  }),
  (_Slider_checkArrowVisibility = function _Slider_checkArrowVisibility() {
    if (__classPrivateFieldGet(this, _Slider_counter, "f") === 0) {
      __classPrivateFieldGet(this, _Slider_prevButton, "f").classList.add(
        "slider__arrow--passive"
      );
    } else {
      __classPrivateFieldGet(this, _Slider_prevButton, "f").classList.remove(
        "slider__arrow--passive"
      );
    }
    if (
      __classPrivateFieldGet(this, _Slider_counter, "f") ===
      __classPrivateFieldGet(this, _Slider_container, "f").children.length - 1
    ) {
      __classPrivateFieldGet(this, _Slider_nextButton, "f").classList.add(
        "slider__arrow--passive"
      );
    } else {
      __classPrivateFieldGet(this, _Slider_nextButton, "f").classList.remove(
        "slider__arrow--passive"
      );
    }
  }),
  (_Slider_removeActiveSlideClass = function _Slider_removeActiveSlideClass() {
    Array.from(
      __classPrivateFieldGet(this, _Slider_container, "f").children
    ).forEach((item) => {
      item.classList.remove("slider__item--active");
    });
  }),
  (_Slider_setActiveBullet = function _Slider_setActiveBullet() {
    __classPrivateFieldGet(
      this,
      _Slider_instances,
      "m",
      _Slider_clearActiveBulletClass
    ).call(this);
    __classPrivateFieldGet(
      this,
      _Slider_instances,
      "m",
      _Slider_addActiveSlideClass
    ).call(this);
    __classPrivateFieldGet(this, _Slider_bulletWrapper, "f").children[
      __classPrivateFieldGet(this, _Slider_counter, "f")
    ].classList.add("slider__bullet--active");
    !__classPrivateFieldGet(this, _Slider_sliderOptions, "f").infiniteSlide &&
      __classPrivateFieldGet(
        this,
        _Slider_instances,
        "m",
        _Slider_checkArrowVisibility
      ).call(this);
  }),
  (_Slider_clearActiveBulletClass = function _Slider_clearActiveBulletClass() {
    Array.from(
      __classPrivateFieldGet(this, _Slider_bulletWrapper, "f").children
    ).forEach((item) => {
      item.classList.remove("slider__bullet--active");
    });
  }),
  (_Slider_setBulletHover = function _Slider_setBulletHover() {
    const sliderBullets = document.querySelectorAll(
      `#${__classPrivateFieldGet(this, _Slider_sliderId, "f")} .slider__bullet`
    );
    for (let i = 0; i < sliderBullets.length; i++) {
      Array.from(sliderBullets)[i].addEventListener("mouseover", () => {
        __classPrivateFieldSet(this, _Slider_counter, i, "f");
        __classPrivateFieldGet(
          this,
          _Slider_container,
          "f"
        ).style.transform = `translateX(-${
          __classPrivateFieldGet(this, _Slider_container, "f").clientWidth *
          __classPrivateFieldGet(this, _Slider_counter, "f")
        }px )`;
        __classPrivateFieldGet(this, _Slider_bulletWrapper, "f") &&
          __classPrivateFieldGet(
            this,
            _Slider_instances,
            "m",
            _Slider_setActiveBullet
          ).call(this);
      });
    }
  }),
  (_Slider_setBulletImage = function _Slider_setBulletImage() {
    const sliderBullets = document.querySelectorAll(
      `#${__classPrivateFieldGet(this, _Slider_sliderId, "f")} .slider__bullet`
    );
    Array.from(sliderBullets).forEach((item, index) => {
      (item.style.backgroundImage = `url("${
        __classPrivateFieldGet(this, _Slider_sliderOptions, "f").bulletImages &&
        __classPrivateFieldGet(this, _Slider_sliderOptions, "f").bulletImages[
          index
        ]
      }")`),
        (sliderBullets[index].style.backgroundSize = "cover"),
        (sliderBullets[index].style.backgroundPosition = "center");
    });
  }),
  (_Slider_setBulletDefaultImage = function _Slider_setBulletDefaultImage() {
    const sliderBullets = document.querySelectorAll(
      `#${__classPrivateFieldGet(this, _Slider_sliderId, "f")} .slider__bullet`
    );
    Array.from(sliderBullets).forEach((item, index) => {
      (item.style.backgroundImage = `url("${
        __classPrivateFieldGet(this, _Slider_container, "f").children[index]
          .firstElementChild &&
        __classPrivateFieldGet(this, _Slider_container, "f").children[index]
          .firstElementChild.currentSrc
      }")`),
        (sliderBullets[index].style.backgroundSize = "cover"),
        (sliderBullets[index].style.backgroundPosition = "center");
    });
  });
export { Slider };
