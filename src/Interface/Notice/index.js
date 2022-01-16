import './notice.css';

function Notice( props ) {


    return (
        <div className={ "notice notice-" + props?.type }>
            { props?.children }
        </div>
    )
}

export default Notice;
