function Page(props) {
    return (
        <div>
            {props.path}
        </div>
    )
}

Page.getInitialProps = async function( context ) {
    return {
        path : `/data/${context.query.group}/${context.query.id}`,
    }
}

export default Page;