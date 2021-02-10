import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import 'tippy.js/dist/tippy.css' // optional
import Tippy from '@tippyjs/react'

const CopyIcon = (props) => {
  let content = ''

  React.Children.toArray(props.children).forEach((e) => {
    !e.type ? (content += e) : (content += '\n')
  })
  console.log(props.mode)
  return (
    <React.Fragment>
      {!props.mode ? (
        <div className="icon-flexbox">
          <i className={`${props.prefix} ${props.name}`}></i>
          <CopyToClipboard
            text={`<i class="${props.prefix} ${props.name}"></i>`}
          >
            <div style={{ position: 'relative' }} className="iconBox">
              {props.name}
              <svg
                id="prefix__Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                className="copyIcon"
                viewBox="0 0 11.3 11"
                xmlSpace="preserve"
                {...props}
              >
                <style>{'.prefix__st1{fill:#898989}'}</style>
                <g id="prefix__Page-1">
                  <g
                    id="prefix___x31_440-RES"
                    transform="translate(-1072 -381)"
                  >
                    <g id="prefix__Group-14" transform="translate(1073 382)">
                      <path
                        id="iconStroke"
                        d="M8.7 3.3V1.5c0-.6-.5-1-1-1H5.5c-.2-.6-.8-1-1.4-1s-1.2.4-1.4 1H.5c-.6 0-1 .5-1 1v7c0 .6.5 1 1 1h7.1c.6 0 1-.5 1-1V6.8"
                        fill="none"
                        stroke="#898989"
                      />
                      <path
                        id="prefix__Path_1_"
                        className="prefix__st1"
                        d="M5.6 7.5H.5v-1h5.1z"
                      />
                      <path
                        id="prefix__Path_2_"
                        className="prefix__st1"
                        d="M4.1 5.5H.5v-1h3.6z"
                      />
                      <path
                        id="prefix__Path_3_"
                        className="prefix__st1"
                        d="M5.6 3.5H.5v-1h5.1z"
                      />
                      <path
                        id="prefix__Path_4_"
                        className="prefix__st1"
                        d="M10.3 6H7.7v1.5L5.1 5l2.6-2.5V4h2.6z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </CopyToClipboard>
        </div>
      ) : (
        <div className="icon-flexbox">
          <CopyToClipboard
            text={`<i class="${props.prefix} ${props.name}"></i>`}
          >
            <div style={{ position: 'relative' }}>
              <Tippy
                hideOnClick={false}
                content={<i class={props.prefix + ' ' + props.name}></i>}
                className="hoverTooltip"
              >
                <div className="iconBox">
                  {props.name}

                  <svg
                    id="prefix__Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x={0}
                    y={0}
                    className="copyIcon"
                    viewBox="0 0 11.3 11"
                    xmlSpace="preserve"
                    {...props}
                  >
                    <style>{'.prefix__st1{fill:#898989}'}</style>
                    <g id="prefix__Page-1">
                      <g
                        id="prefix___x31_440-RES"
                        transform="translate(-1072 -381)"
                      >
                        <g
                          id="prefix__Group-14"
                          transform="translate(1073 382)"
                        >
                          <path
                            id="iconStroke"
                            d="M8.7 3.3V1.5c0-.6-.5-1-1-1H5.5c-.2-.6-.8-1-1.4-1s-1.2.4-1.4 1H.5c-.6 0-1 .5-1 1v7c0 .6.5 1 1 1h7.1c.6 0 1-.5 1-1V6.8"
                            fill="none"
                            stroke="#898989"
                          />
                          <path
                            id="prefix__Path_1_"
                            className="prefix__st1"
                            d="M5.6 7.5H.5v-1h5.1z"
                          />
                          <path
                            id="prefix__Path_2_"
                            className="prefix__st1"
                            d="M4.1 5.5H.5v-1h3.6z"
                          />
                          <path
                            id="prefix__Path_3_"
                            className="prefix__st1"
                            d="M5.6 3.5H.5v-1h5.1z"
                          />
                          <path
                            id="prefix__Path_4_"
                            className="prefix__st1"
                            d="M10.3 6H7.7v1.5L5.1 5l2.6-2.5V4h2.6z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </Tippy>
            </div>
          </CopyToClipboard>
        </div>
      )}
    </React.Fragment>
  )
}
CopyIcon.defaultProps = {
  prefix: 'dsmIcons',
}
export default CopyIcon
