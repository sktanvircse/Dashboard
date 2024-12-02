import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMediaQuery } from "react-responsive";
import { Col, Form, Input, Row } from "reactstrap";
import Modal from 'react-bootstrap/Modal';
import Map from "../../views/partial/Map";

const MapFrom = () => {
    const mobileView = useMediaQuery({ query: "(max-width: 767px)" });
    const tabView = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1300px)", });

    const [showMap, setShowMap] = useState(false);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleClose = () => setShowMap(false);
    const handleShow = () => setShowMap(true);

    const handleMapSelect = (selectedLatitude, selectedLongitude) => {
        setLatitude(selectedLatitude);
        setLongitude(selectedLongitude);
        setValues((prevValues) => ({
            ...prevValues,
            destin_lat: selectedLatitude,
            destin_long: selectedLongitude,
        }));
        setShowMap(false);
    };

    const handleCloseMap = () => {
        setShowMap(false);
    };

    const handleLatitude = (e) => {
        handleChange(e);
        setLatitude("");
        setLongitude("");
        let destination_lat = e.target.value;
        setValues((prevValues) => ({
            ...prevValues,
            destin_lat: destination_lat,
        }));
    };
    const handleLongitude = (e) => {
        handleChange(e);
        setLatitude("");
        setLongitude("");
        let destination_long = e.target.value;
        setValues((prevValues) => ({
            ...prevValues,
            destin_long: destination_long,
        }));
    }

    const initialValues = {
        id: 0,
        destin_lat: "",
        destin_long: "",
    };
    const validationSchema = Yup.object().shape({
    });
    const onSubmit = (values) => {
        console.log("values", values)
    };
    const { values, setValues, handleChange, handleSubmit } = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        enableReinitialize: true,
    });

    const handleSubmitAll = (e) => {
        handleSubmit(e);
    };


    return (
        <>
            <div className="main-section">
                <div className="page-header-section">
                    <p>
                        <span className="header-title">
                            <span className="text-brand ">Map For Latitude & Longitude</span>
                        </span>
                    </p>
                    <button
                        type="button"
                        name="btnSubmit"
                        onClick={handleSubmitAll}
                        className="btn bg-brand text-white py-1"
                    >
                        <i className="fas fa-save"></i>{" "}Submit
                    </button>
                </div>



                <Form className="form-section" onSubmit={handleSubmit}>
                    <Row className={`form-card justify-center ${mobileView ? "w-90vw" : tabView ? "w-70vw" : "w-80vw"} `}>

                        <Col className="mt-2 flex g-10 col-lg-6 col-md-6 col-12">
                            <div className="w-100">
                                <span className="text-black text-12 font-500">Destination Latitude</span>
                                <Input
                                    type="text"
                                    className="app-input"
                                    name="destin_lat"
                                    value={values.destin_lat}
                                    onChange={(e) => handleLatitude(e)}
                                    placeholder="latitude"
                                />
                            </div>
                            <div className="w-100">
                                <span className="text-black text-12 font-500">Destination Longitude</span>
                                <Input
                                    type="text"
                                    className="app-input"
                                    name="destin_long"
                                    value={values.destin_long}
                                    onChange={(e) => handleLongitude(e)}
                                    placeholder="longitude"
                                />
                            </div>
                            <div className="mt-24">
                                <span
                                    className="text-white bg-brand r-4 p-2 pointer"
                                    onClick={handleShow}
                                >
                                    <i className="fas fa-location">
                                        <span className="text-12 ml-5">Map</span>
                                    </i>
                                </span>
                            </div>
                        </Col>

                    </Row>
                </Form>
            </div>

            <Modal show={showMap} onHide={handleClose}>
                <Modal.Body >
                    <Map
                        onSelectLocation={handleMapSelect}
                        onClose={handleCloseMap}
                        latitude={latitude}
                        longitude={longitude}
                    />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default MapFrom
