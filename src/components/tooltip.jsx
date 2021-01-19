import React, { Component } from 'react'
import Code from './common/code.jsx'
import Section from './common/section.jsx'

class Tooltip extends Component {
  state = {}

  componentDidMount() {
    document.querySelectorAll('.dsmTooltip').forEach((e) => {
      let text = e.innerText
      e.innerHTML = `<div class="item">?</div><div class="container">
            <div class="arrow"></div>
            <div class="infoBox">
                <div class="textArea">${text}</div>
            </div>
        </div>`
      const el = e.querySelector('.container')
      const containerHeight = el.clientHeight
      const containerWidth = el.clientWidth

      switch (true) {
        case e.classList.contains('right'):
          el.style.top = `-${containerHeight / 2 - 5}px`
          el.style.left = `-${containerWidth}px`
          el.querySelector('.arrow').style.top = `${containerHeight / 2 - 4}px`
          break
        case e.classList.contains('left'):
          el.style.top = `-${containerHeight / 2 - 5}px`
          el.style.right = `-${containerWidth}px`
          el.querySelector('.arrow').style.top = `${containerHeight / 2 - 4}px`
          el.style.left = `40px`
          break
        case e.classList.contains('bottom'):
          el.style.top = `30px`
          el.style.left = `-${containerWidth / 2 - 10}px`
          break
        default:
          el.style.left = `-${containerWidth / 2 - 15}px`
          el.style.top = `unset`
          el.style.bottom = `30px`
          break
      }

      if (e.classList.contains('close')) {
        el.innerHTML =
          el.innerHTML +
          `<svg onclick="closeTooltip(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="100%" height="100%"><g fill="none" stroke="#b0bdc5"><path d="M12.3.7L.6 12.3M.7.7l11.7 11.6"></path></g></svg>`
      }
    })
  }

  render() {
    return (
      <div>
        <div className="pageTitle contentMaxWidth">Tooltips</div>
        <div className="splitColumn contentMaxWidth">
          <div id="content">
            <div className="pageSubTitle">
              Used to show and hide data on hover or click.
            </div>

            <Section title="Usage" id="usage">
              To apply this component, create a{' '}
              <Code styling="inline">div</Code> with the class of{' '}
              <Code styling="inline">.dsmTooltip</Code>. To change its position
              add the direction after the class. So for right it would be{' '}
              <Code styling="inline">.dsmTooltip right</Code>. To make the
              tooltip only open on "click" add the class{' '}
              <Code styling="inline">.click</Code> in addition.
              <Code>
                {`<div class="dsmTooltip">Some text here</div>`}
                <br /> <br />
                {`<div class="dsmTooltip left">Some text here</div>`}
                <br /> <br />
                {`<div class="dsmTooltip right">Some text here</div>`}
                <br /> <br />
                {`<div class="dsmTooltip up">Some text here</div>`}
                <br /> <br />
                {`<div class="dsmTooltip down">Some text here</div>`}
                <br /> <br />
                {`<div class="dsmTooltip click">Some text here</div>`}
              </Code>{' '}
              <div
                className="exampleContainer"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  alignItems: 'flex-end',
                }}
              >
                <div>
                  <div className="dsmTooltip">Click me!</div>
                  Hover here!
                </div>
                <div>
                  <div className="dsmTooltip left">Click me!</div>
                  Hover left!
                </div>
                <div>
                  <div className="dsmTooltip right">Click me!</div>
                  Hover right!
                </div>
                <div>
                  <div className="dsmTooltip up">Click me!</div>
                  Hover upwards!
                </div>
                <div>
                  <div className="dsmTooltip down">Some text here</div>
                  Hover downwards!
                </div>
                <div>
                  <div className="dsmTooltip click">Click me!</div>
                  Click me!
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    )
  }
}

export default Tooltip
