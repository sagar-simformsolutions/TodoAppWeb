import {connect} from 'react-redux';

import App from './App';

const mapStatesToProps = ({todos}) => ({
  ...todos,
});
export default connect(mapStatesToProps, null)(App);
