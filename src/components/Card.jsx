// const todoTitle = "Call Family";
// const todoDescription = "This is an example showing how we are using JSX in React";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();


function Card(props) {
  console.log(props);
  const {titleText, descText} = props; 
    return  <div className= "card">
              <h2 className= "cardTitle">{titleText}</h2>
              <p className= "cardDesc">{descText}</p>
              <p className= "cardFooter">{dateName+ "/" +monthName+ "/" +currentYear}</p>
            </div>
   }
export default Card;
   
