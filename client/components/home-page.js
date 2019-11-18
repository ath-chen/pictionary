import React from 'react'
import {connect} from 'react-redux'
import {getInfo} from '../store'
import Learn from './learn'

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      multerImage: null,
      name: null,
      description: null,
      translation: null,
      selectedLang: 'SELECT LANGUAGE',
      show: null
    }
    this.uploadImage = this.uploadImage.bind(this)
    this.selectLanguage = this.selectLanguage.bind(this)
  }

  uploadImage(e) {
    e.preventDefault()

    let imageFormObj = new FormData()

    imageFormObj.append('imageName', 'multer-image-' + Date.now())
    imageFormObj.append('imageData', URL.createObjectURL(e.target.files[0]))

    this.setState({multerImage: URL.createObjectURL(e.target.files[0])})
  }

  selectLanguage(language) {
    this.setState({selectedLang: language})
  }

  render() {
    return (
      <div className="main-header">
        <img
          src="https://cdn.dribbble.com/users/1859102/screenshots/4814254/camera.gif"
          className="main-page-photo"
        />

        <div className="main-slogan">Take a photo. </div>

        <form action="/api/upload" method="POST" encType="multipart/form-data">
          <div className="upload-component">
            <div className="dropdown">
              <span>{this.state.selectedLang}</span>
              <div className="dropdown-content">
                <input
                  type="radio"
                  name="lanOption"
                  value="zh"
                  onChange={() => this.selectLanguage('Chinese')}
                />{' '}
                Chinese <br />
                <input
                  type="radio"
                  name="lanOption"
                  value="fr"
                  onChange={() => this.selectLanguage('French')}
                />{' '}
                French <br />
                <input
                  type="radio"
                  name="lanOption"
                  value="ja"
                  onChange={() => this.selectLanguage('Japanese')}
                />{' '}
                Japanese <br />
                <input
                  type="radio"
                  name="lanOption"
                  value="is"
                  onChange={() => this.selectLanguage('Icelandic')}
                />{' '}
                Icelandic <br />
                <input
                  type="radio"
                  name="lanOption"
                  value="es"
                  onChange={() => this.selectLanguage('Spanish')}
                />{' '}
                Spanish <br />
              </div>
            </div>

            <input
              type="file"
              accept="image/*"
              name="photo"
              id="file"
              className="inputfile"
              onChange={this.uploadImage}
            />
            <label htmlFor="file">Upload</label>

            <button
              type="submit"
              value="Upload Photo"
              className="submit-button"
              onClick={async () => {
                await this.props.getInfo()

                let photoName = this.props.photo.user
                let description = this.props.photo.user.description
                let translation = this.props.photo.user.translation

                console.log('description from HP', description)
                console.log('translation from HP', translation)

                this.setState({
                  name: photoName,
                  description: description,
                  translation: translation,
                  show: true
                })

                document
                  .getElementById('main-learn-pg')
                  .scrollIntoView({behavior: 'smooth'})
              }}
            >
              SUBMIT
            </button>
          </div>
          <br /> <p />
        </form>
        {this.state.multerImage && this.state.show ? (
          <Learn state={this.state} />
        ) : (
          ''
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photo: state
})

const mapDispatchToProps = dispatch => ({
  getInfo: () => dispatch(getInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
