import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [staff_id, setStaff_id] = useState(0);
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [wage, setWage] = useState(0);
  const [newWage, setNewWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  
  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      staff_id: staff_id,
      age: age,
      email: email,
      position: position,
      department: department,
      wage: wage,
      }).then(() => {
       setEmployeeList([
        ...employeeList,
        {
          name: name,
          staff_id: staff_id,
          age: age,
          email: email,
          position: position,
          department: department,
          wage: wage,
        },
      ]);
    });
  };

 
  const getEmployees = () => {
    Axios
      .get("http://localhost:3001/employees")
      .then((response)=>{
        setEmployeeList(response.data.rows)
       
      })
  }

  const updateEmployeeWedge = (id) => {
    Axios
     .put("http://localhost:3001/update",{ wage: newWage, id: id})
     .then((response)=>{
       alert("update")
       console.log("update")

     })
  }


 
 

  

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Staff Id:</label>
        <input
          type="number"
          onChange={(event) => {
            setStaff_id(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Department:</label>
        <input
          type="text"
          onChange={(event) => {
            setDepartment(event.target.value);
          }}
        />
        <label>Wage (year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
         <button onClick={getEmployees}>Show Employees</button>
          {employeeList.map((val, key)=>{
            return (<div className="employee">
              
              <h5>Name: {val.name}</h5> 
              <h5>Staff Id: {val.staff_id}</h5> 
              <h5>Age: {val.age}</h5> 
              <h5>Email: {val.email}</h5> 
              <h5>Position: {val.position}</h5> 
              <h5>Department: {val.Department}</h5> 
              <h5>Wage(yearly): {val.wage}</h5> 
              <div>
                <input type="text"placeholder="update wage" 
                onChange={(event) => {
                  setNewWage(event.target.value);
                }}/>
                <button onClick={()=>{updateEmployeeWedge(val.id)}}>Update</button>
              </div>

              
              </div>)
          })}
       

           
              
     
      </div>
       

        
   </div>
  )
}

export default App
