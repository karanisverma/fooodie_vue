import Toolbar from '~/components/toolbar'
import QuantityButtonComponent from '~/components/quantity-button'
export default {
  name: 'MenuList',
  computed: {
    allProducts () {
      let {Products} = this.$store.state
      return Products.allProducts
    }
  },
  data () {
    return {
      slider: {
        sensitivity: 20,
        activeSlide: 0,
        slideCount: 0,
        sliderPanelSelector: '.menu-category'
      },
      toolbarProps: {
        title: {
          text: 'Menu',
          position: 'left'
        },
        leftAction: {
          icon: 'menu',
          method: () => this.$emit('toggleSidebar')
        }
      }
    }
  },
  components: {
    Toolbar,
    QuantityButtonComponent
  },
  mounted () {
    this.slider_init('.menu-slider')
    this.goTo(parseInt(window.location.pathname.split('/')[2]))
  },
  methods: {
    goTo (number) {
      // 5a. Stop it from doing weird things like moving to slides that don’t exist

      var classOne = document.querySelector('#category-1')
      var classTwo = document.querySelector('#category-2')
      var classThree = document.querySelector('#category-3')
      var classFour = document.querySelector('#category-4')
      var classFive = document.querySelector('#category-5')

      var allClasses = [classOne, classTwo, classThree, classFour, classFive]

      allClasses.forEach(function (el) {
        el.classList.remove('active-category')
      })
      if (number < 0) {
        this.slider.activeSlide = 0
      } else if (number > this.slider.slideCount - 1) {
        this.slider.activeSlide = this.slider.slideCount - 1
      } else {
        this.slider.activeSlide = number
      }

      // 5b. Apply transformation & smoothly animate via .is-animating CSS
      var s = document.getElementById('category-' + (this.slider.activeSlide + 1))
      s.classList.add('active-category')
      this.slider.sliderEl.classList.add('is-animating')
      var percentage = -(100 / this.slider.slideCount) * this.slider.activeSlide
      this.slider.sliderEl.style.transform = 'translateX( ' + percentage + '% )'
      clearTimeout(this.slider.timer)
      this.$router.push({
        name: 'MenuList',
        params: {categoryId: number}
      })
    },
    slider_init (selector) {
      this.slider.sliderEl = document.querySelector(selector)
      this.slider.slideCount = this.slider.sliderEl.querySelectorAll(this.slider.sliderPanelSelector).length
    },
    slideMenu (e) {
      // 4e. Calculate pixel movements into 1:1 screen percents so gestures track with motion
      var percentage = 100 / this.slider.slideCount * e.deltaX / window.innerWidth

      // 4f. Multiply percent by # of slide we’re on
      var percentageCalculated = percentage - 100 / this.slider.slideCount * this.slider.activeSlide

      // 4g. Apply transformation
      this.slider.sliderEl.style.transform = 'translateX( ' + percentageCalculated + '% )'

      // 4h. Snap to slide when done
      if (e.isFinal) {
        if (e.velocityX > 1) {
          this.goTo(this.slider.activeSlide - 1)
        } else if (e.velocityX < -1) {
          this.goTo(this.slider.activeSlide + 1)
        } else {
          if (percentage <= -(this.slider.sensitivity / this.slider.slideCount)) {
            this.goTo(this.slider.activeSlide + 1)
          } else if (percentage >= (this.slider.sensitivity / this.slider.slideCount)) {
            this.goTo(this.slider.activeSlide - 1)
          } else {
            this.goTo(this.slider.activeSlide)
          }
        }
      }
    }
  }
}
