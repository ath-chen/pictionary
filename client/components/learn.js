import React from 'react'

const Learn = props => {
  const img = props.state.multerImage
  const description = props.state.description
  const translation = props.state.translation
  const language = props.state.selectedLang

  return (
    <div id="main-learn-pg">
      <div className="learn-slogan">Learn a language.</div> <br /> <br />
      <div className="learn-pg">
        <div className="learn-pg-left">
          <img src={img} alt="upload-image" className="process_image" />
        </div>
        <div className="learn-pg-right">
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

export default Learn
