import Link from 'next/link';
import Head from 'next/head';

function ReadMe(props) {
    return (
        <div>
            <Head>
                <title>Read Me</title>
            </Head>
            <h1>Read Me</h1>

            <Link href="/articles">
                <a>&lt; Back to List</a>
            </Link>
        </div>
    )
}

export default ReadMe;