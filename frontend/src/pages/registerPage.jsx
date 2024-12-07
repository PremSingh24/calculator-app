import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [userCredential, setUserCredential] = useState({
    name: "",
    email: "",
    password: "",
    operator: "",
  });

  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredential),
      });

      const responseData = await response.json();

      if (response.ok) {
        alert(responseData.message);
        navigate("/login");
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
        textAlign: "center",
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
          navigate("/login");
        }}
      >
        Login
      </button>
      <h1>Register Page</h1>
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
        <label>Enter Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          style={{
            height: "20px",
            width: "180px",
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: "2px",
            fontSize: "20px",
          }}
          onChange={(e) => {
            setUserCredential((value) => ({ ...value, name: e.target.value }));
          }}
        ></input>
        <br />
        <br />

        <label>Enter Your Email</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          style={{
            height: "20px",
            width: "180px",
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: "2px",
            fontSize: "20px",
          }}
          onChange={(e) => {
            setUserCredential((value) => ({ ...value, email: e.target.value }));
          }}
        ></input>
        <br />
        <br />

        <label>Enter Password</label>
        <input
          type="text"
          id="password"
          name="password"
          required
          style={{
            height: "20px",
            width: "180px",
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: "2px",
            fontSize: "20px",
          }}
          onChange={(e) => {
            setUserCredential((value) => ({
              ...value,
              password: e.target.value,
            }));
          }}
        ></input>
        <br />
        <br />
        <label>Choose Operator</label>
        <select
          id="operator"
          name="operator"
          required
          style={{ fontSize: "20px" }}
          onChange={(e) => {
            setUserCredential((value) => ({
              ...value,
              operator: e.target.value,
            }));
          }}
        >
          <option value="+">addition</option>
          <option value="-">subtraction</option>
          <option value="/">division</option>
          <option value="*">multiplication</option>
        </select>
        <br />
        <br />
        <button
          style={{ fontSize: "20px" }}
          onClick={() => {
            registerUser();
          }}
        >
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
};

//cto@levontechno.com

export default RegisterPage;
