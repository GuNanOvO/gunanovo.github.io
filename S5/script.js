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
  city: '星路',
  country: '伊甸',
  img: 'img/37.jpg' },

{
  city: '樱花树',
  country: '遇境',
  img: 'img/38.jpg' },

{
  city: '彩蛋企鹅',
  country: '圆梦村乡村剧场',
  img: 'img/39.jpg' },

{
  city: '丁达尔效应',
  country: '暮土藏宝岛礁',
  img: 'img/40.jpg' },
{
  city: '大树屋',
  country: '雨林',
  img: 'img/41.jpg' },
{
  city: '粉莹草坪I',
  country: '风行网道',
  img: 'img/42.jpg' },
{
  city: '纯白剪影',
  country: '重生之路',
  img: 'img/43.jpg' },
{
  city: '粉莹草坪II',
  country: '风行网道',
  img: 'img/44.jpg' },

{
  city: '蝴蝶平原I',
  country: '云野',
  img: 'img/45.jpg' },

{
  city: '青青草原I',
  country: '云野',
  img: 'img/46.jpg' },

{
  city: '青青草原II',
  country: '云野',
  img: 'img/47.jpg' },

{
  city: '蝴蝶平原II',
  country: '云野',
  img: 'img/48.jpg' },

{
  city: '圣岛',
  country: '云野',
  img: 'img/49.jpg' },

{
  city: '云野后山',
  country: '晨岛',
  img: 'img/50.jpg' }];



ReactDOM.render( /*#__PURE__*/React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));