'use client';
import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ServicesData } from '@/data/servicesdata';
import Checkbox from '@/components/checkbox/Checkbox';

const ContactForm = () => {
    const initialServicesState = ServicesData.reduce((acc, service) => {
        acc[service.Link] = false;
        return acc;
    }, {});

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            budget: '',
            message: '',
            services: initialServicesState,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email format'),
            phone: Yup.string().required('Phone is required'),
            budget: Yup.number('Enter Numbers Only').required('Budget is required'),
            message: Yup.string(),
        }),
        onSubmit: async (values, { resetForm }) => {
            const selectedServices = Object.keys(values.services).filter(
                (key) => values.services[key]
            );

            const payload = {
                ...values,
                selectedServices,
            };

            try {
                const response = await axios.post('/api/contact', payload);
                toast.success('Message sent successfully');
                resetForm();
            } catch (error) {
                console.error('Error sending message', error);
                toast.error('There was an error sending the message');
            }
        },
    });

    const scrollRef = useRef(null);
    let intervalId = useRef(null);

    useEffect(() => {
        const startScrolling = () => {
            intervalId.current = setInterval(() => {
                if (scrollRef.current) {
                    if (
                        scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
                        scrollRef.current.scrollWidth
                    ) {
                        scrollRef.current.scrollLeft = 0;
                    } else {
                        scrollRef.current.scrollLeft += 2;
                    }
                }
            }, 20);
        };

        startScrolling();

        return () => clearInterval(intervalId.current);
    }, []);

    const pauseScrolling = () => clearInterval(intervalId.current);
    const resumeScrolling = () => {
        intervalId.current = setInterval(() => {
            if (scrollRef.current) {
                if (
                    scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
                    scrollRef.current.scrollWidth
                ) {
                    scrollRef.current.scrollLeft = 0;
                } else {
                    scrollRef.current.scrollLeft += 2;
                }
            }
        }, 20);
    };

    return (
        <>
            <style jsx>{`
        .d-flex::-webkit-scrollbar {
            display: none;
        }
        .d-flex {
            -ms-overflow-style: none;
            white-space: nowrap;
        }
        .ownBorder {
            position: relative;
        }
        .ownBorder::after {
            content: "";
            position: absolute;
            border: 1px dashed grey;
            height: 49px;
            right: 0;
            bottom: 25%;
        }
    `}</style>
            <form onSubmit={formik.handleSubmit} id="contact-form" className="form2">
                <p className="text-black font-weight-bold px-2" style={{fontWeight:"bold"}}>Services you are looking for</p>
                <div className="row ownBorder">
                    <div
                        className="d-flex py-2"
                        style={{
                            overflowX: "auto",
                            WebkitOverflowScrolling: "touch",
                            scrollbarWidth: "none",
                        }}
                        ref={scrollRef}
                        onMouseEnter={pauseScrolling}
                        onMouseLeave={resumeScrolling}
                    >
                        {ServicesData.map((service) => (
                            <Checkbox
                                key={service.ServiceNumber}
                                className="mb-2"
                                name={`services.${service.Link}`}
                                checked={formik.values.services[service.Link] || false}
                                labelText={service?.title}
                                onChange={formik.handleChange}
                            />
                        ))}
                    </div>
                </div>
                <div className="controls row">
                    <div className="col-lg-6">
                        <div className="form-group mb-30">
                            <input
                                id="form_name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="form-control"
                                required
                                style={{ padding: '14px 14px' }}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group mb-30">
                            <input
                                id="form_email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                style={{ padding: '14px 14px' }}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group mb-30">
                            <input
                                id="form_subject"
                                type="text"
                                name="phone"
                                required
                                placeholder="Phone"
                                className="form-control"
                                style={{ padding: '14px 14px' }}
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-danger">{formik.errors.phone}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group mb-30">
                            <input
                                id="form_subject"
                                type="number"
                                name="budget"
                                required
                                placeholder="Budget"
                                className="form-control"
                                style={{ padding: '14px 14px' }}
                                value={formik.values.budget}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.budget && formik.errors.budget ? (
                                <div className="text-danger">{formik.errors.budget}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <textarea
                                id="form_message"
                                name="message"
                                placeholder="Message"
                                rows="4"
                                className="form-control"
                                style={{ padding: '14px 14px' }}
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className="text-danger">{formik.errors.message}</div>
                            ) : null}
                        </div>
                        <div className="mt-30">
                            <button
                                type="submit"
                                className="butn butn-sm butn-bg py-3 font-bold radius-10 bg-black text-white"
                                disabled={formik.isSubmitting}
                            >
                                <span className="text">Send Message</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
