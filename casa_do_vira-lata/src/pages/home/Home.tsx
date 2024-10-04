"use client";

import { IonRow, IonCol, IonFooter } from '@ionic/react';
import { useState, useEffect } from 'react';
import 'primeicons/primeicons.css';
import './Home.css';

const HomeComponent = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <main id="main">
                {/* Navbar */}
                <section id='navbar' className="casa-vl-home">
                    <IonRow>
                        <IonCol size="3">
                            <div className="nav-title">Casa do Vira-Lata</div>
                        </IonCol>

                        <IonCol size="6" className="nav-links">
                            <a href="#home">Home</a>
                            <a href="#about">Quem Somos</a>
                            <a href="#adopt">Adote</a>
                            <a href="#contact">Contato</a>
                        </IonCol>

                        <IonCol size="3" className='nav-social'>
                            <a href="https://www.instagram.com/casadoviralata/">
                                <i className="pi pi-instagram"></i>
                            </a>
                            <a href="https://www.tiktok.com/@casadoviralata">
                                <i className="pi pi-tiktok"></i>
                            </a>
                        </IonCol>
                    </IonRow>
                </section>

                {/* Hero Section */}
                <section id='hero'>
                    <IonRow>
                        <IonCol size='6' className='casa-vl-hero-info'>
                            <h3>Casa do Vira-Lata</h3>
                            <p>
                                Não existe animais de rua, existem animais
                                nas ruas e eles precisam de nós!
                            </p>
                        </IonCol>

                        <IonCol size='6' className='casa-vl-hero-img'>
                            <div className="hero-img"></div>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size='12' className='casa-vl-hero-info-panel'>
                            <div className="casa-vl-info-card">
                                <div className="casa-vl-help-us">
                                    <a href="">
                                        <i className="pi pi-heart"></i>
                                        <span>Assinatura Mercado Pago</span>
                                    </a>
                                    <a href="">
                                        <i className="pi pi-heart"></i>
                                        <span>Assinatura Apoia-se</span>
                                    </a>
                                    <a href="">
                                        <i className="pi pi-heart"></i>
                                        <span>Assinatura PICPAY R$ 12,00 por ano</span>
                                    </a>
                                </div>
                            </div>
                        </IonCol>
                    </IonRow>
                </section>

                {/* About Section */}
                <section id='about'>
                    <IonRow>
                        <IonCol size='12' className='casa-vl-about-us'>
                            <h2>Quem Somos</h2>
                            <p>
                                Somos uma organização dedicada a encontrar lares amorosos para cães e gatos abandonados.
                            </p>
                        </IonCol>
                    </IonRow>
                </section>

                {/* Adopt Section */}
                <section id='adopt'>
                    <IonRow className='adopt-title'>
                        <h1>Vamos adotar um amiguinho?</h1>
                    </IonRow>
                    <IonRow>
                        <IonCol size='6'>
                            <div className="adopt-img"></div>
                        </IonCol>

                        <IonCol size='6'>
                            <div className="adopt-forms">
                                <h2>Formulário de adoção</h2>
                                <iframe
                                    className='adopt-form-content'
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSeOTb99-qlbSya0KVOG2Yk091s2925yVYg5_KSwtFoTLn1WHw/viewform?embedded=true"
                                    width="100%"
                                    height="640"
                                    frameBorder="0"
                                    marginHeight={0}
                                    marginWidth={0}
                                    title="Formulário de Adoção">Carregando…
                                </iframe>
                            </div>
                        </IonCol>
                    </IonRow>
                </section>

                {/* Footer */}
                <IonFooter className='casa-vl-footer'>
                    <IonRow className='footer-top'>
                        <IonCol size='6' className='footer-social'>
                            <a href="https://www.instagram.com/casadoviralata/">
                                <i className="pi pi-instagram"></i>
                            </a>
                            <a href="https://www.tiktok.com/@casadoviralata">
                                <i className="pi pi-tiktok"></i>
                            </a>
                        </IonCol>

                        <IonCol size='6' className='footer-logo'>
                            <a href="#home">
                                <div className="footer-img"></div>
                            </a>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='12' className='footer-rights'>
                            Todos os direitos reservados | desenvolvido por devside.
                        </IonCol>
                    </IonRow>
                </IonFooter>
            </main>
        </div>
    );
};


export default HomeComponent;
