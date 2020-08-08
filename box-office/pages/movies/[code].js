import axios from 'axios';
import Error from 'next/error';
import Router from 'next/router';

function MovieInfo(props) {
    console.log( props.data )
    if( props.error ) {
        return <Error statusCode={ 500 } title={props.error.message}/>;
    }
    if( props.data.faultInfo ) {
        return <Error statusCode={ 500 } title={props.data.faultInfo.message}/>;
    }
    const info = props.data.movieInfoResult.movieInfo;
    return (
        <div>
            <h1>{ info.movieNm } <small>{info.movieNmEn}</small></h1>
            <p>{ info.openDt }</p>
            <dl>
                <dt>감독</dt>
                <dd>
                    { info.directors.map( director => director.peopleNm ).join( ', ' ) }
                </dd>
                <dt>출연</dt>
                <dd>
                    { info.actors.map( actor => actor.peopleNm ).join( ', ' ) }
                </dd>
                <dt>장르</dt>
                <dd>
                    { info.genres.map( genre => genre.genreNm ).join( ', ' ) }
                </dd>
                <dt>국가</dt>
                <dd>
                    { info.nations.map( nation => nation.nationNm ).join( ', ' ) }
                </dd>
            </dl>

            <button onClick={ () => Router.back() }>돌아가기</button>
        </div>
    )
}

MovieInfo.getInitialProps = async function( context ) {
    let url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json';
    url += '?key=893ff292b3d7abe66b205fa34149f183';
    url += '&movieCd=' + context.query.code;
    try {
        const response = await axios.get( url );
        return {
            data: response.data,
        }
    }
    catch(error) {
        return { error };
    }
}

export default MovieInfo;
