import {put, takeEvery, call} from 'redux-saga/effects'
import { IProduct } from '../../interfaces/IProduct'
import { setProducts, setProduct } from '../actions/actions';
import { types } from '../actions/types';

const fetchProductsFromApi = () => fetch('https://fakestoreapi.com/products?limit=6')
                                    .then(res=>res.json());
const fetchProductFromApi = (id: number) => fetch(`https://fakestoreapi.com/products/${2}`)
                                     .then(res => res.json());

function* fetchProductsWorker () {
    const data: IProduct[] = yield call(fetchProductsFromApi);
    yield put(setProducts(data))
}

function* fetchProductWorker (id:number) {
    const data: IProduct = yield call(fetchProductFromApi, id);
    yield put(setProduct(data))
}


export function* productWatcher(){
    yield takeEvery(types.FETCH_PRODUCTS_ASYNC, fetchProductsWorker);
    yield takeEvery(types.FETCH_PRODUCT_ASYNC as any, fetchProductWorker);
}