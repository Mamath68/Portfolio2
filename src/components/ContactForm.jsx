import React, { useState } from 'react';
import './contactForm.css';

function ContactForm() {
    const initialState = {
        fullname: '',
        email: '',
        subject: '',
        message: '',
        result: '',
    };

    const [text, setText] = useState(initialState);

    const changeText = e => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, result: '' })
    };

    const handleSubmitMessage = e => {
        e.preventDefault();
        if (text.fullname === '' || text.email === '' || text.message === '') {
            setText({ ...text, result: 'incomplete' });
        }
        console.log('submit');
    }
    return (
        <form className="contact-form mt-4" onSubmit={handleSubmitMessage}>
            <div className="row">
                <div className="col-md-6 form-group">
                    <input
                        type="text"
                        name="fullname"
                        value={text.fullname}
                        onChange={changeText}
                        id="name"
                        className="form-control"
                        placeholder="Prenom + Nom"
                    />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                        type="email"
                        name="email"
                        value={text.email}
                        onChange={changeText}
                        id="email"
                        className="form-control"
                        placeholder="Votre Email"
                    />
                </div>
            </div>
            <div className="form-group mt-3">
                <input
                    type="text"
                    name="subject"
                    value={text.subject}
                    onChange={changeText}
                    id="subject"
                    className="form-control"
                    placeholder="Sujet"
                />
            </div>
            <div className="form-group mt-3">
                <textarea
                    name="message"
                    id="message"
                    value={text.message}
                    onChange={changeText}
                    rows="6"
                    className="form-control"
                    placeholder="Votre Message">
                </textarea>
            </div>
            {text.result === 'incomplete' && (
                <div className="error-message">S'il Vous Plait, Veuillez Renseigner toutes les zones du formulaire</div>
            )}
            <div className="text-center">
                <button type="submit">Envoyer le message</button>
            </div>
        </form>
    )
}

export default ContactForm