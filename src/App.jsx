import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [profession, setProfession] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [branch, setBranch] = useState("");
  const [assigned, setAssigned] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const [newColor, setNewColor] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newBranch, setNewBranch] = useState("");
  const [newAssigned, setNewAssigned] = useState("");

  // Rest call for adding an employee, information is added to database
  const addEmployee = () => {
    Axios.post(`http://localhost:3000/create`, {
      name: name,
      code: code,
      profession: profession,
      color: color,
      city: city,
      branch: branch,
      assigned: assigned,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          code: code,
          profession: profession,
          color: color,
          city: city,
          branch: branch,
          assigned: assigned,
        },
      ]);
      // Call getEmployees after adding the new employee to refresh the database entries
      getEmployees();
    });
  };

  // Store all the employees in the database to an array for visual representation
  const getEmployees = () => {
    Axios.get(`http://localhost:3000/employees`).then((response) => {
      setEmployeeList(response.data);
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((num) => {
          return num.id != id;
        })
      );
    });
  };

  // id is given as a parameter to change a specific employee's id
  const updateColor = (id) => {
    Axios.put("http://localhost:3000/updateColor", {
      color: newColor,
      id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((num) => {
          return num.id == id
            ? {
                id: num.id,
                name: num.name,
                code: num.code,
                profession: num.profession,
                color: newColor,
                city: num.city,
                branch: num.branch,
                assigned: num.assigned,
              }
            : num;
        })
      );
    });
  };

  const updateCity = (id) => {
    Axios.put("http://localhost:3000/updateCity", {
      city: newCity,
      id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((num) => {
          return num.id == id
            ? {
                id: num.id,
                name: num.name,
                code: num.code,
                profession: num.profession,
                color: num.color,
                city: newCity,
                branch: num.branch,
                assigned: num.assigned,
              }
            : num;
        })
      );
    });
  };

  const updateBranch = (id) => {
    Axios.put("http://localhost:3000/updateBranch", {
      branch: newBranch,
      id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((num) => {
          return num.id == id
            ? {
                id: num.id,
                name: num.name,
                code: num.code,
                profession: num.profession,
                color: num.color,
                city: num.city,
                branch: newBranch,
                assigned: num.assigned,
              }
            : num;
        })
      );
    });
  };

  const updateAssigned = (id) => {
    Axios.put("http://localhost:3000/updateAssigned", {
      assigned: newAssigned,
      id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((num) => {
          return num.id == id
            ? {
                id: num.id,
                name: num.name,
                code: num.code,
                profession: num.profession,
                color: num.color,
                city: num.city,
                branch: num.branch,
                assigned: newAssigned,
              }
            : num;
        })
      );
    });
  };

  return (
    <div className="App">
      <h1>List of Employees</h1>
      <div className="info">
        <p>Click on the button below to see list of employees</p>
        <button className="button3" onClick={getEmployees}>
          Show Employees
        </button>
        <p></p>
        <div className="employees">
          {employeeList.map((num, key) => {
            return (
              <div className="employeeLayout">
                <div className="leftSideInfo">
                  <h3>Name: {num.name} </h3>
                  <h3>Code: {num.code}</h3>
                  <h3>Profession: {num.profession}</h3>
                  <h3>Color: {num.color}</h3>
                  <h3>City: {num.city}</h3>
                  <h3>Branch: {num.branch}</h3>
                  <h3>Assigned: {num.assigned}</h3>
                </div>
                <div className="rightSide">
                  <button
                    className="delete"
                    onClick={() => {
                      deleteEmployee(num.id);
                    }}
                  >
                    {" "}
                    Delete Employee
                  </button>
                  <h3 className="rightSideText">
                    Edit employee information below if needed
                  </h3>
                  <div className="updaters">
                    <input
                      className="rightSideText"
                      type="text"
                      placeholder="ex. #FFFFFF or Blue"
                      onChange={(event) => {
                        setNewColor(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateColor(num.id);
                      }}
                      className="rightSideButton"
                    >
                      Change Color
                    </button>
                  </div>
                  <div className="updaters">
                    <input
                      className="rightSideText"
                      type="text"
                      placeholder="ex. Brampton"
                      onChange={(event) => {
                        setNewCity(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateCity(num.id);
                      }}
                      className="rightSideButton"
                    >
                      Change City
                    </button>
                  </div>
                  <div className="updaters">
                    <input
                      className="rightSideText"
                      type="text"
                      placeholder="ex. Ontario"
                      onChange={(event) => {
                        setNewBranch(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateBranch(num.id);
                      }}
                      className="rightSideButton"
                    >
                      Change Branch
                    </button>
                  </div>
                  <div className="updaters">
                    <input
                      className="rightSideText"
                      type="text"
                      placeholder="ex. true or false"
                      onChange={(event) => {
                        setNewAssigned(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateAssigned(num.id);
                      }}
                      className="rightSideButton"
                    >
                      Change Assigned
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h2>Fill in the information below to add a new employee</h2>
        <label className="headings">Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label className="headings">Code:</label>
        <input
          type="text"
          onChange={(event) => {
            setCode(event.target.value);
          }}
        />
        <label className="headings">Profession:</label>
        <input
          type="text"
          onChange={(event) => {
            setProfession(event.target.value);
          }}
        />
        <label className="headings">Color:</label>
        <input
          type="text"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <label className="headings">City:</label>
        <input
          type="text"
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <label className="headings">Branch:</label>
        <input
          type="text"
          onChange={(event) => {
            setBranch(event.target.value);
          }}
        />
        <label className="headings">Assigned:</label>
        <input
          type="text"
          onChange={(event) => {
            setAssigned(event.target.value);
          }}
        />
        <p></p>
        <button className="button2" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
    </div>
  );
}

export default App;
