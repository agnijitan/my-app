import React from 'react';
import Card from './components/Card';
import Data from './data.json';
import Name from  './components/Name'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import CONDITIONAL_RENDERING from './CONDITIONAL_RENDERING'
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS'
import EVENT_HANDLER from './EVENT_HANDLER/index'
import HOOKS_USESTATE1 from './HOOKS_USESTATE/index1'
import HOOKS_USESTATE2 from './HOOKS_USESTATE/index2'
import FORM from './FORM/Form'
import Employee from './components/Employee'




function App(){
            //  console.log(Data[0].title)
            //  let items = []; 
            //   for(let x=0; x<Data.length; x++) 
            //         items.push(<Card titleText={Data[x].title} descText={Data[x].desc}/>
            //     )


            //  Here I am showing how to use map
                // let items = [];

                // items = Data.map((items) => <Card titleText={items.title} descText={items.desc} /> );


            const date = new Date();


 return <div>
            {/* <div>
                <h1 className="headingStyle">Todo App</h1>
                                    {/* <Card titleText="Call Mother" descText="This is my 1st description"/>
                                    <Card titleText="Call Father" descText="This is my 2nd description"/>
                                    <Card titleText="Call Husband" descText="This is my 3rd description"/> */}
                                    {/* <Card titleText={Data[0].title} descText={Data[0].desc}/> */}

                    {/* while using map with items array
                    {items} * /}
                    
                { Data.map((items, index) => <Card key = {index} titleText={items.title} descText={items.desc} /> )}
           </div>
           <div>
                <Name myName="Happy" myDate={new Date(date).toString()}/>
           </div>
           <div>
                <Name myName="Hiyan" myDate={new Date(date).toString()}/>
           </div> */}
           {/* <Card1 name="Card1" desc="This is card1"/>
           <Card2 name="Card2" desc="This is card2" /> */}

           {/* <CONDITIONAL_RENDERING /> */}
           {/* <EVENT_HANDLER_CLASS /> */}
           {/* <EVENT_HANDLER /> */}
           {/* <HOOKS_USESTATE1 /> */}
           {/* <FORM /> */}
           <Employee />
/        </div>
}
export default App;