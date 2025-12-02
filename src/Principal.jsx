import Carousel from './Carousel'

function Principal(){
    return (
        <>
            <div>
                <h1>
                    Hola desde Principal
                </h1>
            </div>

            <div style={{maxWidth: '1200px', margin: '1.5rem auto'}}>
                <Carousel />
            </div>
        </>
    )
}

export default Principal;