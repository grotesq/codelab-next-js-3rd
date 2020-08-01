import Link from 'next/link';
import Head from 'next/head';

function ArticleList(props) {
    const [ list, setList ] = React.useState( props.list || [] );
    function reload() {
        // axios.get( ... )
        setList( [] );
    }
    return (
        <div>
            <Head>
                <title>Article List</title>
            </Head>
            <h1>Article List</h1>
            <div className="flex justify-end">
                <button>새로고침</button>
            </div>
            <ul>
                <li>
                    <Link href="/articles/readme">
                        <a>README</a>
                    </Link>
                </li>
                <li>
                    <Link href="#none">
                        <a>2nd article</a>
                    </Link>
                </li>
                { list.map( item => (
                    <li>

                    </li>
                ) ) }
            </ul>
        </div>
    )
}

export default ArticleList;