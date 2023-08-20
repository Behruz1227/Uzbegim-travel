import "./card.css";

function Card() {
  return (
    <>
      {/* <div class="card text-center border border-primary shadow-0 ">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://mdbootstrap.com/img/new/standard/nature/111.webp" class="img-fluid" />
          <a href="#!">
            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
          </a>
        </div>

        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <button type="button" class="btn btn-primary">Button</button>
        </div>
      </div>*/}
      <div class="card">
        <div class="card-side front">
          <div>Front Side</div>
        </div>
        <div class="card-side back">
          <div>Back Side</div>
        </div>
    </div>
    </>
  );
}

export default Card;