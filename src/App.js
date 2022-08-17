import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './screens/Home';
import StepOne from './screens/StepOne';
import StepTwo from './screens/StepTwo';


import {store} from './reducers/redux' ;

import {Provider} from 'react-redux';


function App() {
 return (
  <Provider store={store}>
   <Router>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/StepOne" component={StepOne}  />
       <Route path="/StepTwo" component={StepTwo}  />
     </Switch>
   </Router>
   </Provider>
  
 );
}

export default App;
