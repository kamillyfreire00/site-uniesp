import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

const Faculdade = () => {
  return (
    <Container className="py-4">

      <h2 className="mb-4">A Faculdade</h2>
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <p>
              A Faculdade Uniesp!
          </p>
          <p>
             O UNIESP Centro Universitário, anteriormente Instituto de Educação Superior da Paraíba, é uma instituição privada de ensino superior mantida pela Sociedade de Ensino Superior da Paraíba.
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

    </Container>
  )
}

export default Faculdade