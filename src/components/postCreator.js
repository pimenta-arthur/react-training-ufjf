import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import './postCreator.css';
// import 'react-html5-camera-photo/build/css/index.css';

class PostCreator extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      dataUri: '',
      shouldHide: true
    };
  }

  createPost() {
    const newPost = {
      content: this.state.text,
      timestamp: new Date().getTime(),
      author: 'New Author',
      likes: 0
    };

    this.props.onCreate(newPost);
  }

  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
  }

  onCameraStart(stream) {
    console.log('onCameraStart');
  }

  toggleCamera() {
    const state = this.state.shouldHide;
    this.setState({ shouldHide: !state });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">Novo Post</span>
          <input
            value={this.state.text}
            onChange={event => {
              const value = event.target.value;
              this.setState({ text: value });
            }}
          />
          <div className={this.state.shouldHide ? 'hidden' : ''}>
            <i
              className="material-icons right"
              onClick={this.toggleCamera.bind(this)}
              style={{ cursor: 'pointer' }}
            >
              close
            </i>
            <Camera
              onTakePhoto={dataUri => {
                this.onTakePhoto(dataUri);
              }}
              onCameraStart={stream => {
                this.onCameraStart(stream);
              }}
              idealResolution={{ width: 640, height: 480 }}
              sizeFactor={1}
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              imageType={IMAGE_TYPES.JPG}
              imageCompression={0.97}
              isMaxResolution={false}
              isImageMirror={false}
            />
          </div>
          <i
            className={
              this.state.shouldHide ? 'small material-icons right' : 'hidden'
            }
            onClick={this.toggleCamera.bind(this)}
            style={{ cursor: 'pointer' }}
          >
            camera_alt
          </i>
        </div>
        <div className="card-action" style={{marginTop: this.state.shouldHide ? '10px': '-7px'}}>
          <button onClick={() => this.createPost()}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default PostCreator;
