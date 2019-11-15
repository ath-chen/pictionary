import React from 'react'

const Learn = props => {
  const img = props.state

  return (
    <div>
      <div className="learn-slogan">Learn a language.</div>

      <div className="learn-pg">
        <div className="learn-pg-left">
          <img src={img} alt="upload-image" className="process_image" />
          {/* <img src={this.state.multerImage} alt='upload-image' className='process_image'/> */}
        </div>
        <div className="learn-pg-right">
          <div className="dropdown">
            {' '}
            SELECT A LANGUAGE v
            <div className="dropdown-content">
              <p>Spanish</p>
              <p>Chinese</p>
            </div>
          </div>

          <div className="english-word">Hello</div>
          <div className="translated-word">Hola</div>
          <div className="english-word">World</div>
          <div className="translated-word">Mundo</div>
        </div>
      </div>
    </div>
  )
}

export default Learn
