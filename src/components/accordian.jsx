import React, { Component } from 'react'
import Code from './common/code.jsx'
import Section from './common/section.jsx'

class Accordian extends Component {
  state = {}

  componentDidMount() {
    document.querySelectorAll('.dsmAccordian').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault()
        let el = e.target.closest('details')

        if (window.innerWidth < 768) {
          document.querySelectorAll('.dsmAccordian').forEach((a) => {
            if (a.getAttribute('open') == null) return
            a.classList.add('closeAccordian')
            setTimeout(() => {
              a.removeAttribute('open')
              a.classList.remove('closeAccordian')
            }, 50)
          })
        }

        if (el.getAttribute('open') != null) {
          el.classList.add('closeAccordian')
          setTimeout(() => {
            el.removeAttribute('open')
            el.classList.remove('closeAccordian')
          }, 50)
        } else {
          el.setAttribute('open', '')
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div className="pageTitle contentMaxWidth">Accordian</div>
        <div className="splitColumn contentMaxWidth">
          <div id="content">
            <div className="pageSubTitle">Used to expand and collapse text</div>

            <Section title="Usage" id="usage">
              To apply this component, create a details component with the class{' '}
              <Code styling="inline">.dsmAccordian</Code>. Inside the{' '}
              <Code styling="inline">{`<summary></summary>`}</Code> tags insert
              the title of the accordian. This will be the element that is shown
              before you click. Then underneath the tag insert the content that
              is shown upon click!
              <Code>
                {`<details class="dsmAccordian">`}
                <br />
                {`  <summary>Example title</summary>`}
                <br />
                {`  Text shown on click on the title. This can be whatever you want here and as long as you wish`}
                <br />
                {`</details>`}
              </Code>{' '}
              <details className="dsmAccordian" style={{ marginTop: '35px' }}>
                <summary>
                  Example title{' '}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    className="plus dsmIcons"
                  >
                    <g
                      transform="translate(1 1)"
                      fillRule="nonzero"
                      stroke="#0F0F0F"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line
                        x1="6.5"
                        x2="6.5"
                        y2="13"
                        transform="rotate(90 6.5 6.5)"
                      ></line>
                      <line
                        x1="6.5"
                        x2="6.5"
                        y2="13"
                        transform="rotate(-180 6.5 6.5)"
                      ></line>
                    </g>
                  </svg>
                </summary>
                <span className="accordianContent">
                  Text shown on click on the title. This can be whatever you
                  want here and as long as you wish
                </span>
              </details>
              <details className="dsmAccordian">
                <summary>
                  Example title{' '}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    className="plus dsmIcons"
                  >
                    <g
                      transform="translate(1 1)"
                      fillRule="nonzero"
                      stroke="#0F0F0F"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line
                        x1="6.5"
                        x2="6.5"
                        y2="13"
                        transform="rotate(90 6.5 6.5)"
                      ></line>
                      <line
                        x1="6.5"
                        x2="6.5"
                        y2="13"
                        transform="rotate(-180 6.5 6.5)"
                      ></line>
                    </g>
                  </svg>
                </summary>
                <span className="accordianContent">
                  Text shown on click on the title. This can be whatever you
                  want here and as long as you wish
                </span>
              </details>
              <details className="dsmAccordian">
                <summary>
                  Example title{' '}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    className="plus dsmIcons"
                  >
                    <g
                      transform="translate(1 1)"
                      fillRule="nonzero"
                      stroke="#0F0F0F"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line
                        x1="6.5"
                        x2="6.5"
                        y2="13"
                        transform="rotate(90 6.5 6.5)"
                      ></line>
                      <line
                        x1="6.5"
                        x2="6.5"
                        y2="13"
                        transform="rotate(-180 6.5 6.5)"
                      ></line>
                    </g>
                  </svg>
                </summary>
                <span className="accordianContent">
                  Text shown on click on the title. This can be whatever you
                  want here and as long as you wish
                </span>
              </details>
            </Section>
          </div>
        </div>
      </div>
    )
  }
}

export default Accordian
