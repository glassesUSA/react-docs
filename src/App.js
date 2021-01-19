import './App.css'
import './components/navbar'
import Sidebar from './components/sidebar'
import { Switch, Route } from 'react-router-dom'
import Index from './components'
import CtaButtons from './components/cta-buttons'
import RoundButtons from './components/round-buttons'
import Toggles from './components/toggles'
import Forms from './components/forms'
import Tooltip from './components/tooltip'
import Badges from './components/badges'
import Shadows from './components/shadow'
import Colours from './components/colours'
import Icons from './components/icons'

function App() {
  return (
    <div className="App">
      <div className="page-layout">
        <Sidebar />
        <div className="content">
          <Route
            render={({ location }) => (
              <Switch location={location}>
                <Route path="/" exact component={Index} />
                <Route path="/components/cta-buttons" component={CtaButtons} />
                <Route
                  path="/components/round-buttons"
                  component={RoundButtons}
                />
                <Route path="/components/toggles" component={Toggles} />
                <Route path="/components/forms" component={Forms} />
                <Route path="/components/tooltips" component={Tooltip} />
                <Route path="/components/badges" component={Badges} />
                <Route path="/components/shadows" component={Shadows} />
                <Route path="/components/colours" component={Colours} />
                <Route path="/components/icon-library" component={Icons} />
              </Switch>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default App
