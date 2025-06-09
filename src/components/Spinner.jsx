import { CSSProperties } from "react";
import { ClockLoader } from "react-spinners";

const Spinner = (props) => {

    const override = {
        position: "relative",
    };

  return (
      <div className="spinner-container">
          <h2>Chef AI prepares his recipe...</h2>
          <ClockLoader 
            color="black"
            loading={props.loading}
            cssOverride={override}
            size={45}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="loader"
           />
      </div>
  )
}

export default Spinner