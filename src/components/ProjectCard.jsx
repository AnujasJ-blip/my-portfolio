function ProjectCard({title,description,tags}){
    return(
        <div className="card" >
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tags">
                {tags.map(tag => (
                    <span key={tag} className="tag"> 
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard