import React, {useState} from 'react'
import axios from 'axios'

export default function Employee() {
    const [name, setName] = useState(" ");
    const [jobDesc, setJobDesc] = useState(" ");
    const [salary, setSalary] = useState(0);
    const [emp, setEmp] = useState([]);
  
const handleClick = () => {
      axios
        .get("https://run.mocky.io/v3/8ce14a10-3912-453e-b642-1b7b24e3f1cd")
        .then(response => {
          console.log(response);
          setEmp(response.data.employees)
          setName('XX')
        });

         
      }
  
    return (

        

      <div>
       
       <button onClick={handleClick}>Click Me</button>

       
				<ul>
					{
					 emp.map( p => 
						<li>
							{p.Name}
						</li>
					 )
					}

					<li> {emp.length}</li>
				</ul>
 
      
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tr>
            <td>abc</td>
            <td>20</td>
          </tr>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th>First_Name</th>
              <th>Job_Desc</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>Engineer</td>
              <td>FFF</td>
            </tr>
            <tr>
              <td>Happy</td>
              <td>Engineer</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>Hiyan</td>
              <td>Engineer</td>
              <td>3000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  