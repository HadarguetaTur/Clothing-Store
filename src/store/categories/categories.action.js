import { createAction } from '../../utils/reducer/reducer.utils';
import  CATEGORIES_ACTION_TYPES from '../categories/categories.type';

export const setCategories = (categoriesArry) =>
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categoriesArry)

    