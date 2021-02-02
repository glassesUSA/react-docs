import React, { Component } from 'react'
import Code from './common/code.jsx'
import CopyIcon from './common/copyIcon.jsx'
import Section from './common/section.jsx'

class Logos extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="pageTitle contentMaxWidth">Logos - UNDER CONSTRUCTION</div>
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
              <div className="exampleContainer iconGrid">
                <CopyIcon prefix="dsmLogo" name="adidas" />
                <CopyIcon prefix="dsmLogo" name="alain_mikli" />
                <CopyIcon prefix="dsmLogo" name="armani_exchange" />
                <CopyIcon prefix="dsmLogo" name="autoflex" />
                <CopyIcon prefix="dsmLogo" name="balenciaga" />
                <CopyIcon prefix="dsmLogo" name="blumarine" />
                <CopyIcon prefix="dsmLogo" name="burberry" />
                <CopyIcon prefix="dsmLogo" name="calvin_klein_ck" />
                <CopyIcon prefix="dsmLogo" name="calvin_klein_cosmetics" />
                <CopyIcon prefix="dsmLogo" name="calvin_klein" />
                <CopyIcon prefix="dsmLogo" name="celine" />
                <CopyIcon prefix="dsmLogo" name="coach" />
                <CopyIcon prefix="dsmLogo" name="converse" />
                <CopyIcon prefix="dsmLogo" name="diva" />
                <CopyIcon prefix="dsmLogo" name="dkny" />
                <CopyIcon prefix="dsmLogo" name="dsquared2" />
                <CopyIcon prefix="dsmLogo" name="emporio_armani" />
                <CopyIcon prefix="dsmLogo" name="ermenegildo_zenga" />
                <CopyIcon prefix="dsmLogo" name="flexon" />
                <CopyIcon prefix="dsmLogo" name="fossil" />
                <CopyIcon prefix="dsmLogo" name="gant" />
                <CopyIcon prefix="dsmLogo" name="giorgio_armani" />
                <CopyIcon prefix="dsmLogo" name="givenchy" />
                <CopyIcon prefix="dsmLogo" name="gucci" />
                <CopyIcon prefix="dsmLogo" name="guess" />
                <CopyIcon prefix="dsmLogo" name="hugo_boss" />
                <CopyIcon prefix="dsmLogo" name="jimmy_choo" />
                <CopyIcon prefix="dsmLogo" name="kate_spade" />
                <CopyIcon prefix="dsmLogo" name="lacoste" />
                <CopyIcon prefix="dsmLogo" name="lanvim" />
                <CopyIcon prefix="dsmLogo" name="marc_jacobs" />
                <CopyIcon prefix="dsmLogo" name="michael_kors" />
                <CopyIcon prefix="dsmLogo" name="miu_miu" />
                <CopyIcon prefix="dsmLogo" name="mont_blanc" />
                <CopyIcon prefix="dsmLogo" name="nike" />
                <CopyIcon prefix="dsmLogo" name="oakley" />
                <CopyIcon prefix="dsmLogo" name="oneill" />
                <CopyIcon prefix="dsmLogo" name="persol" />
                <CopyIcon prefix="dsmLogo" name="pierre_cardin" />
                <CopyIcon prefix="dsmLogo" name="polo_ralph_lauren" />
                <CopyIcon prefix="dsmLogo" name="prada" />
                <CopyIcon prefix="dsmLogo" name="puma" />
                <CopyIcon prefix="dsmLogo" name="ray_ban" />
                <CopyIcon prefix="dsmLogo" name="saint_laurent" />
                <CopyIcon prefix="dsmLogo" name="stella_mccartney" />
                <CopyIcon prefix="dsmLogo" name="super_dry" />
                <CopyIcon prefix="dsmLogo" name="swarovski" />
                <CopyIcon prefix="dsmLogo" name="tom_ford" />
                <CopyIcon prefix="dsmLogo" name="tory_burch" />
                <CopyIcon prefix="dsmLogo" name="versach" />
                <CopyIcon prefix="dsmLogo" name="viktor_and_rolf" />
                <CopyIcon prefix="dsmLogo" name="vogue" />
                <CopyIcon prefix="dsmLogo" name="revel_tune" />
                <CopyIcon prefix="dsmLogo" name="amelia_e" />
                <CopyIcon prefix="dsmLogo" name="gamespex" />
                <CopyIcon prefix="dsmLogo" name="gamespex2" />
                <CopyIcon prefix="dsmLogo" name="muse_symbol" />
                <CopyIcon prefix="dsmLogo" name="muse_x_hilary_duff" />
                <CopyIcon prefix="dsmLogo" name="muse" />
                <CopyIcon prefix="dsmLogo" name="olos" />
                <CopyIcon prefix="dsmLogo" name="ottoto" />
                <CopyIcon prefix="dsmLogo" name="revel" />
                <CopyIcon prefix="dsmLogo" name="seaclean" />
                <CopyIcon prefix="dsmLogo" name="yoji" />
              </div>
            </Section>
          </div>
        </div>
      </div>
    )
  }
}

export default Logos
