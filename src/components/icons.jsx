import React, { Component } from 'react'
import Code from './common/code.jsx'
import CopyIcon from './common/copyIcon.jsx'
import Section from './common/section.jsx'

class Icons extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="pageTitle contentMaxWidth">Icons</div>
        <div className="splitColumn contentMaxWidth">
          <div id="content">
            <div className="pageSubTitle">
              A list of general icons used throughout sites
            </div>

            <Section title="Usage" id="usage">
              All icons are preceded with the class{' '}
              <Code styling="inline">.dsmIcons</Code> and the related icon code.
              Icons can be coloured, resized and have any effects applied to it
              that a normal font would have.
              <Code>{'<i class="dsmIcons clock"></i>'}</Code>
              <div className="exampleContainer iconGrid">
                <CopyIcon name="app" />
                <CopyIcon name="approve_circle" />
                <CopyIcon name="approve" />
                <CopyIcon name="arrow_down" />
                <CopyIcon name="arrow_left" />
                <CopyIcon name="arrow_right" />
                <CopyIcon name="arrow_up" />
                <CopyIcon name="call" />
                <CopyIcon name="camera" />
                <CopyIcon name="chat" />
                <CopyIcon name="customer_service" />
                <CopyIcon name="exit" />
                <CopyIcon name="eyestrain_relief" />
                <CopyIcon name="form" />
                <CopyIcon name="gift" />
                <CopyIcon name="glasses" />
                <CopyIcon name="heart" />
                <CopyIcon name="location" />
                <CopyIcon name="minus" />
                <CopyIcon name="money_guarantee" />
                <CopyIcon name="money" />
                <CopyIcon name="phone" />
                <CopyIcon name="plus" />
                <CopyIcon name="prescription_scanner" />
                <CopyIcon name="search" />
                <CopyIcon name="truck" />
              </div>
            </Section>
          </div>
        </div>
      </div>
    )
  }
}

export default Icons
