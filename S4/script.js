class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

    render() {
      const { activeSlide, prevSlide, sliderReady } = this.state;
      return /*#__PURE__*/(
        React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) }, /*#__PURE__*/
        React.createElement("p", { className: "slider__top-heading" }), /*#__PURE__*/
        React.createElement("div", { className: "slider__slides" },
        this.props.slides.map((slide, index) => /*#__PURE__*/
        React.createElement("div", {
          className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
          key: slide.city }, /*#__PURE__*/
  
        React.createElement("div", { className: "slider__slide-content" }, /*#__PURE__*/
      React.createElement("h3", { className: "slider__slide-subheading" }, slide.country || slide.city), /*#__PURE__*/
      React.createElement("h2", { className: "slider__slide-heading" },
      slide.city.split('').map(l => /*#__PURE__*/React.createElement("span", null, l))), /*#__PURE__*/), /*#__PURE__*/
  
        React.createElement("div", { className: "slider__slide-parts" },
        [...Array(this.IMAGE_PARTS).fill()].map((x, i) => /*#__PURE__*/
        React.createElement("div", { className: "slider__slide-part", key: i }, /*#__PURE__*/
        React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))), /*#__PURE__*/
  
  
  
  
  
  
        React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }), /*#__PURE__*/
        React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) })));
  
  
    }}



const slides = [
{
  city: '小王子星球',
  country: '小王子星球',
  img: 'img/28.jpg' },

{
  city: '国王',
  country: '小王子星球',
  img: 'img/29.jpg' },

{
  city: '商人',
  country: '小王子星球',
  img: 'img/30.jpg' },

{
  city: '点灯人',
  country: '小王子星球',
  img: 'img/31.jpg' },
{
  city: '地理学家',
  country: '小王子星球',
  img: 'img/32.jpg' },
{
  city: '听雨台',
  country: '雨林',
  img: 'img/33.jpg' },
{
  city: '终点',
  country: '雨林',
  img: 'img/34.jpg' },
{
  city: '暮土圆月I',
  country: '暮土',
  img: 'img/35.jpg' },

{
  city: '暮土圆月II',
  country: '暮土',
  img: 'img/36.jpg' }];



ReactDOM.render( /*#__PURE__*/React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));