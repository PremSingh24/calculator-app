import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Calculate = () => {
  const [input, setInput] = useState({
    first: 0,
    second: 0,
  });
  const [output, setOutput] = useState();
  const calculate = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "http://localhost:3000/api/operations/calculate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token,
          },
          body: JSON.stringify(input),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setOutput(responseData.output);
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      alert("Something Went Wrong");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          height: "40px",
          width: "130px",
          fontSize: "25px",
          position: "absolute",
          top: 30,
          right: "25%",
        }}
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        LogOut
      </button>
      <h1>Calculate</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "50vw",
          border: "2px solid black",
        }}
      >
        <label>Input 1</label>
        <input
          type="number"
          id="first"
          name="first"
          style={{
            height: "20px",
            width: "180px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "20px",
          }}
          onChange={(e) => {
            setInput((value) => ({ ...value, first: e.target.value }));
          }}
        ></input>
        <br />
        <br />

        <label>Input 2</label>
        <input
          type="number"
          id="second"
          name="second"
          style={{
            height: "20px",
            width: "180px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "20px",
          }}
          onChange={(e) => {
            setInput((value) => ({
              ...value,
              second: e.target.value,
            }));
          }}
        ></input>
        <br />
        <br />

        <label>Output</label>
        <span
          style={{
            height: "20px",
            width: "180px",
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            padding: "2px",
          }}
        >
          {output}
        </span>
        <br />
        <br />

        <button
          style={{ fontSize: "25px" }}
          onClick={() => {
            calculate();
          }}
        >
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
};
const HomePage = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("token");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {loggedIn ? (
        <Calculate />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10vh",
            height: "80vh",
            width: "50vw",
            border: "2px solid black",
          }}
        >
          <button
            style={{ fontSize: "30px", marginRight: "60px" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
          <button
            style={{ fontSize: "30px" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
