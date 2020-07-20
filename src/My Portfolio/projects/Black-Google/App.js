import React from 'react';
import first from './Images/1.jpg';
import second from './Images/2.jpg';
import third from './Images/3.jpg';
import fourth from './Images/4.jpg';
import fifth from './Images/5.jpg';
import sixth from './Images/6.jpg';
import seventh from './Images/7.jpg';
import eighth from './Images/8.jpg';

const imgUrls = [
first,
second,
third,
fourth, 
fifth,
sixth,
seventh,
eighth
];

export default class Gallery extends React.Component {
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
      <img tabIndex='0'
      onClick={e=> this.openModal(e, index)}
      src={src} key={src}
      alt='Black Google' className='googleImages pointer'
      onKeyDown={e=> this.handleEnter(e, index)}/>
    ) 
  }

  handleEnter(e, index){
    if (e.keyCode !== 13 || this.state.currentIndex !== null) return;
    this.openModal(e, index);
  }

  openModal(e, index) {
    this.setState ({ currentIndex: index });
    document.body.style.overflow= 'hidden';
  }

  closeModal(e) {
    this.setState ({ currentIndex: null });
    document.body.style.overflow= 'visible';
  }

  findPrev(e) {
    if (e === undefined && this.state.currentIndex === null) {
      return;
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1
    }));
  }

  findNext(e) {
    if (e === undefined && this.state.currentIndex === null) {
      return;
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
    else if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    else if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }
  
  render () {
    const {closeModal, hasNext, hasPrev, findNext, findPrev, src}
    = this.props;
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