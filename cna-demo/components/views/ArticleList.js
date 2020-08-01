import Link from 'next/link';
import Head from 'next/head';

function ArticleList(props) {
    return (
        <div>
            <Head>
                <title>Article List</title>
            </Head>
            <h1>Article List</h1>
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
            </ul>
        </div>
    )
}

export default ArticleList;