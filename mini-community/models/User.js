import Bookshelf from './core/Bookshelf';

// Defining models
const User = Bookshelf.model('User', {
    tableName: 'users'
})

export default User;
