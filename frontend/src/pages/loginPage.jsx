import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredential),
      });

      const responseData = await response.json();

      if (response.ok) {
        alert(responseData.message);
        localStorage.setItem("token", responseData.token);
        navigate("/");
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
          navigate("/register");
        }}
      >
        Register
      </button>
      <h1>Login Page</h1>
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
        <label>Enter Your Email</label>
        <input
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
          type="text"
          id="email"
          name="email"
          required
          onChange={(e) => {
            setUserCredential((value) => ({ ...value, email: e.target.value }));
          }}
        ></input>
        <br />
        <br />

        <label>Enter Password</label>
        <input
          style={{
            height: "20px",
            width: "180px",
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "20px",
            padding: "2px",
          }}
          type="text"
          id="password"
          name="password"
          required
          onChange={(e) => {
            setUserCredential((value) => ({
              ...value,
              password: e.target.value,
            }));
          }}
        ></input>
        <br />
        <br />

        <button
          style={{ fontSize: "25px" }}
          onClick={() => {
            loginUser();
          }}
        >
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
