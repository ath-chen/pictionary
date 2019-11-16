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

  // multerImage: '../../uploads/screenshot.png'

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

/**
 * CONTAINER
 */
// const mapState = state => ({
//   isLoggedIn: !!state.user.id
// })

// const mapDispatch = dispatch => ({
//   translatePhoto: (obj) => dispatch(translatePhoto(obj))
// })

// export default connect(mapState, mapDispatch)(Navbar)

// uploadImage(e) {
//   e.preventDefault();

//   let imageFormObj = new FormData();

//   imageFormObj.append('imageName', 'multer-image-' + Date.now() )
//   imageFormObj.append('imageData', URL.createObjectURL(e.target.files[0]))

//   this.setState({multerImage: URL.createObjectURL(e.target.files[0])})

//   try {
//     axios.post('/api/uploads', imageFormObj)
//   } catch(error) {
//     console.error(error)
//   }
// }

/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }

// {isLoggedIn ? (
//   <div>
//     {/* The navbar will show these links after you log in */}
//     <Link to="/home">Home</Link>
//     <a href="#" onClick={handleClick}>
//       Logout
//     </a>
//   </div>
// ) : (
//   <div>
//     {/* The navbar will show these links before you log in */}
//     <Link to="/login">Login</Link>
//     <Link to="/signup">Sign Up</Link>
//   </div>
// )}

// TO VIEW UPLOADED IMG INFO
// var x = document.getElementById("upload-img").files[0]

// fileSelectedHandler = (event) => {
//   event.preventDefault()
//   this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) })
//   console.log(this.state)
// }

// fileUploadHandler = async (event) => {
//   event.preventDefault()
//   const fd = new FormData()
//   fd.append('productImage', this.state.selectedFile)

//   console.log(fd)

//   // try {
//   //   await axios.post('/api/uploads', fd)
//   //   console.log('sent from axios front end')
//   // } catch(err) {
//   //   console.error(err)
//   // }
// }

// const uploadFunc = async () => {
//   let x = document.getElementById("upload-img")

//   let reader = new FileReader()
//   reader.onload = (event) => {
//     // get loaded data and render thumbnail.
//     document.getElementById("myimage").src = event.target.result;
//   };

//   // read the image file as a data URL.
//   await reader.readAsDataURL(x.files[0])

// }

// const handleClick = () => {
//   let imgUrl = document.getElementById('myimage').src

//   console.log(imgUrl)

//   // props.translatePhoto(imgUrl)
// }
