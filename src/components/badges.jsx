import React, { Component } from 'react'
import Code from './common/code.jsx'
import Section from './common/section.jsx'

class Badges extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="pageTitle contentMaxWidth">Badges</div>
        <div className="splitColumn contentMaxWidth">
          <div id="content">
            <div className="pageSubTitle">
              Used to highlight important sections. Placed in the corners of
              elements{' '}
            </div>

            <Section title="Usage" id="usage">
              To apply this component, create a component with the class{' '}
              <Code styling="inline">.dsmBadges</Code>. The available badges are
              listed below.
              <Code>
                {`<div class="dsmBadge premium"></div>`}
                <br /> <br />
                {`<div class="dsmBadge sellingFast"></div>`}
                <br /> <br />
                {`<div class="dsmBadge sales"></div>`}
                <br /> <br />
                {`<div class="dsmBadge misc"></div>`}
              </Code>{' '}
              <div
                className="gridTable"
                style={{
                  gridTemplateColumns: 'auto auto',
                  justifyContent: 'flex-start',
                }}
              >
                <span className="previewTitle">Class</span>
                <span className="previewTitle">Preview</span>

                <Code styling="inline">.premium</Code>
                <div className="dsmBadge premium">Lorem Ipsum</div>
                <Code styling="inline">.sellingFast</Code>
                <div className="dsmBadge sellingFast">Lorem Ipsum</div>
                <Code styling="inline">.sales</Code>
                <div className="dsmBadge sales">Lorem Ipsum</div>
                <Code styling="inline">.misc</Code>
                <div className="dsmBadge misc">Lorem Ipsum</div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    )
  }
}

export default Badges
