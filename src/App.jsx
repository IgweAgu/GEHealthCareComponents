import Navbar from "./components/Navbar";
import Card from "./components/Card";
import LargeCard from "./components/LargeCard";
import Button from "./components/Button";
import Tabs from "./components/Tabs";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
       <div className="bg-top-main">
       </div>
      <main>
        <h1>Component Library</h1>
         <div className="sub-header">Developed by Morris Onwuatuegwu</div>
        <div className="intro">
        <p>This is a technical break-drown of the component architecure built in react. I created this mini design system inspired by GE’s UI as part of my technical preparation.</p> 
        <p>The goal here is to demonstrate my ability to architect reusable and production-level React components with a focus on accessibility, scalability, and semantic structure.</p>
        </div>
       <div className="row-control"> 
        <h2>Tabs</h2>
		<Tabs />
		</div>
		
		 <h2>Buttons</h2>
        <div className="button-row">
       
          <button className="button btn-standard">Save</button>
           <button className="button btn-standard btn-small">Save</button>
          <button className="button btn-alternate">Click Me</button>
           <button className="button btn-alternate btn-small">Click Me</button>
          <button className="button btn-white">Edit</button>
          <button className="button btn-white btn-small">Edit</button>
        </div>
		
        <h2>Cards</h2>
        <div className="card-row">
          <Card title="GE HealthCare" body="This is a cool project to show off how I develop components." />
          <Card title="GE HealthCare" body="These are ready made components built in react This is vanilla css not tailwind with it's crazy dependency drama." />
          <Card title="GE HealthCare" body="You’re striving to maintain momentum of patient care and get the most value from your technology. But the demands on you and your team never stop—from relentless service requests to ever-evolving technologies, resource constraints, and the constant pressure to keep pace with care." />
        </div>

        <h2>Large Card</h2>
       <div className="card-row">
  <LargeCard
    subtitle="Welcome to GE Components"
    content="Creating a more sustainable future requires we care for the planet and for its inhabitants. Learn more in GE HealthCare’s 2023 Sustainability Report."
    imageUrl="/src/img/GE-Healthcareplace.jpg"
    footer={<Button className="btn-standard">Read More</Button>}
  />
 

  <LargeCard
    subtitle="Welcome to GE Components"
    content="Creating a more sustainable future requires we care for the planet and for its inhabitants. Learn more in GE HealthCare’s 2023 Sustainability Report."
    imageUrl="/src/img/GE-HealthCare-img.png"
  />
</div>

    
        
      </main>
    </>
  );
}
