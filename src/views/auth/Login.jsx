import React from 'react'
import { Input, Form, Row, Col, Button } from "reactstrap";
import sidePhoto from '../../assets/images/vecteezy_futuristic-technology-concept-mixed-media-innovations-data_7019122.jpg'

const Login = () => {
  return (
    <>
      <div>
        <Row style={{ height: "100vh", width: "100%" }}>
          <Col className='col-12 relative z-0' style={{ backgroundImage: `url(${sidePhoto})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100vh" }}>
            <div className='h-75vh absolute flex justify-center align-center z-1' style={{ backgroundColor: "#2563EB4D", height: "100vh", width: "100%" }}>
              <div className='w-550 h-75vh bg-white absolute z-1 r-20'>
                <Form className='form-section'>
                  <Row className='form-card w-500 r-20' style={{ marginTop: "20px" }}>

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

                    <Col className="col-lg-12 col-md-12 col-12 mb-10">
                      <span className="text-black text-12 font-500">PassWord</span>
                      <Input
                        className='app-input w-100 mt-6'
                        name='email'
                        type='password'
                      />
                    </Col>

                    <Col className="col-lg-12 col-md-12 col-12">
                      <Button> Login </Button>
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
