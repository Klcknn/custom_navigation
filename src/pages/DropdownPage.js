import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleselect = (option) => { 
    setSelection(option);
    
  };
  const options = [
    { label: "red" , value: "red" },
    { label: "green" , value: "green" },
    { label: "blue" , value: "blue" },
    { label: "yellow" , value: "yellow" },
  ];

  return ( 
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleselect} />;
        </div>
        ); 
    
}

export default DropdownPage;