import { useState } from "react";

function Form({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      console.log("Not a valid input");
      setAlert(true);
    } else {
      getData(weight, height);
      setAlert(false);
      setHeight("");
      setWeight("");
    }
  };
  return (
    <div className="col-sm-4 shadow rounded px-5">
      <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Weight(kg) :</label>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Hight(m) :</label>
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary my-3" value="Get BMI" />
      </form>
      {alert && (
        <div className="alert alert-danger" role="alert">
          Plz enter valid datas
        </div>
      )}
    </div>
  );
}

export default Form;
