import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* TailwindCss directives */
import './assets/tailwind.css';
import { Login } from './pages/login/Login';
import MainMenu from './pages/main-menu/MainMenu';
import { AuthProvider } from './services/AuthContext';
import PrivateRoute from './services/PrivateRoute';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id='main' className='overflow-scroll'>
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/main-menu" component={MainMenu} exact />
            <Redirect exact from="/" to="/login" />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </AuthProvider>
  </IonApp>
);

export default App;
