
import React from 'react';
import './App.css';


function App() {
  return (
    
    <div>
      <section>
      <div className="image-container">
      <div className="date">
          <p>5</p>
          <span>JULY</span>
        </div>
        <div className='share'>
        <i class="fa-share">SHARE</i>
        </div>
      </div>
      <div className="content">
      <div className="author">
           <p>Darwin Tumaneng</p>
        </div>
        <div className="title">
          <h2>Toyota Motor Philippines partners with Lalamove Automotive</h2>
        </div>
        <div className="subtitle">
          <p>Leading mobility company Toyota Motor Philippines (TMP) has partnered with leading logistics provider Lalamove through its auto brand, Lalamove Automotive, with the introduction of the commercial vehicle Toyota Lite Ace as a transport partner. Aspiring and existing Lalamove operators are now able to purchase the Lite Ace Panel Van variant through this partnership, under Lalamove Automotive's Vehicle Ownership Program.</p>
        </div>
        
        <a href='https://toyota.com.ph/dealer?utm_source=Google&utm_medium=search&utm_campaign=2024-211931-GeneralBrand-Inquire-Dealers&gad_source=1&gclid=CjwKCAjwps-zBhAiEiwALwsVYVmglak0aSB_ycP5CJsLSHfGkZinDHg3tre489ptkbxZHk-5kMhddRoCzd8QAvD_BwE'>READ ARTICLE</a>
      </div>
      </section>
      <div className="pagination">
        <button className="prev">
          <span>&lt;</span>
        </button>
        <button>1</button>
        <button >2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
        <button className="next">
          <span>&gt;</span>
        </button>
      </div>
    </div>
    
  );
}

export default App;
