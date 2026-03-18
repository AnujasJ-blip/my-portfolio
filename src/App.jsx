import './App.css'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <div className="portfolio" style={{maxWidth: "800px", margin: "0 auto", padding: "20px"}}>
      <header>
        <h1>Anujas's Portfolio</h1>
        <p>Computer Science Student | ML & Robotics Enthusiast</p>
      </header>

      <main>
        <section id="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            <ProjectCard 
              title="Mind Wave" 
              description="A mental wellness application designed for Sri Lankan students." 
              tags={["React", "Wellness"]} 
            />
            <ProjectCard 
              title="Robotics: PID Controller" 
              description="A two-coach system controlled by PID controllers developed in Simulink." 
              tags={["Robotics", "Control Systems", "Simulink"]} 
            />
            <ProjectCard 
              title="Machine Learning Models" 
              description="Implementation of Naive Bayes, Logistic Regression, and KNN for data analysis." 
              tags={["Python", "Scikit-learn", "ML"]} 
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App