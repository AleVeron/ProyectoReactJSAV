import "bootstrap/dist/css/bootstrap.min.css";

const Carrusel = () =>{
    return(
        
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./assets/Acer.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./assets/CoolerMaster.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./assets/Monitores.jpg" className="d-block w-100" alt="..."/>
              </div>
            </div>
          </div>        
        
    )
}

export default Carrusel;

