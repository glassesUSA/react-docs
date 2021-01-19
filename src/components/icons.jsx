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
                <div className="col1">
                  <CopyIcon name="gift"></CopyIcon>
                  <CopyIcon name="money"></CopyIcon>
                  <CopyIcon name="approve"></CopyIcon>
                  <CopyIcon name="lenses"></CopyIcon>
                  <CopyIcon name="visual-comfort"></CopyIcon>
                  <CopyIcon name="arrow-left"></CopyIcon>
                  <CopyIcon name="arrow-right"></CopyIcon>
                  <CopyIcon name="arrow-up"></CopyIcon>
                  <CopyIcon name="arrow-down"></CopyIcon>
                  <CopyIcon name="call"></CopyIcon>
                </div>
                <div className="col2">
                  <CopyIcon name="help"></CopyIcon>
                  <CopyIcon name="reply"></CopyIcon>
                  <CopyIcon name="computer"></CopyIcon>
                  <CopyIcon name="lock"></CopyIcon>
                  <CopyIcon name="mobile"></CopyIcon>
                  <CopyIcon name="credit_card"></CopyIcon>
                  <CopyIcon name="truck"></CopyIcon>
                  <CopyIcon name="search"></CopyIcon>
                  <CopyIcon name="anti-reflect"></CopyIcon>
                  <CopyIcon name="calendar"></CopyIcon>
                </div>

                <div className="col3">
                  <CopyIcon name="glasses"></CopyIcon>
                  <CopyIcon name="choose-frame"></CopyIcon>
                  <CopyIcon name="map"></CopyIcon>
                  <CopyIcon name="chat"></CopyIcon>
                  <CopyIcon name="money_round"></CopyIcon>
                  <CopyIcon name="form"></CopyIcon>
                  <CopyIcon name="uv_protection"></CopyIcon>
                  <CopyIcon name="camera"></CopyIcon>
                  <CopyIcon name="try_online"></CopyIcon>
                  <CopyIcon name="clock"></CopyIcon>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    )
  }
}

export default Icons
