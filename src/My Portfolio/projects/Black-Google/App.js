import React from 'react';

const imgUrls = ['https://user-images.githubusercontent.com/44400566/86440326-eeb32400-bd12-11ea-9b7d-356660024489.jpg',
'https://user-images.githubusercontent.com/44400566/86440340-f7a3f580-bd12-11ea-9b44-aa1437507cef.jpg',
'https://user-images.githubusercontent.com/44400566/86440341-f7a3f580-bd12-11ea-9454-77bfd0d816d7.jpg',
'https://user-images.githubusercontent.com/44400566/86440342-f7a3f580-bd12-11ea-9f16-eb9655b79ee1.jpg',
'https://user-images.githubusercontent.com/44400566/86440343-f83c8c00-bd12-11ea-8741-1d6283001fa8.jpg',
'https://user-images.githubusercontent.com/44400566/86440345-f83c8c00-bd12-11ea-8edb-c6fe7f34a596.jpg',
'https://user-images.githubusercontent.com/44400566/86440346-f83c8c00-bd12-11ea-96ed-990b16e14a31.jpg',
'https://user-images.githubusercontent.com/44400566/86440339-f672c880-bd12-11ea-899c-28907042a656.jpg'
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }

  renderImageContent(src, index) {
    return (
      <img onClick={(e) => this.openModal(e, index)} src={src} key={src}
      alt='Black Goggle' className='googleImages pointer'/>
    ) 
  }

  openModal(e, index) {
    this.setState ({ currentIndex: index });
    document.body.style.overflow= 'hidden';
  }

  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState ({ currentIndex: null });
    document.body.style.overflow= 'visible';
  }

  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1
    }));
  }

  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    return (
      <div className="projectsContainer">
          {imgUrls.map(this.renderImageContent)}
        <GalleryModal 
          closeModal={this.closeModal} 
          findPrev={this.findPrev} 
          findNext={this.findNext} 
          hasPrev={this.state.currentIndex > 0} 
          hasNext={this.state.currentIndex + 1 < imgUrls.length} 
          src={imgUrls[this.state.currentIndex]} 
        />
      </div>
    )
  }
}

class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }  

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.keyCode === 27)
      this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }
  
  render () {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      return null;
    }
    return (
      <div className="modal">
        <div className='modal-body'>
          {hasPrev &&
          	<button className='modal-prev' onClick={findPrev}
          		 onKeyDown={this.handleKeyDown}>&lsaquo;
          	</button>}
          {hasNext &&
          	<button className='modal-next' onClick={findNext}
          		 onKeyDown={this.handleKeyDown}>&rsaquo;
          	</button>}
          <img src={src} onClick={closeModal} className='pointer'
          onKeyDown={this.handleKeyDown} alt='Black Google' />
        </div>
      </div>
    )
  }
}

export default Gallery;

