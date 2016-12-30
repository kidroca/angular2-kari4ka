/**
 * Created by kidroca on 31.12.2016 г..
 */
import dataConfig from '../secret/parse-config';
const Parse = require('parse');

Parse.serverURL = dataConfig.apiUrl;
Parse.initialize(dataConfig.applicationId, dataConfig.jsKey);
