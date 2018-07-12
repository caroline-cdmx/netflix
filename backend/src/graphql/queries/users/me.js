import User from '../../../models/users';
import {UserType} from '../../types';

export default {
    type: UserType,
    resolve(root,params,context) {
        return context.user
    }
}