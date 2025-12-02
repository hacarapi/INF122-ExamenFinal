function Componente2({ titulo = 'Título por defecto', descripcion = 'Descripción por defecto', img1, img2 }){
    return (
        <section className="componente2 text-center">
            <div className="images-row">
                <img src={img1 || 'https://picsum.photos/seed/1/400'} alt="img1" className="circular-img" />
                <img src={img2 || 'https://picsum.photos/seed/2/400'} alt="img2" className="circular-img" />
            </div>

            <div className="componente2-text">
                <h3>{titulo="Titulo de Examen"}</h3>
                <p>{descripcion="Esta es la descripcion del examen"}</p>
            </div>
        </section>
    )
}

export default Componente2;