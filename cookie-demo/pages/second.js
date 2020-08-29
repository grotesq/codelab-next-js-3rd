import Link from 'next/link';

function Second(props){
    return(
        <div>
            <Link href="/">
                <a>
                    첫 페이지로
                </a>
            </Link>

        </div>
    )
}

Second.getInitialProps = async context => {
    console.log( 'Second.getInitialProps' );
    return {
      a: 1,
    }
  }

export default Second;