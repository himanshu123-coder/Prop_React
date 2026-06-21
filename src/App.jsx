

import './App.css'
import Basicprop from './components/Basicprop.jsx';
import Childrenprops from './components/childrenprop.jsx';
import complexprops from './components/complexprops.jsx';
import refprop from './components/refprop.jsx';
import themetoggler from './components/themetoggler.jsx';
 
function Navigation(){
  const isDark = true

  const section = [
    {id:"basic" , label: "Basic Props" , icon: "😑 " },
    {id:"ref" , label: "ref Props" , icon: "👌 " },
    {id:"children" , label: "Childern Props" , icon: "👍 " },
    {id:"complex" , label: "complex Props" , icon: "🎶 " },
    {id:"theme" , label: "theme Props" , icon: "😑 " },
  ];
  return <nav className={`sticky top-0 z-50 shadow-md`}>
    <div>
      <div>
        {section.map((section)=>(
          <button  className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mr-2 mt-2`} 
          key={section.id}>
            <span>{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </div>
  </nav>;
}
 function Appcontent() {
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation />
      <div className="space-y-8 p-4">
        <div className="scroll-mt-200"><Basicprop /></div>
         <div className="scroll-mt-200"><Childrenprops /></div>
        
        

      </div>
    </div>
  );
 }
function App() {
 
  return (
    <>
     <Appcontent />
    </>
  )
}

export default App
