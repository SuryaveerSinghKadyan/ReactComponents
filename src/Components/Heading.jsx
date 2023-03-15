import React from "react";

//A component is made by writing a function with function_name as the ComponentName in PascalCase. The function simply returns the HTML code.
function Heading() {
  return <h1>My Favourite Foods</h1>;
}

//Now to use this component in another file its content has to be exported so that it can be executed whenever needed.
export default Heading;
