import Carousel from './Carousel';
function Componente1(){
    return (
        <> 
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 d-flex flex-column align-items-start justify-content-left">
                    <h3>CARRERA DE INFORMATICA</h3>
                    <h4>Programacion Web II</h4>
                </div>
                <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                    <Carousel></Carousel>
                </div>
                <div className="col-3 d-flex flex-column align-items-center justify-content-center">
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
        </>
    )
}

export default Componente1;