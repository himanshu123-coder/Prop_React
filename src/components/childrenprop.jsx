import React from "react";
function Card({ children, title, color = "blue" }) {
  const colorClasses = {
     blue : "border-blue-500 bg-blue-500",
     green: "border-green-500 bg-green-500",
     purple: "border-purple-500 bg-purple-500",
     red: "border-red-500 bg-red-500",
  };
  return (
  <div
    className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}> 
    {title && (
     <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
     
    )}
    <h3>i will be</h3>
    <div className="text-gray-700">{children}</div>
    </div>
  );
}
function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return <div className={layoutClasses[layout]}>{children}</div>;
}

function Childrenprops() {
   return (
    <section className="p-8 bg-white rounded-xl shadow-lg">  <h2>Children</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic corporis, tempora enim earum asperiores sed iste eum. Possimus, ducimus. Doloribus, temporibus ratione explicabo quibusdam repudiandae earum aspernatur quas sit.</p>
    <div className="space-y-6">
        <div>
            <h3>Card component</h3>
            <Container layout="grid">
              <Card title="UserProfile" color="green">
                <p className="mb-2">
                    <strong>Name:</strong> Himanshu
                </p>
                <p className="mb-2">
                    <strong> Email: </strong> HIMDEJJ@gmail.com
                </p>
                <p className="mb-2">
                    <strong> role </strong> Intern
                </p>

                </Card>  
                 <Card title="UserProfile" color="red">
                <p className="mb-2">
                    <strong>Name:</strong> Himanshu
                </p>
                <p className="mb-2">
                    <strong> Email: </strong> HIMDEJJ@gmail.com
                </p>
                <p className="mb-2">
                    <strong> role </strong> Intern
                </p>

                </Card> 
                 <Card title="UserProfile" color="purple">
                <p className="mb-2">
                    <strong>Name:</strong> Himanshu
                </p>
                <p className="mb-2">
                    <strong> Email: </strong> HIMDEJJ@gmail.com
                </p>
                <p className="mb-2">
                    <strong> role </strong> Intern
                </p>

                </Card> 
                
              </Container>
              
    
        </div>

    </div>
    </section>
   )

}

        export default Childrenprops