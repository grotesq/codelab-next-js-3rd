import ArticleList from '../../components/views/ArticleList';

function Page(props) {
    return <ArticleList {...props}/>
}

Page.getInitialProps = async function() {
    // await
    return {
        list: [],
    }
}

export default Page;