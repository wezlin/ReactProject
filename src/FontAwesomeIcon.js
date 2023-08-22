export default function FontAwesomeIcon({iconName, style}){

    return (<i className={`fa fa-${iconName}`} style={style} aria-hidden="true"></i>);
}
