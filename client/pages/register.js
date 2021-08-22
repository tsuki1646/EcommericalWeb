import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

const Register = () => {
  const [name, setName] = useState("Moon");
  const [email, setEmail] = useState("nmn.nguyet@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({ name, email, password });
    try {
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      // console.log("REGISTER RESPONSE", data);
      toast("Registration successful. Please login.");
      setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };
  
  return (
    <>
      <h1 className="p-5 mb-4 bg-light rounded-3 text-center square">Register</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />

          <input
            type="email"
            className="form-control mb-4 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />

          <input
            type="password"
            className="form-control mb-4 p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />

          <button 
            type="submit" 
            className="btn btn-block btn-primary"
            disabled={!name || !email || !password || loading}
            >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
