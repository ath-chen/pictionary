import React from 'react'
import {connect} from 'react-redux'
import {getInfo} from '../store'

const Learn = props => {
  const img = props.state.multerImage
  const description = props.state.description
  const translation = props.state.translation
  const language = props.state.selectedLang

  // console.log(description)
  // console.log(translation)

  return (
    <div id="main-learn-pg">
      <div className="learn-slogan">Learn a language.</div> <br /> <br />
      <div className="learn-pg">
        <div className="learn-pg-left">
          <img src={img} alt="upload-image" className="process_image" />
          {/* <img src={this.state.multerImage} alt='upload-image' className='process_image'/> */}
        </div>
        <div className="learn-pg-right">
          {/* <div className="dropdown">
            {' '}
            SELECT A LANGUAGE v
            <div className="dropdown-content">
              <p>Spanish</p>
              <p>Chinese</p>
            </div>
          </div> */}
          {description ? (
            <div className="learn-pg-sub">
              <div className="sub-left">
                <div className="headers">English</div>
                <div className="english-word">{description[0]}</div>
                <div className="english-word">{description[1]}</div>
                <div className="english-word">{description[2]}</div>
              </div>
              <div className="sub-right">
                <div className="headers">{language}</div>
                <div className="translated-word">{translation[0]}</div>
                <div className="translated-word">{translation[1]}</div>
                <div className="translated-word">{translation[2]}</div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  // fileName: state
})

const mapDispatchToProps = dispatch => ({
  // getInfo: () => dispatch(getInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(Learn)

// export default Learn
