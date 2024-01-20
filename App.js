/////////////////////////////////
////////Nested HTML Body/////////
/////////////////////////////////
/**
 * EXAMPLE - 1
 * ------------
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading">Here is the Child Heading</h1>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 * 
 */


const parent = React.createElement(
    "div", { id: 'parent' },
    React.createElement(
        "div", { id: 'child' },
        React.createElement(
            "h1", { id: 'heading' }, "Here is the Child Heading"
        )
    )
);

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////
////////Sibling HTML Body/////////
/////////////////////////////////
/**
 * EXAMPLE - 1
 * ------------
 * <div id="sParent">
 *      <div id="child">
 *          <h1>Here is H1</h1>
 *          <h2>Here is H2</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 * 
 */

const sParent = React.createElement(
    "div", { id: 'sParent' }, React.createElement(
        "div", { id: 'child' },
        [React.createElement("h1", {}, "Here is H1"),
        React.createElement("h2", {}, "Here is H2")]
    )
);

///////////////////////////////////////////////////////////////////////////////////////
/**
 * EXAMPLE - 2
 * ------------
 * <div id="sParent2">
 *      <div id="child">
 *          <h1>Here is H1</h1>
 *          <h2>Here is H2</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>Here is H1</h1>
 *          <h2>Here is H2</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 * 
 */

//Way 1 

const sParent2 = React.createElement(
    "div", { id: 'sParent' },
    [React.createElement("div", { id: 'child' },
        [React.createElement("h1", {}, "Here is H1"),
        React.createElement("h2", {}, "Here is H2")]
    ),
    React.createElement("div", { id: 'child2' },
        [React.createElement("h1", {}, "Here is H1"),
        React.createElement("h2", {}, "Here is H2")]
    )]
);
//////// To Solve Above MESS of Code JSX Comes To The Picture /////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


const heading = React.createElement("h1", { className: "heading" }, "Welcome Aboard React!");
// above heading is an object | when we console it, output will come as an object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(sParent2);