import React from 'react';

const imgUrls = ['https://i.ibb.co/BwB2mdZ/image.png',
'https://i.ibb.co/cLGyMgK/image.png',
'https://i.ibb.co/bgZZ4kc/image.png',
'https://i.ibb.co/x7kKGRn/image.png',
'https://i.ibb.co/DY52C0y/image.png',
'https://i.ibb.co/8XsBGhF/image.png',
'https://i.ibb.co/p2wzv0j/image.png',
'https://i.ibb.co/9904Wyh/image.png'
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

