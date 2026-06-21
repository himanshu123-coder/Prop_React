import React, { useState } from "react";

const Button = ({ text, color, size , onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
        ${size === "small" ? 'text-sm px-1 py-1' : ''}
        ${size === "large"? 'text-lg px-8 py-3' : ''}
        ${color === "primary" ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''}
        ${color === "secondary" ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
        ${color === "success" ? 'bg-green-500 hover:bg-green-600 text-white' : ''}
        ${color === "danger" ? 'bg-yellow-500 hover:bg-red-500 text-red-50' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {text}
    </button>
  );
};

function Basicprop() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2>Basic Props</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        dolorum, unde beatae totam debitis provident modi maiores fuga
        distinctio, nisi voluptate harum adipisci. Alias at placeat
        perspiciatis porro, tempora expedita.
      </p>

      <div className="space-y-4">
        <h3>Different Color {clickCount}</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="primary button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Secondary button"
            color="secondary"
            disabled= {true}
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>  
      </div>
       <div className="space-y-4">
        <h3>Different size {clickCount}</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="small"
            color="primary"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Secondary button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>  
      </div>
    </section>
  );
}

export default Basicprop;