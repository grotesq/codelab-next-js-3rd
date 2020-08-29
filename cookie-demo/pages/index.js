import Link from 'next/link';
import Cookies from 'universal-cookie';

function Home(props) {
  return (
    <div>
      <Link href="/second">
        <a>
          다음 페이지로
        </a>
      </Link>

      {props.hideNotice !== 'yes' && (
        <div>
          <div>
            [공지사항]
          </div>
          <div>
            <label>
              <input type="checkbox" onChange={event => {
                const cookies = new Cookies();
                cookies.set( 'hide-notice', event.target.checked ? 'yes' : 'no' );
              }}/>
              오늘 하루 표시하지 않음
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

Home.getInitialProps = async context => {
  const cookies = context.req ? new Cookies( context.req.headers.cookie ) : new Cookies();
  console.log( 'Home.getInitialProps' );
  return {
    hideNotice: cookies.get('hide-notice'),
  }
}

export default Home;