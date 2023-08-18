import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 로컬 스토리지를 사용하도록 설정
import authReducer from './auth';

// redux-persist 구성
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = createStore(persistedReducer); // redux-persist를 사용한 리듀서를 스토어에 연결
const persistor = persistStore(store); // Redux 스토어와 연결된 퍼시스터 객체 생성

export { store, persistor };
