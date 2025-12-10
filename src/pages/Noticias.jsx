import React from 'react'
import { Card, Container, Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Noticias = () => {
  
  const noticias = [
    {
      id: 1,
      titulo: "Divulgado o Calendário Acadêmico de 2026.1",
      descricao: "",
      imagem: "/noticias/noticia1.jpg",
      dia: "02",
      mes: "Dec"
    },
    {
      id: 2,
      titulo: "Concurso de Bolsas acontece no próximo sábado (06)",
      descricao: "Candidatos podem ser contemplados com bolsas de até 100% através da Prova Destaque",
      imagem: "/noticias/noticia2.jpg",
      dia: "01",
      mes: "Dec"
    },
    {
      id: 3,
      titulo: "UNIESP promove ação de empregabilidade em parceria com escola estadual",
      descricao: "Iniciativa contemplou estudantes do Ensino Médio e da EJA (Educação de Jovens e Adultos)",
      imagem: "/noticias/noticia3.jpg",
      dia: "01",
      mes: "Dec"
    },
    {
      id: 4,
      titulo: "Projeto UNITALENTOS da UNIESP promove ação de empregabilidade em parceria com o IFPB Cabedelo",
      descricao: "Ação realizou consultorias com simulação de entrevistas de emprego e elaboração de currículos",
      imagem: "/noticias/noticia4.jpg",
      dia: "27",
      mes: "Nov"
    },
    {
      id: 5,
      titulo: "Red Friday: UNIESP lança condições especiais para graduação",
      descricao: "Ofertas estão vigentes até o dia 1º de dezembro",
      imagem: "/noticias/noticia5.jpg",
      dia: "27",
      mes: "Nov"
    },
    {
      id: 6,
      titulo: "Liga Acadêmica de Psicologia Social do UNIESP promove I Simpósio Regional de Psicologia Social",
      descricao: "Evento tem como tema (GLITCH: o ser humano falhando no meio social automatizado)",
      imagem: "/noticias/noticia6.jpg",
      dia: "24",
      mes: "Nov"
    }
  ]

  return (
    <Container className="py-4">
      <h2 className="mb-4">Notícias</h2>

      <Row className="g-4">
        {noticias.map((noticia) => (
          <Col key={noticia.id} md={6} lg={4}>
            <Card className="h-100 shadow-sm" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ position: 'relative' }}>
                <Card.Img 
                  variant="top" 
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                {/* Badge de data */}
                <Badge 
                  bg="danger" 
                  style={{ 
                    position: 'absolute', 
                    bottom: '10px', 
                    left: '10px',
                    fontSize: '1rem',
                    padding: '10px 15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    lineHeight: '1.2'
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{noticia.dia}</div>
                  <div style={{ fontSize: '0.9rem' }}>{noticia.mes}</div>
                </Badge>
              </div>

              <Card.Body>
                <Card.Title style={{ color: '#dc3545', fontSize: '1.1rem', minHeight: '50px' }}>
                  <Link 
                    to={`/noticias/${noticia.id}`} 
                    style={{ textDecoration: 'none', color: '#dc3545' }}
                  >
                    {noticia.titulo}
                  </Link>
                </Card.Title>
                {noticia.descricao && (
                  <Card.Text style={{ color: '#666', fontSize: '0.9rem' }}>
                    {noticia.descricao}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Noticias