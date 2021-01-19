import React, { Component } from 'react'
import Code from './common/code.jsx'
import CopyCode from './common/copyCode.jsx'
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
                  <span className="colHeading">Class</span>
                  <span className="colHeading">Preview</span>
                  <span className="colHeading">Copy Code</span>
                  <Code styling="inline">.gift</Code>
                  <i className="dsmIcons gift"></i>
                  <CopyCode>{'<i class="dsmIcons gift"></i>'}</CopyCode>
                  <Code styling="inline">.money</Code>
                  <i className="dsmIcons money"></i>
                  <CopyCode>{'<i class="dsmIcons money"></i>'}</CopyCode>
                  <Code styling="inline">.approve</Code>
                  <i className="dsmIcons approve"></i>
                  <CopyCode>{'<i class="dsmIcons approve"></i>'}</CopyCode>
                  <Code styling="inline">.lenses</Code>
                  <i className="dsmIcons lenses"></i>
                  <CopyCode>{'<i class="dsmIcons lenses"></i>'}</CopyCode>
                  <Code styling="inline">.rx</Code>
                  <i className="dsmIcons rx"></i>
                  <CopyCode>{'<i class="dsmIcons rx"></i>'}</CopyCode>
                  <Code styling="inline">.visual-comfort</Code>
                  <i className="dsmIcons visual-comfort"></i>
                  <CopyCode>
                    {'<i class="dsmIcons visual-comfort"></i>'}
                  </CopyCode>
                  <Code styling="inline">.upload</Code>
                  <i className="dsmIcons upload"></i>
                  <CopyCode>{'<i class="dsmIcons upload"></i>'}</CopyCode>
                </div>
                <div className="col2">
                  <span className="colHeading">Class</span>
                  <span className="colHeading">Preview</span>
                  <span className="colHeading">Copy Code</span>
                  <Code styling="inline">.arrow-left</Code>
                  <i className="dsmIcons arrow-left"></i>
                  <CopyCode>{'<i class="dsmIcons arrow-left"></i>'}</CopyCode>
                  <Code styling="inline">.arrow-right</Code>
                  <i className="dsmIcons arrow-right"></i>
                  <CopyCode>{'<i class="dsmIcons arrow-right"></i>'}</CopyCode>
                  <Code styling="inline">.arrow-up</Code>
                  <i className="dsmIcons arrow-up"></i>
                  <CopyCode>{'<i class="dsmIcons arrow-up"></i>'}</CopyCode>
                  <Code styling="inline">.arrow-down</Code>
                  <i className="dsmIcons arrow-down"></i>
                  <CopyCode>{'<i class="dsmIcons arrow-down"></i>'}</CopyCode>
                  <Code styling="inline">.call</Code>
                  <i className="dsmIcons call"></i>
                  <CopyCode>{'<i class="dsmIcons call"></i>'}</CopyCode>
                  <Code styling="inline">.help</Code>
                  <i className="dsmIcons help"></i>
                  <CopyCode>{'<i class="dsmIcons help"></i>'}</CopyCode>
                  <Code styling="inline">.reply</Code>
                  <i className="dsmIcons reply"></i>
                  <CopyCode>{'<i class="dsmIcons reply"></i>'}</CopyCode>
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
