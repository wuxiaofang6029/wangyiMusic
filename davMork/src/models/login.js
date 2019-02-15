import { getBanner } from '../services/index'

export default {
    namespace: 'index',

    state: {
        banner: []
    },

    // 异步操作
    effects: {
        * getBanner({ payload }, { call, put }) {
            console.log('hhh')
            let data = yield call(getBanner);
            console.log('data...', data)
            yield put({
                type: 'updateState',
                payload: {
                    banner: data.data.banners
                }
            })
        }
    },

    // 同步操作
    reducers: {
        updateState(state, { payload }) {
            return {...state, ...payload }
        }
    },

};