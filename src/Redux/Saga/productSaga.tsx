import {put, takeEvery, call} from 'redux-saga/effects'
import { IProduct } from '../../interfaces/IProduct'
import { setProducts } from '../actions/actions';
import { types } from '../actions/types';

const fetchProductsFromApi = () => fetch('https://fakestoreapi.com/products?limit=6')
                                    .then(res=>res.json());

function* fetchProductsWorker () {
    const data: IProduct = yield call(fetchProductsFromApi);
    const json: IProduct = yield call(()=>new Promise(res => res(data)));
    yield put(setProducts(json))

}


export function* productWatcher(){
    yield takeEvery(types.FETCH_PRODUCTS, fetchProductsWorker)
}