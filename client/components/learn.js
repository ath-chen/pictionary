import React from 'react'
import {connect} from 'react-redux'
import {getInfo} from '../store'

const Learn = props => {
  const img = props.state.multerImage
  const description = props.state.description
  const translation = props.state.translation

  // console.log('name', name.photo)

  // console.log(props.fileName.user)
  // onClick={props.getInfo

  return (
    <div>
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

          <div className="english-word">{description}</div>
          <div className="translated-word">{translation}</div>
          <div className="english-word">World</div>
          <div className="translated-word">Mundo</div>
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
