import React, { Component } from 'react'
import Code from './common/code.jsx'
import Section from './common/section.jsx'

class Shadows extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="pageTitle contentMaxWidth">Shadows</div>
        <div className="splitColumn contentMaxWidth">
          <div id="content">
            <div className="pageSubTitle">
              Used to add more focus on elements
            </div>

            <Section title="Usage" id="usage">
              To apply this component, create a component with the class{' '}
              <Code styling="inline">.dsmShadow</Code>. The available shadow
              weights are listed below.
              <Code>
                {`<div class="dsmShadow"></div>`}
                <br /> <br />
                {`<div class="dsmShadow shadow-2"></div>`}
                <br /> <br />
                {`<div class="dsmShadow shadow-3"></div>`}
                <br /> <br />
                {`<div class="dsmShadow shadow-4"></div>`}
                <br /> <br />
                {`<div class="dsmShadow shadow-5"></div>`}
                <br /> <br />
                {`<div class="dsmShadow shadow-6"></div>`}
              </Code>{' '}
              <div
                className="gridTable stacked"
                style={{
                  gridTemplateColumns: 'repeat(2, auto)',
                  justifyContent: 'flex-start',
                  columnGap: '100px',
                }}
              >
                <div className="leftColumn">
                  <span className="previewTitle">Class</span>
                  <span className="previewTitle">Preview</span>
                  <Code styling="inline">Default</Code>
                  <div className="dsmShadow"></div>
                  <Code styling="inline">.shadow-2</Code>
                  <div className="dsmShadow shadow-2"></div>
                  <Code styling="inline">.shadow-3</Code>
                  <div className="dsmShadow shadow-3"></div>
                </div>
                <div className="rightColumn">
                  <span className="previewTitle">Class</span>
                  <span className="previewTitle">Preview</span>
                  <Code styling="inline">.shadow-4</Code>
                  <div className="dsmShadow shadow-4"></div>
                  <Code styling="inline">.shadow-5</Code>
                  <div className="dsmShadow shadow-5"></div>
                  <Code styling="inline">.shadow-6</Code>
                  <div className="dsmShadow shadow-6"></div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    )
  }
}

export default Shadows
