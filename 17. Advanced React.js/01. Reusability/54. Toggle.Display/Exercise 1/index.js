import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Toggle from "./components/Toggle/index"

/**
 * Challenge: 
 * Part 1: 
 * Create a ToggleDisplay component and attach
 * it to Toggle as Toggle.Display.
 * 
 * It should grab the `on` value from the Toggle context
 * and render children by calling children as a function, 
 * passing the `on` value to it. (E.g. children(on)).
 */

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <div className="box filled"></div>
          </Toggle.On>
          <Toggle.Off>
            <div className="box"></div>
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
    </>
  )
}
      // <Star />
      
      // <br />

      // <Menu>
      //   <Menu.Button>Menu</Menu.Button>
      //   <Menu.Dropdown>
      //     <Menu.Item>Home</Menu.Item>
      //     <Menu.Item>About</Menu.Item>
      //     <Menu.Item>Contact</Menu.Item>
      //     <Menu.Item>Blog</Menu.Item>
      //   </Menu.Dropdown>
      // </Menu>

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
