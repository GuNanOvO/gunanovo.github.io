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
  city: '新年烟火',
  country: '遇境',
  img: 'img/10.jpg' },

{
  city: '伊甸',
  img: 'img/11.jpg' },

{
  city: '重生之路I',
  country: '伊甸',
  img: 'img/12.jpg' },

{
  city: '重生之路II',
  country: '伊甸',
  img: 'img/13.jpg' },
{
  city: '静谧花园食堂',
  country: '雨林',
  img: 'img/14.jpg' },
{
  city: '玫瑰庭院',
  country: '星光沙漠',
  img: 'img/15.jpg' },
{
  city: '观星台I',
  country: '星光沙漠',
  img: 'img/16.jpg' },
{
  city: '观星台II',
  country: '星光沙漠',
  img: 'img/17.jpg' },
{
  city: '观星台III',
  country: '星光沙漠',
  img: 'img/18.jpg' }];



ReactDOM.render( /*#__PURE__*/React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));