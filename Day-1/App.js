//  const heading = React.createElement("h1" , {id: "heading", xyz: "adc"} , "Hello World from React!")
      
//       const root = ReactDOM.createRoot(document.getElementById("root"));

//       root.render(heading);


/**
 * <div id = "Parent">
 *      <div id= "child">
 *        
 *         <h1>I am H1 Tag!</h1>
 *         <h2>I am H2 Tag!</h2>
 *     
 *      </div>
 * </div>
 * 
 * ReactElement is Object =>  HTML(Browser Understands)
 * 

 

const parent = React.createElement("div" ,{id: "parent"} ,
     React.createElement("div" , {id: "child"} , 
        [React.createElement("h1" , {} , "I am H1 Tag!") , 
            React.createElement("h2" , {} , "I am H2 Tag!"),
            React.createElement("h3" , {} , "Hello Developer ")
   ] )
);

console.log(parent);

 const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(parent);


   */



/**
 * <div id = "Parent">
 *      <div id= "child1">
 *        
 *         <h1>I am H1 Tag!</h1>
 *         <h2>I am H2 Tag!</h2>
 *     
 *      </div>
 * 
 *      <div id= "child2">
 *        
 *         <h1>I am H1 Tag!</h1>
 *         <h2>I am H2 Tag!</h2>
 *     
 *      </div>
 * </div>
*/

/**
 * ! ReactElement (Object)  => HTML(Browser UnderStands).
 */


const parent = React.createElement("div", {id: "parent"}, [
     React.createElement("div" , {id: "child1"} , [
            React.createElement("h1" , {} , "I am H1 Tag!") , 
            React.createElement("h2" , {} , "I am H2 Tag!"),
            React.createElement("h3" , {} , "Hello Developer "),
     ]),

   React.createElement("div" , {id: "child2"} , [
         React.createElement("h1" , {} , "I am H1 Tag!") , 
            React.createElement("h2" , {} , "I am H2 Tag!"),
            React.createElement("h3" , {} , "Hello Developer"),
  ]),

]);

console.log(parent);

 const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(parent);