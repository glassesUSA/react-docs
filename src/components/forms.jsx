import React, { Component } from 'react'
import Code from './common/code.jsx'
import Section from './common/section.jsx'
import Scrollspy from 'react-scrollspy'

class Forms extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="pageTitle contentMaxWidth">Forms</div>
        <div className="splitColumn contentMaxWidth">
          <div id="content">
            <div className="pageSubTitle">
              All the different elements that are relevant to forms
            </div>

            <Section title="Usage" id="usage">
              To apply these elements, they need to sit inside a form with the
              class
              <Code styling="inline">.dsmForm</Code>.
              <Code>
                {`<form class="dsmForm">`}
                <br />
                ...
                <br />
                {`</form>`}
              </Code>
            </Section>

            <Section title="Dropdown" id="dropdown">
              Used to display multiple elements to choose from it also comes
              with an event you can hook into for when the user selects an
              option. If there is an error you add the{' '}
              <Code styling="inline">error</Code> class to the parent element.
              You can also optionally add an error message with the code{' '}
              <Code styling="inline">{'<span class="error">....</span>'}</Code>.
              Finally you can disable the dropdown element by adding{' '}
              <Code styling="inline">data-disabled=true</Code> to the container
              element.
              <p></p> To access the event on value change, use the function{' '}
              <Code styling="inline" language="js">
                selectItem(value)
              </Code>{' '}
              value being the result that it will return to you. If you want to
              change the default value, use the{' '}
              <Code styling="inline">data-placeholder=""</Code> attribute and
              enter the desired placeholder you require.
              <form action="" className="dsmForm exampleContainer">
                <div className="selectContainer">
                  <button>
                    <span className="selectedItem">Placeholder</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="rgb(137, 149, 156)"
                      width="12px"
                      height="10px"
                    >
                      <path
                        d="M1 1l5 6 5-6"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                </div>
                <div className="selectContainer error">
                  <button>
                    <span className="selectedItem">Placeholder</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="rgb(137, 149, 156)"
                      width="12px"
                      height="10px"
                    >
                      <path
                        d="M1 1l5 6 5-6"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                  <span className="error">This is an error message</span>
                </div>
                <div className="selectContainer">
                  <button disabled>
                    <span className="selectedItem">Placeholder</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="rgb(137, 149, 156)"
                      width="12px"
                      height="10px"
                    >
                      <path
                        d="M1 1l5 6 5-6"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                </div>
              </form>
              <Code>
                {`<form action="" class="dsmForm">`} <br />
                {`  <div class="selectContainer" data-placeholder="Placeholder">`}{' '}
                <br />
                {'    <ul>'} <br />
                {'       <li>Item 1</li>'} <br />
                {'       ...'} <br />
                {'   </ul>'} <br />
                {'  </div>'} <br />
                {'</form>'}
              </Code>
              <Code>
                {`// Error`} <br />
                {`<form action="" class="dsmForm">`} <br />
                {`  <div class="selectContainer error" data-placeholder="Placeholder">`}{' '}
                <br />
                {'    <ul>'} <br />
                {'       <li>Item 1</li>'} <br />
                {'       ...'} <br />
                {'   </ul>'} <br />
                {'   <span class="error">This is an error message</span>'}{' '}
                <br />
                {'  </div>'} <br />
                {'</form>'}
              </Code>{' '}
              <Code>
                {`// Disabled`} <br />
                {`<form action="" class="dsmForm">`} <br />
                {`  <div class="selectContainer" data-placeholder="Placeholder" data-disabled=true>`}{' '}
                <br />
                {'    <ul>'} <br />
                {'       <li>Item 1</li>'} <br />
                {'       ...'} <br />
                {'   </ul>'} <br />
                {'  </div>'} <br />
                {'</form>'}
              </Code>
            </Section>

            <Section title="Text area" id="textarea">
              These are used for large bodies of text. There are three states
              available: default, disabled and error. If there is an error add
              the <Code styling="inline">error</Code> class to the textarea
              element. You can also optionally add an error message with the
              code{' '}
              <Code styling="inline">{'<span class="error">....</span>'}</Code>.
              Finally you disable the element by adding{' '}
              <Code styling="inline">disabled</Code> to the textarea element.{' '}
              <form
                action=""
                className="dsmForm exampleContainer"
                style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
              >
                <textarea
                  name=""
                  id=""
                  cols="1"
                  rows="10"
                  placeholder="This is a text area"
                ></textarea>
                <textarea
                  disabled
                  name=""
                  id=""
                  cols="1"
                  rows="10"
                  placeholder="This is a text area"
                ></textarea>
                <div>
                  <textarea
                    className="error"
                    name=""
                    id=""
                    cols="1"
                    rows="10"
                    placeholder="This is a text area"
                  ></textarea>
                  <span className="error">This is an error message</span>
                </div>
              </form>
              <Code>
                {`<form action="" class="dsmForm">`} <br />
                {`  <textarea></textarea>`} <br />
                {'</form>'}
              </Code>
              <Code>
                {`// Disabled`} <br />
                {`<form action="" class="dsmForm">`} <br />
                {`  <textarea disabled></textarea>`} <br />
                {'</form>'}
                <br />
                {'  </div>'} <br />
                {'</form>'}
              </Code>
              <Code>
                {`// Error`} <br />
                {`<form action="" class="dsmForm">`} <br />
                {`  <textarea class="error"></textarea>`} <br />
                {'  <span class="error">This is an error message</span>'} <br />
                {'</form>'}
              </Code>
            </Section>

            <Section title="Text Field" id="textfield">
              These are used for small bodies of text. There are three states
              available: default, disabled and error. If there is an error add
              the <Code styling="inline">error</Code> class to the input
              element. You can also optionally add an error message with the
              code{' '}
              <Code styling="inline">{'<span class="error">....</span>'}</Code>.
              Finally you disable the element by adding{' '}
              <Code styling="inline">disabled</Code> to the input element. To
              add the text field you need to exactly copy the format of the code
              below.
              <form action="" className="dsmForm exampleContainer">
                <div className="inputLabel">
                  <label>Placeholder</label>
                  <input type="text" name="" id="" placeholder="bananas" />
                </div>
                <div className="inputLabel">
                  <label>Placeholder</label>
                  <input type="text" name="" id="" disabled />
                </div>
                <div className="inputLabel">
                  <label>Placeholder</label>
                  <input type="text" name="" className="error" id="" />
                </div>
              </form>
              <Code>
                {`<form action="" class="dsmForm">`} <br />
                {`  <div class="inputLabel">`} <br />
                {`      <label>Placeholder</label>`} <br />
                {`      <input type="text">`} <br />
                {`  </div>`} <br />
                {'</form>'}
              </Code>{' '}
              <Code>
                {`// Disabled`} <br />
                {`<form action="" class="dsmForm">`} <br />
                {`  <div class="inputLabel">`} <br />
                {`      <label>Placeholder</label>`} <br />
                {`      <input type="text" disabled>`} <br />
                {`  </div>`} <br />
                {'</form>'}
              </Code>
              <Code>
                {`// Error`} <br />
                {`<form action="" class="dsmForm">`} <br />
                {`  <div class="inputLabel">`} <br />
                {`      <label>Placeholder</label>`} <br />
                {`      <input type="text" class="error">`} <br />
                {`  </div>`} <br />
                {'</form>'}
              </Code>
            </Section>
            <Section title="Radio Button" id="radiobutton">
              These are used for small bodies of text. There are three states
              available: default, disabled and error. If there is an error add
              the <Code styling="inline">error</Code> class to the span element.
              You can also optionally add an error message with the code{' '}
              <Code styling="inline">{'<span class="error">....</span>'}</Code>.
              Finally you disable the element by adding{' '}
              <Code styling="inline">disabled</Code> to the input element.{' '}
              <p></p> There are also 3 different size options to choose from.
              You can choose between
              <Code styling="inline">medium</Code> or{' '}
              <Code styling="inline">large</Code> and the default size which
              requires no extra class. Add these styles to the{' '}
              <Code styling="inline">span</Code> element
              <form action="" className="dsmForm exampleContainer">
                <div className="radioContainer">
                  <input type="radio" name="radioTest" id="" />
                  <span className="radioStyling"></span>
                </div>
                <div className="radioContainer">
                  <input type="radio" name="radioTest" id="" disabled />
                  <span className="radioStyling"></span>
                </div>
                <div className="radioContainer">
                  <input type="radio" name="radioTest" id="" />
                  <span className="radioStyling error"></span>
                </div>
                <div className="radioContainer">
                  <input type="radio" name="radioTest" id="" />
                  <span className="radioStyling medium"></span>
                </div>
                <div className="radioContainer">
                  <input type="radio" name="radioTest" id="" disabled />
                  <span className="radioStyling medium"></span>
                </div>
                <div className="radioContainer">
                  <input type="radio" name="radioTest" id="" />
                  <span className="radioStyling medium error"></span>
                </div>
                <div className="radioContainer">
                  <input type="radio" name="radioTest" id="" />
                  <span className="radioStyling large"></span>
                </div>
                <div className="radioContainer">
                  <input type="radio" name="radioTest" id="" disabled />
                  <span className="radioStyling large"></span>
                </div>
                <div className="radioContainer">
                  <input type="radio" name="radioTest" id="" />
                  <span className="radioStyling large error"></span>
                </div>
              </form>
              <Code>
                {`<form action="" class="dsmForm">`} <br />
                {`  <div class="radioContainer">`} <br />
                {`      <input type="radio" name="radioTest">`} <br />
                {`      <span class="radioStyling"></span>`} <br />
                {`  </div>`} <br />
                {'</form>'}
              </Code>{' '}
              <Code>
                {`// Disabled`} <br />
                {`<form action="" class="dsmForm">`} <br />
                {`  <div class="radioContainer">`} <br />
                {`      <input type="radio" name="radioTest" disabled>`} <br />
                {`      <span class="radioStyling"></span>`} <br />
                {`  </div>`} <br />
                {'</form>'}
              </Code>
              <Code>
                {`// Error`} <br />
                {`<form action="" class="dsmForm">`} <br />
                {`  <div class="radioContainer">`} <br />
                {`      <input type="radio" name="radioTest">`} <br />
                {`      <span class="radioStyling error"></span>`} <br />
                {`  </div>`} <br />
                {'</form>'}
              </Code>
            </Section>
            <Section title="Checkbox" id="checkbox">
              These are used for small bodies of text. There are three states
              available: default, disabled and error. If there is an error add
              the <Code styling="inline">data-error=true</Code> to the label
              element. You can also optionally add an error message with the
              code{' '}
              <Code styling="inline">{'<span class="error">....</span>'}</Code>{' '}
              after the label element. Finally you disable the element by adding{' '}
              <Code styling="inline">data-disabled=true</Code> to the label
              element.{' '}
              <form action="" className="dsmForm exampleContainer">
                <label className="checkboxContainer">
                  <input type="checkbox" />
                  <span className="checkbox"></span>
                </label>
                <label className="checkboxContainer" data-disabled={true}>
                  <input type="checkbox" disabled />
                  <span className="checkbox"></span>
                </label>
                <label className="checkboxContainer" data-error={true}>
                  <input type="checkbox" />
                  <span className="checkbox error"></span>
                </label>
              </form>
              <Code>
                {`<form action="" class="dsmForm">`} <br />
                {`  <label class="checkboxContainer"></label>`} <br />
                {'</form>'}
              </Code>{' '}
              <Code>
                {`// Disabled`} <br />
                {`<form action="" class="dsmForm">`} <br />
                {`  <label class="checkboxContainer" data-disabled=true></label>`}
                <br />
                {'</form>'}
              </Code>
              <Code>
                {`// Error`} <br />
                {`<form action="" class="dsmForm">`} <br />
                {`  <label class="checkboxContainer" data-error=true></label>`}{' '}
                <br />
                {'</form>'}
              </Code>
            </Section>
          </div>
          <Scrollspy
            items={[
              'usage',
              'dropdown',
              'textarea',
              'textfield',
              'radiobutton',
              'checkbox',
            ]}
            componentTag="div"
            className="sideNav"
            offset={0}
            currentClassName="active"
          >
            <a href="#usage" className="active">
              Usage
            </a>
            <a href="#dropdown">Dropdown</a>
            <a href="#textarea">Text area</a>
            <a href="#textfield">Text Field</a>
            <a href="#radio">Radio Button</a>
            <a href="#checkbox">Checkbox</a>
          </Scrollspy>
        </div>
      </div>
    )
  }
}

export default Forms
