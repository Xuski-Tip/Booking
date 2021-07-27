import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import {jurnalReducer} from "./jurnalReducer";

const rootReducer = combineReducers({
    app: appReducer,
    jurnal: jurnalReducer,
});
export { rootReducer };
