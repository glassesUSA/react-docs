import React, { Component } from 'react'
import Code from './common/code.jsx'
import Scrollspy from 'react-scrollspy'
import Section from './common/section.jsx'

class Trustpilot extends Component {
  state = {}
  componentDidMount() {
    setTimeout(() => {
      if (
        !document.querySelector('.dsmTrustpilot swiper-container') &&
        document.querySelector('.dsmTrustpilot')
      ) {
        document.querySelector('.dsmTrustpilot').style.width =
          document.querySelector('.dsmTrustpilot').parentNode.clientWidth + 'px'
        delete document.querySelector('.dsmTrustpilot').dataset.apikey
      }
    }, 200)
  }

  render() {
    return (
      <div>
        <div className="pageTitle contentMaxWidth">Trustpilot</div>
        <div className="splitColumn contentMaxWidth">
          <div id="content">
            <div className="pageSubTitle">
              Custom display of Trustview reviews from GlassesUSA.com
            </div>

            <Section title="Usage" id="usage">
              In order to use this component you need to include the following
              script in the <Code styling="inline">{'<head></head>'}</Code> of
              your document.
              <Code>
                {`<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.14/swiper-bundle.min.js"`}
                <br></br>
                {`integrity="sha512-APQL/QFRDoEBh9V5ztds1P6qEICllWq9Dpcv+pVu5DE/g5MZ1GE7+pj9tHhN1SFBv4J7B2j5mfw0cOUitz+aGg=="`}
                <br />
                {`crossorigin="anonymous"></script>`}
              </Code>{' '}
              <br></br>
              To apply this component, create a div element with the class{' '}
              <Code styling="inline">.dsmTrustpilot</Code>. You can set a number
              of different settings to customise what data is shown which is
              listed below.
              <Code>{`<div class="dsmTrustpilot"></div>`}</Code>{' '}
              <div
                className="dsmTrustpilot"
                style={{ marginTop: '35px', maxWidth: '800px' }}
                data-apikey="jDYwz6VMwIzV6l6qwlZhFwqAm6AniQS1"
              ></div>
            </Section>
            <Section title="Properties" id="properties">
              There are a number of properties that can be applied to the
              trustpilot to change its behaviour and data displayed.
              <div
                className="gridTable"
                style={{ gridTemplateColumns: 'repeat(4, auto)' }}
              >
                <span className="previewTitle">Property</span>
                <span className="previewTitle">Default</span>
                <span className="previewTitle">Type</span>
                <span className="previewTitle">Description</span>
                <Code styling="inline">data-apikey</Code>
                <span className="propertyType">null</span>
                <span className="propertyDefault">string</span>
                <span>
                  This is used to set the apikey for the swiper. Without this
                  property the swiper <strong>will not function</strong>. The
                  API key can be obtained from the Trustpilot website.
                </span>
                <Code styling="inline">data-loop</Code>
                <span className="propertyType">true</span>
                <span className="propertyDefault">boolean</span>
                <span>
                  This is used to set the whether the swiper will loop through
                  all the reviews or will stop at the end.
                </span>
                <Code styling="inline">data-stars</Code>
                <span className="propertyType">"5"</span>
                <span className="propertyDefault">string</span>
                <span>
                  This is used to set what ratings will show. For more then one
                  rating use commas to separate values.
                </span>
                <Code styling="inline">data-touch-move</Code>
                <span className="propertyType">true</span>
                <span className="propertyDefault">boolean</span>
                <span>
                  This is used to set if you can move the swiper using touch
                  events. This will always be on for mobile devices.
                </span>
                <Code styling="inline">data-slides</Code>
                <span className="propertyType">3</span>
                <span className="propertyDefault">number</span>
                <span>
                  This is used to set how many slides per page are shown.
                </span>
                <Code styling="inline">data-space-between</Code>
                <span className="propertyType">20</span>
                <span className="propertyDefault">number</span>
                <span>This is used to set the space between each slide.</span>
                <Code styling="inline">data-min-chars</Code>
                <span className="propertyType">75</span>
                <span className="propertyDefault">number</span>
                <span>
                  This is used to set the minimum characters allowed in a
                  review.
                </span>
                <Code styling="inline">data-tags</Code>
                <span className="propertyType">null</span>
                <span className="propertyDefault">string</span>
                <span>This is used to filter the results by tag.</span>
                <Code styling="inline">data-slides-per-group</Code>
                <span className="propertyType">1</span>
                <span className="propertyDefault">number</span>
                <span>
                  This is used to decide how many slides to scroll each time the
                  arrow is pressed.
                </span>
                <Code styling="inline">data-speed</Code>
                <span className="propertyType">300</span>
                <span className="propertyDefault">number</span>
                <span>This is used to set the speed of the transition</span>
                <Code styling="inline">data-max-slides</Code>
                <span className="propertyType">null</span>
                <span className="propertyDefault">number</span>
                <span>
                  This is used to set the maximum amount of slides that will be
                  displayed
                </span>
              </div>
            </Section>
          </div>
          <Scrollspy
            items={['usage', 'properties']}
            componentTag="div"
            className="sideNav"
            offset={0}
            currentClassName="active"
          >
            <a href="#usage" className="active">
              Usage
            </a>
            <a href="#properties">Properties</a>
          </Scrollspy>
        </div>
      </div>
    )
  }
}

export default Trustpilot
