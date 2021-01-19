import React from 'react'

const Section = (props) => {
  return (
    <div id={props.id}>
      <div className="sectionTitle"># {props.title}</div>
      {props.children}
    </div>
  )
}

export default Section
