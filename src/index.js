import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleUp, faAngleDown, faFilter, faExclamationTriangle, faSearch, faClipboardCheck, faArrowCircleRight, faCheckCircle,
  faPlusCircle, faEdit, faTimesCircle, faTrash, faRecycle, faUser, faFileUpload, faPrint, faAngleDoubleDown, faFileCsv,
  faComments, faImages, faSave, faHome, faEye, faCheck, faPlus, faBackspace, faMinus, faTimes, faTrashAlt,
  faInfoCircle, faReply, faSyncAlt, faExchangeAlt, faSignInAlt, faRetweet, faShare, faClone, faBars,
  faShoppingCart, faUserCircle, faCartPlus, faSpinner, faCut, faFileContract, faFileSignature, faPhone, faKey, faMask, faUnlock
} from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faAngleUp, faAngleDown, faFilter, faExclamationTriangle, faSearch, faClipboardCheck, faArrowCircleRight, faCheckCircle,
  faPlusCircle, faEdit, faTimesCircle, faTrash, faRecycle, faUser, faFileUpload, faPrint, faAngleDoubleDown, faFileCsv,
  faComments, faImages, faSave, faHome, faEye, faCheck, faPlus, faBackspace, faMinus, faTimes, faTrashAlt,
  faInfoCircle, faReply, faSyncAlt, faExchangeAlt, faSignInAlt, faRetweet, faShare, faClone, faBars,
  faShoppingCart, faUserCircle, faCartPlus, faSpinner, faCut, faFileContract, faFileSignature, faPhone, faKey, faMask, faUnlock);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
