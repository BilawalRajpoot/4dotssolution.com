'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            subject: Yup.string(),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('/api/contact', values);
                toast.success('Message sent successfully');
                resetForm();
            } catch (error) {
                console.error('Error sending message', error);
                toast.error('There was an error sending the message');
            }
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} id="contact-form" className="form2">
                <div className="controls row">
                    <div className="col-lg-6">
                        <div className="form-group mb-30">
                            <input
                                id="form_name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="form-control"
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
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group mb-30">
                            <input
                                id="form_subject"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="form-control"
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
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
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className="text-danger">{formik.errors.message}</div>
                            ) : null}
                        </div>
                        <div className="mt-30">
                            <button type="submit" className="butn butn-full butn-bord radius-30" disabled={formik.isSubmitting}>
                                <span className="text">Let&apos;s Talk</span>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
