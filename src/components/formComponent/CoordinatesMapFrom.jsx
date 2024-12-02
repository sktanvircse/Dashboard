import React, { useState, useRef } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMediaQuery } from "react-responsive";
import { Col, Form, Input, Row } from "reactstrap";
import L from "leaflet";
import {
    MapContainer,
    TileLayer,
    FeatureGroup,
    Marker,
    Popup,
    Polyline,
    Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import osm from "../../views/partial/osm-providers";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";


const CoordinatesMapFrom = () => {
    const mobileView = useMediaQuery({ query: "(max-width: 767px)" });
    const tabView = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1300px)", });

    const [center, setCenter] = useState({ lat: 23.684994, lng: 90.356331 });
    const ZOOM_LEVEL = 10;
    const mapRef = useRef();

    const [routeCoordinates, setRouteCoordinates] = useState([]);

    const customIcon = L.divIcon({
        html: '<i class="fa fa-map-marker-alt fa-2x " style="color: red; font-size: 20px";></i>', // Font Awesome icon
        iconAnchor: [7, 20], // Set the anchor point of the icon
        className: "p-unset m-unset",
    });

    const onPolygonCreated = (e) => {
        const latlngs = e.layer._latlngs[0]; // Extracting coordinates of the drawn polygon
        if (Array.isArray(latlngs)) {
            setRouteCoordinates(latlngs);
            const latlngsString = JSON.stringify(latlngs);
            setValues((prevValues) => ({
                ...prevValues,
                route_coordinates: latlngsString,
            }));
        } else {
            const polylineLatLngs = e.layer.getLatLngs();
            setRouteCoordinates(polylineLatLngs);
            const latlngsString2 = JSON.stringify(polylineLatLngs);
            setValues((prevValues) => ({
                ...prevValues,
                route_coordinates: latlngsString2,
            }));
        }
    };

    const initialValues = {
        id: 0,
        route_coordinates: "",
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

    // const handleSubmitAll = (e) => {
    //     handleSubmit(e);
    // };


    return (
        <>
            <div className="main-section">
                <div className="page-header-section">
                    <p>
                        <span className="header-title">
                            <span className="text-brand ">Map For Coordinates</span>
                        </span>
                    </p>
                    {/* <button
                        type="button"
                        name="btnSubmit"
                        onClick={handleSubmitAll}
                        className="btn bg-brand text-white py-1"
                    >
                        <i className="fas fa-save"></i>{" "}Submit
                    </button> */}
                </div>



                <Form className="form-section" onSubmit={handleSubmit}>
                    <Row className={`form-card ${mobileView ? "w-90vw" : tabView ? "w-70vw" : "w-80vw"} `}>

                        <Col className="col-lg-2 col-md-2 col-12">
                            <textarea
                                name='route_coordinates'
                                value={values.route_coordinates}
                                disabled
                                style={{height:"600px" , width:"100%"}}
                            />
                        </Col>

                        <Col className="col-lg-10 col-md-10 col-12">
                            <MapContainer
                                center={center}
                                zoom={ZOOM_LEVEL}
                                ref={mapRef}
                                style={{ width: "100%", height: "700px" }}
                            >
                                <FeatureGroup>
                                    <EditControl
                                        position="topright"
                                        onCreated={onPolygonCreated}
                                        draw={{
                                            rectangle: false,
                                            circle: false,
                                            circlemarker: false,
                                            marker: false,
                                            //   polyline: false,
                                        }}
                                    />
                                    {/* <Polyline positions={routeCoordinates} /> */}
                                    <Polygon positions={routeCoordinates} />
                                    {routeCoordinates.map((coordinate, index) => (
                                        <Marker
                                            key={index}
                                            position={[coordinate.lat, coordinate.lng]}
                                            icon={customIcon}
                                        >
                                            <Popup>{`Marker ${index + 1}`}</Popup>
                                        </Marker>
                                    ))}
                                </FeatureGroup>
                                <TileLayer
                                    url={osm.maptiler.url}
                                    attribution={osm.maptiler.attribution}
                                />
                            </MapContainer>
                        </Col>

                    </Row>
                </Form>
            </div>
        </>
    )
}

export default CoordinatesMapFrom
