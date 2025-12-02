function Componente2({ titulo = 'Título por defecto', descripcion = 'Descripción por defecto', img1, img2 }){
    return (
        <section className="componente2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    
                    <div className="col-12 col-md-3 text-center text-md-start mb-3 mb-md-0">
                        <h3>CARRERA DE INFORMATICA</h3>
                        <h5>Materia: Programacion Web II</h5>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="images-row d-flex justify-content-center">
                            <img src="https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-artesano-dibujada-mano_23-2150765969.jpg?semt=ais_hybrid&w=740&q=80" alt="img1" className="circular-img me-3" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4q_EELq3Do-CLZoIxEBtsF4cZgB1N5eZ8g&s" alt="img2" className="circular-img" />
                        </div>
                        <div className="text-center mt-3">
                            <h3>{titulo}</h3>
                            <p>{descripcion}</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 text-center text-md-start mb-3 mb-md-0">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="mx-2 text-dark text-decoration-none social-link">
                        <i className="fa fa-facebook-official social-icon" aria-hidden="true"></i>
                        <span className="social-title">Facebook</span>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="mx-2 text-dark text-decoration-none social-link">
                        <i className="fa fa-twitter social-icon" aria-hidden="true"></i>
                        <span className="social-title">Twitter</span>
                    </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Componente2;