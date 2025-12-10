import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import BanerAd from '../components/BanerAd'


const Inicial = () => {
    return (
        <Container className="py-4">

            <BanerAd />
            
            <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <p>
                        A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal...
                    </p>
                    <p>
                        Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático...
                    </p>
                    <p>
                        A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
                    </p>
                </Card.Body>
            </Card>

            <Row className="g-4">
                <Col md={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img 
                            variant="top" 
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                            alt="Vida no Campus"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>Vida no Campus</Card.Title>
                            <Card.Text>
                                Um ambiente vibrante e acolhedor, com atividades extracurriculares e eventos que promovem o desenvolvimento integral dos alunos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img 
                            variant="top" 
                            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                            alt="Biblioteca"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>Biblioteca</Card.Title>
                            <Card.Text>
                                Uma biblioteca com acervo completo e atualizado, incluindo livros, revistas e recursos digitais para pesquisa e estudo.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img 
                            variant="top" 
                            src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985"
                            alt="Prédio Principal"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>Prédio Principal</Card.Title>
                            <Card.Text>
                                O centro de nossa instituição, com salas de aula modernas e laboratórios equipados para atender às necessidades dos cursos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="g-4 mt-4">
                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Img 
                            variant="top"
                            src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0"
                            alt="Parcerias"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="text-center">
                            <Card.Title>Parcerias com Empresas</Card.Title>
                            <Card.Text>
                                Mantemos acordos com empresas locais e multinacionais para oferecer oportunidades de estágio e emprego aos nossos alunos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Img 
                            variant="top"
                            src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
                            alt="Inovação"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="text-center">
                            <Card.Title>Inovação e Tecnologia</Card.Title>
                            <Card.Text>
                                Investimos constantemente em tecnologia e inovação para proporcionar a melhor experiência de aprendizado aos nossos estudantes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Inicial