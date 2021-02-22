export function Greeting(props) {

    let prefix = () => {
      if (props.gender === "f") {
        return "Ms. " + props.name;
    }
    else {
      return "Mr. " + props.name;
    }
  }
  
    //let prefix = () => "Mr. " + props.name;
    
    return(
      <>
      <p>Hello {props.name}</p>
      <p>Hello {prefix()}</p>
  
      </>
    )
  }