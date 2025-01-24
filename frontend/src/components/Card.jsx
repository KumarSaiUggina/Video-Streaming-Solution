export default function Card(props) {
  return (
    <div className="card bg-white border w-96 shadow-xl">
      <figure></figure>
      <div className="card-body">
        <h2 className="card-title">{props.h2}</h2>
        <p> {props.p} </p>
        <div className="card-actions justify-end">
          <button className="btn text-white">Try Now</button>
        </div>
      </div>
    </div>
  );
}
