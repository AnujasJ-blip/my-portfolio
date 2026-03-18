function ProjectCard({title,description,tags}){
    return(
        <div className="card" style={{border: '1px solid #444', padding: '20px', borderRadius: '12px', margin: '10px 0'}}>
            <h3 style={{color: '#646cff'}}>{title}</h3>
            <p>{description}</p>
            <div style={{display: "flex", gap:"10px",marginTop:"10px",justifyContent:"center"}}>
                {tags.map(tag => (
                    <span key={tag} style={{background:"#333", padding:"4px 10px",borderRadius:"15px", fontSize:"0.8rem"}}> 
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard