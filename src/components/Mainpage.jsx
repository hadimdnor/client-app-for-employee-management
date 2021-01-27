import "../App.css";
import { useState } from "react";
import Axios from "axios";

function Mainpage() {
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
         console.log(response)
         setEmployeeList(employeeList.map((val)=>{
           return val.id== id? 
           {
              id: val.id,
              name: val.name,
              staff_id: val.staff_id,
              age: val.age,
              email: val.email,
              position: val.position,
              department: val.department,
              wage: newWage,
           } : val
         }))
         
  
       })
    }
  
  
    const deleteEmployee = (id) => {
      Axios
        .delete(`http://localhost:3001/delete/${id}`)
        .then((response)=> {
          setEmployeeList(employeeList.filter((val)=>{
            return val.id != id    
          })
        )
      })
    }
  
  return (

      <div className="Home">
  
      <div className="information1">
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
        <div>
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

        </div>
            

            
      </div>
      <div>
        
      </div>

      <div className="employees">
      <button onClick={addEmployee}>Add Employee</button>
         <button onClick={getEmployees}>Show Employees</button>
          {employeeList.map((val, _key)=>{
            return (<div className="employee">
              <div>
              <h5>Name: {val.name}</h5> 
              <h5>Staff Id: {val.staff_id}</h5> 
              <h5>Age: {val.age}</h5> 
              <h5>Email: {val.email}</h5> 
              <h5>Position: {val.position}</h5> 
              <h5>Department: {val.Department}</h5> 
              <h5>Wage(yearly): {val.wage}</h5> 
              </div>
              
              <div className="editdelete">
                  <input type="text"placeholder="update wage" 
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}/>
                  <button onClick={()=>{updateEmployeeWedge(val.id)}}>Update</button>

                  <button onClick={()=>{deleteEmployee(val.id)}}>Delete</button>
              </div>
            </div> )
          })}
      </div>     
   </div>
  )
}

    
    
    

    
    


export default Mainpage;