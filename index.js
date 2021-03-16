/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; // 첫 화면 파일
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
