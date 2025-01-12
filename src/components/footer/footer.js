import React from 'react'
import icinstagram from '../../img/ic-instagram.svg'
import icwhatsapp from '../../img/ic-whatsapp.svg'

export const Footer = () => (
        <footer className="contact">
            <div className="container">
                <h2>Contact</h2>
                <div className="fx-wrp contact-items">
                <div className="contact-item">
                    <p className="contact__caption">Phone</p>
                    <a className="text-big" href="tel:+74993506604">+7 (499) 350-66-04</a>
                </div>
                <div className="contact-item">
                    <p className="contact__caption">Phone</p>
                    <div className="fx soc">
                        <a className="soc-link" href="#" target="_blank">
                            <img
                                src={icinstagram}
                                alt="instagram"
                            />
                        </a>
                        <a className="soc-link" href="#" target="_blank">
                            <img
                                src={icwhatsapp}
                                alt="whatsapp"
                            />
                        </a>
                    </div>
                </div>
                <div className="contact-item">
                    <p className="contact__caption">Address</p>
                    <p className="text-big">Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
                </div>
                <div className="contact-item">
                    <p className="contact__caption">Working Hours</p>
                    <p className="text-big">24 hours a day</p>
                </div>
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac2f48db119bd8881997d01a43cca698a419dd92a8678e5d926dae5f913af954f&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
            </div>
        </footer>
    )
