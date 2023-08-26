import AuthContext from "./AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthState = ({ children }) => {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [loading, setLoading] = useState(false);
  const stdSignUp = async (stdData) => {
    setLoading(true);
    console.log(process.env.REACT_APP_BACKEND_URL);
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/studentSignup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: stdData.name,
          studentId: stdData.studentId,
          studentEmail: stdData.studentEmail,
          studentPassword: stdData.studentPassword,
          studentPhone: stdData.studentPhone,
        }),
      }
    );
    let data = await res.json();
    console.log(data);
    if (data.success) {
      setAuthToken(data.token);
      localStorage.setItem("authToken", JSON.stringify(data.token));
      navigate("/HomePage");
      setLoading(false);
    } else {
      console.log(data.msg);
    }
    setLoading(false);
  };
  const prfSignUp = async (prfData) => {
    setLoading(true);
    console.log(process.env.REACT_APP_BACKEND_URL);
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/studentSignup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: prfData.name,
          proffId: prfData.proffId,
          proffEmail: prfData.proffEmail,
          proffPassword: prfData.proffPassword,
          proffPhone: prfData.proffPhone,
        }),
      }
    );
    let data = await res.json();
    console.log(data);
    if (data.success) {
      setAuthToken(data.token);
      localStorage.setItem("authToken", JSON.stringify(data.token));
      navigate("/HomePage");
      setLoading(false);
    } else {
      console.log(data.msg);
    }
    setLoading(false);
  };
  const stdLogin = async (stdData) => {
    setLoading(true);
    console.log(process.env.REACT_APP_BACKEND_URL);
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/studentLogin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEmail: stdData.studentEmail,
          studentPassword: stdData.studentPassword,
        }),
      }
    );
    let data = await res.json();
    console.log(data);
    if (data.success) {
      setAuthToken(data.token);
      localStorage.setItem("authToken", JSON.stringify(data.token));
      navigate("/HomePage");
      setLoading(false);
    } else {
      console.log(data.msg);
    }
    setLoading(false);
  };
  const prfLogin = async (prfData) => {
    setLoading(true);
    console.log(process.env.REACT_APP_BACKEND_URL);
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/proffLogin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          proffEmail: prfData.proffEmail,
          proffPassword: prfData.proffPassword,
        }),
      }
    );
    let data = await res.json();
    console.log(data);
    if (data.success) {
      setAuthToken(data.token);
      localStorage.setItem("authToken", JSON.stringify(data.token));
      navigate("/HomePage");
      setLoading(false);
    } else {
      console.log(data.msg);
    }
    setLoading(false);
  };
  let contextData = {
    authToken: authToken,
    stdSignUp: stdSignUp,
    prfSignUp: prfSignUp,
    stdLogin: stdLogin,
    prfLogin: prfLogin,
    loading: loading,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthState;
