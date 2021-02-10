import React, { Component } from 'react'
import Code from './common/code.jsx'
import CopyIcon from './common/copyIcon.jsx'
import Section from './common/section.jsx'

class Logos extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="pageTitle contentMaxWidth">
          Logos - UNDER CONSTRUCTION
        </div>
        <div className="splitColumn contentMaxWidth">
          <div id="content">
            <div className="pageSubTitle">
              A list of general logos used throughout sites
            </div>

            <Section title="Usage" id="usage">
              All logos are preceded with the class{' '}
              <Code styling="inline">.dsmLogo</Code> and the related icon code.
              Logos can be coloured, resized and have any effects applied to it
              that a normal font would have.
              <Code>{'<i class="dsmIcons clock"></i>'}</Code>
              <div className="exampleContainer iconGrid logoGrid">
                <CopyIcon prefix="dsmLogo" mode="logo" name="adidas" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="alain_mikli" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="armani_exchange" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="autoflex" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="balenciaga" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="blumarine" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="burberry" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="calvin_klein_ck" />
                <CopyIcon
                  prefix="dsmLogo"
                  mode="logo"
                  name="calvin_klein_cosmetics"
                />
                <CopyIcon prefix="dsmLogo" mode="logo" name="calvin_klein" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="celine" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="coach" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="converse" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="diva" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="dkny" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="dsquared2" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="emporio_armani" />
                <CopyIcon
                  prefix="dsmLogo"
                  mode="logo"
                  name="ermenegildo_zenga"
                />
                <CopyIcon prefix="dsmLogo" mode="logo" name="flexon" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="fossil" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="gant" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="giorgio_armani" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="givenchy" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="gucci" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="guess" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="hugo_boss" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="jimmy_choo" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="kate_spade" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="lacoste" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="lanvim" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="marc_jacobs" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="michael_kors" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="miu_miu" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="mont_blanc" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="nike" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="oakley" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="oneill" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="persol" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="pierre_cardin" />
                <CopyIcon
                  prefix="dsmLogo"
                  mode="logo"
                  name="polo_ralph_lauren"
                />
                <CopyIcon prefix="dsmLogo" mode="logo" name="prada" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="puma" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="ray_ban" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="saint_laurent" />
                <CopyIcon
                  prefix="dsmLogo"
                  mode="logo"
                  name="stella_mccartney"
                />
                <CopyIcon prefix="dsmLogo" mode="logo" name="super_dry" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="swarovski" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="tom_ford" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="tory_burch" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="versach" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="viktor_and_rolf" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="vogue" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="revel_tune" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="amelia_e" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="gamespex" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="gamespex2" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="muse_symbol" />
                <CopyIcon
                  prefix="dsmLogo"
                  mode="logo"
                  name="muse_x_hilary_duff"
                />
                <CopyIcon prefix="dsmLogo" mode="logo" name="muse" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="olos" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="ottoto" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="revel" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="seaclean" />
                <CopyIcon prefix="dsmLogo" mode="logo" name="yoji" />
              </div>
            </Section>
          </div>
        </div>
      </div>
    )
  }
}

export default Logos
