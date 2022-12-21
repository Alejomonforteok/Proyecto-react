import React from 'react'

const carusel = () => {
  return (
<div id="carouselWithIndicators" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Moov-Library/default/dwf9ef81bc/16dic/full1nikegifting.jpg?sw=1440&sfrm=png" className="d-block w-100" alt="Slide 1"/>
    </div>
    <div className="carousel-item">
      <img src="https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Moov-Library/default/dw3dc41f34/16dic/full3pumatrcblaze.jpg?sw=1440&sfrm=jpg" className="d-block w-100" alt="Slide 2"/>
    </div>
    <div className="carousel-item">
      <img src="https://3.bp.blogspot.com/-BcnHKbN3Ovk/Vd9k3xxrZDI/AAAAAAAAHs4/gpghd8uWybI/s1600/20218_adidas_FLE_BTS%2BTubular_Digital_Banner_1308x500px.jpg" className="d-block w-100" alt="Slide 3"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselWithIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselWithIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>  )
}

export default carusel