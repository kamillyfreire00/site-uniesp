import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomFooter = () => {
    return (
        <footer style={{ 
            backgroundColor: '#343a40', 
            width: '100%',
            marginTop: 'auto',
            position: 'relative',
            left: 0,
            right: 0
        }} className="text-white py-5">
            <Container fluid className="px-4">
                <Row className="g-4">
                    {/* Coluna UNIESP */}
                    <Col xs={12} md={4}>
                        <h5 className="mb-3">UNIESP</h5>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Educação com foco em inovação, impacto social e formação de profissionais preparados para os desafios de amanhã.
                        </p>
                    </Col>

                    {/* Coluna Links úteis */}
                    <Col xs={12} md={4}>
                        <h5 className="mb-3">Links úteis</h5>
                        <nav className="d-flex flex-column">
                            <Link 
                                to="/a-faculdade" 
                                className="text-white text-decoration-none mb-2"
                                style={{ fontSize: '0.9rem' }}
                            >
                                A Faculdade
                            </Link>
                            <Link 
                                to="/dpo-lgpd" 
                                className="text-white text-decoration-none mb-2"
                                style={{ fontSize: '0.9rem' }}
                            >
                                DPO & LGPD
                            </Link>
                            <Link 
                                to="/noticias" 
                                className="text-white text-decoration-none"
                                style={{ fontSize: '0.9rem' }}
                            >
                                Notícias
                            </Link>
                        </nav>
                    </Col>

                    {/* Coluna Contato */}
                    <Col xs={12} md={4}>
                        <h5 className="mb-3">Contato</h5>
                        <div style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                            <p className="mb-2">Rua Professor Miguel Couto, 120</p>
                            <p className="mb-2">João Pessoa - PB</p>
                            <p className="mb-2">Telefone: (83) 3333-1234</p>
                            <p className="mb-0">
                                Email:{' '}
                                <a 
                                    href="mailto:atendimento@uniesp.edu.br" 
                                    className="text-white"
                                >
                                    atendimento@uniesp.edu.br
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Linha de copyright */}
                <Row className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Col>
                        <p className="text-center mb-0" style={{ fontSize: '0.85rem' }}>
                            © 2025 UNIESP. Todos os direitos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default CustomFooter;