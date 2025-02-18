import React from 'react';
import Slider from 'react-slick';
import '../styles/institutionDetails.css'; // Importação do CSS específico para este componente
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InstitutionDetails = ({ institution }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="institution-details">
            <h2>Quadro de Avisos</h2>
            <p>Aqui você encontrará as últimas notícias e avisos sobre {institution.nameInstitution}.</p>
            <Slider {...settings}>
                <div>
                    <h3>Aviso importante</h3>
                    <p className="aviso">As aulas presenciais serão retomadas na próxima segunda-feira.</p>
                </div>
                <div>
                    <h3>Notícia</h3>
                    <p>A instituição foi premiada com o selo de qualidade.</p>
                </div>
                <div>
                    <h3>Notícia</h3>
                    <p>Novo curso de programação será oferecido a partir do próximo semestre.</p>
                </div>
                <div>
                    <h3>Notícia</h3>
                    <p>Parceria com empresas locais para estágios remunerados.</p>
                </div>
                <div>
                    <h3>Aviso</h3>
                    <p>Reunião de pais e mestres agendada para o dia 15 de março.</p>
                </div>
            </Slider>
        </div>
    );
};

export default InstitutionDetails;