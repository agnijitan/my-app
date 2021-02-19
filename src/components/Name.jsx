
const date = "";
const name = ""

function Name(props) {
    console.log(props);
    const {myName,myDate } = props;
    return <div>
                <div className= "card">
                        <h2 className= "cardTitle">{myName}</h2>
                        <p className= "cardFooter">{myDate}</p>
                </div>
            </div>
}
export default Name;