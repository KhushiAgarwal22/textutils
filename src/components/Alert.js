import React from "react";

export default function Alert(props) {
  const cap = (msg) => {
    return msg.charAt(0).toUpperCase() + msg.slice(1);
  };
  return (
    <div style={{height:'50px'}}>
    {props.alert &&
    <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>
            {cap(props.alert.type==='primary'?"alert":props.alert.type)}:
            </strong><span> </span>
             {cap(props.alert.msg)}
      </div>
    </div>}
    </div>
  );
}
