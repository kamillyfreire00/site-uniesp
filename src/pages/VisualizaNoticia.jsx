import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const VisualizaNoticia = () => {
  const { id } = useParams()

  // Dados da notícia (depois você pode buscar de uma API usando o id)
  const noticia = {
    titulo: "Equipe feminina de natação do UNIESP conquista o 2º lugar nos Jogos Universitários Brasileiros",
    data: "Fri, 24/Oct/2025",
    conteudo: [
      {
        tipo: "paragrafo",
        texto: "A equipe feminina de natação do UNIESP Centro Universitário fez história ao sagrar-se <strong>vice-campeã brasileira universitária por equipe</strong> nos <strong>Jogos Universitários Brasileiros (JUBs)</strong>."
      },
      {
        tipo: "paragrafo",
        texto: "As atletas do UNIESP conquistaram <strong>três medalhas em provas de revezamento - duas de prata e uma de bronze - e cinco medalhas individuais</strong>, além de outras importantes colocações que contribuíram para um feito inédito: é a primeira vez que uma instituição de ensino superior paraibana alcança o segundo lugar por equipes na modalidade."
      },
      {
        tipo: "paragrafo",
        texto: "O time masculino também teve um excelente desempenho, conquistando o 5º lugar geral do Brasil, entre quase 100 universidades participantes."
      },
      {
        tipo: "paragrafo",
        texto: "Os JUBs foram disputados em Natal, no Rio Grande do Norte, e as provas da natação aconteceram entre os dias 13 e 16 de outubro. A equipe de natação do UNIESP é coordenada pela professora do curso de Educação Física, <strong>Aline Rabay</strong>, e contou com o apoio da <strong>Secretaria de Estado da Juventude, Esporte e Lazer da Paraíba</strong> e da <strong>Federação de Esportes Aquáticos da Paraíba (FEAP)</strong>."
      },
      {
        tipo: "citacao",
        texto: "O vice-campeonato brasileiro universitário do UNIESP é um marco histórico para a natação da Paraíba porque nunca uma equipe paraibana, seja clube, federação, universidade ou escola, havia ficado entre as três melhores colocadas nacionalmente. Nós já tivemos atletas campeões nacionais, mas uma equipe no top 3 é inédito. Essa conquista não é apenas do UNIESP, mas de toda a Paraíba e mostra que a natação está sendo cada vez mais valorizada, destacou a professora do UNIESP e presidente da Federação de Esportes Aquáticos da Paraíba, Luciana Rabay"
      }
    ],
    fotos: [
      "https://www.iesp.edu.br/sistema/uploads/imagens/noticias/galeria/equipe-feminina-de-natacao-do-uniesp-conquista-o-2-lugar-nos-jogos-universitarios-brasileiros/saveclip-app-564526723-18487365850077247-6270906001625643304-n-20251024112517.jpg",
      "https://www.iesp.edu.br/sistema/uploads/imagens/noticias/galeria/equipe-feminina-de-natacao-do-uniesp-conquista-o-2-lugar-nos-jogos-universitarios-brasileiros/saveclip-app-564526723-18487366084077247-5756012266445360631-n-20251024112517.jpg",
      "https://www.iesp.edu.br/sistema/uploads/imagens/noticias/galeria/equipe-feminina-de-natacao-do-uniesp-conquista-o-2-lugar-nos-jogos-universitarios-brasileiros/whatsapp-image-2025-10-17-at-12-09-21--20251024112517.jpeg",
      "https://www.iesp.edu.br/sistema/uploads/imagens/noticias/galeria/equipe-feminina-de-natacao-do-uniesp-conquista-o-2-lugar-nos-jogos-universitarios-brasileiros/whatsapp-image-2025-10-17-at-12-09-21-1--20251024112516.jpeg"
    ]
  }

  return (
    <Container className="py-4">
      {/* Título da Notícia */}
      <h2 className="mb-3" style={{ fontWeight: 'bold', lineHeight: '1.3' }}>
        {noticia.titulo}
      </h2>

      {/* Data */}
      <p className="text-muted mb-4">
        <i className="bi bi-calendar3"></i> {noticia.data}
      </p>

      <hr className="mb-4" />

      {/* Conteúdo da Notícia */}
      <div className="mb-5" style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
        {noticia.conteudo.map((item, index) => {
          if (item.tipo === "paragrafo") {
            return (
              <p key={index} dangerouslySetInnerHTML={{ __html: item.texto }} />
            )
          } else if (item.tipo === "citacao") {
            return (
              <p 
                key={index} 
                style={{ 
                  fontStyle: 'italic', 
                  padding: '1rem 1.5rem', 
                  backgroundColor: '#f8f9fa', 
                  borderLeft: '4px solid #002F6C',
                  margin: '1.5rem 0'
                }}
              >
                {item.texto}
              </p>
            )
          }
          return null
        })}
      </div>

      {/* Galeria de Fotos */}
      <div className="mt-5">
        <Row className="g-3">
          {noticia.fotos.map((foto, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <img 
                src={foto} 
                alt={`Foto ${index + 1}`} 
                className="img-fluid rounded shadow-sm"
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  cursor: 'pointer'
                }}
              />
            </Col>
          ))}
        </Row>
      </div>

    </Container>
  )
}

export default VisualizaNoticia