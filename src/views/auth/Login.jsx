import React, { useState, useTransition } from 'react'
import { useNavigate, useParams, Link } from "react-router-dom";
import { Input, Form, Row, Col, Button } from "reactstrap";
import sidePhoto from '../../assets/images/vecteezy_futuristic-technology-concept-mixed-media-innovations-data_7019122.jpg'
import { Copy } from "react-feather";

const Login = () => {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const handlingLogin = (e) => {
    e.preventDefault();
    setLoading(true); // Start showing a loading state
    startTransition(() => {
      // Simulate some async login logic if needed
      setTimeout(() => {
        navigate("/dashboard");
      }, 500); // Simulated delay, can be replaced with actual logic (like an API call)
    });
  }

  return (
    <>
      <div>
        <Row style={{ height: "100vh", width: "100%" }}>
          <Col className='col-12 relative z-0' style={{ backgroundImage: `url(${sidePhoto})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100vh" }}>
            <div className='h-75vh absolute flex justify-center align-center z-1' style={{ backgroundColor: "#2563EB4D", height: "100vh", width: "100%" }}>
              <div className='w-500 h-55vh bg-white absolute z-1 r-20'>
                <Form className='form-section'>
                  <Row className=' w-400 r-20' style={{ marginTop: "20px" }}>

                    <Col className="col-lg-12 col-md-12 col-12 mb-20 flex justify-center">
                      <span className="text-black text-24 font-500">Login</span>
                    </Col>

                    <Col className="col-lg-12 col-md-12 col-12 mb-10">
                      <span className="text-black text-12 font-500">Name</span>
                      <Input
                        className='app-input w-100 mt-6'
                        name='name'
                      />
                    </Col>

                    <Col className="col-lg-12 col-md-12 col-12 mb-10">
                      <span className="text-black text-12 font-500">Email</span>
                      <Input
                        className='app-input w-100 mt-6'
                        name='email'
                        type='email'
                      />
                    </Col>

                    <Col className="col-lg-12 col-md-12 col-12 mb-30">
                      <span className="text-black text-12 font-500">Password</span>
                      <Input
                        className='app-input w-100 mt-6'
                        name='email'
                        type='password'
                      />
                    </Col>

                    <Col className="col-lg-12 col-md-12 col-12 flex justify-center">
                      <Button className='bg-primary w-100' disabled={loading || isPending} type="submit" onClick={(e) => handlingLogin(e)}>  {loading || isPending ? "Logging in..." : "Login"} </Button>
                    </Col>


                    <Col className="col-lg-12 col-md-12 col-12 flex justify-between" style={{ marginTop: "70px" }}>
                      <span className="text-black text-24 font-500">Default Login For</span>
                      <Copy className='mr-20 pointer' />
                    </Col>

                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Login
