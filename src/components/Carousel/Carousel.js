import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
    return (

        <section className="index__carousel" style="background-color: black;">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./Monitores.jpg" className="d-block img-fluid carousel__imagen" alt="Monitores"/>
              </div>
              <div className="carousel-item">
                <img src="./Cooler Master.jpg" className="d-block img-fluid carousel__imagen" alt="Cooler Master"/>
              </div>
              <div className="carousel-item">
                <img src="./Acer.jpg" className="d-block img-fluid carousel__imagen" alt="Acer"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </section>
    )
}

export default Carousel;