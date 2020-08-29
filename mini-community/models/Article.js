import Bookshelf from './core/Bookshelf';

// Defining models
const Article = Bookshelf.model('Article', {
    tableName: 'articles'
})

export default Article;
