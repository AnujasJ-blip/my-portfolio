function ProjectCard({title,description,tags, image}){
    return(
        <div className="card" >
            <div className="card-image-wrapper">
                <img src={image || 'https://placehold.co/600x400/1e1e2f/8a91ff?text=Project'} alt={title} className="card-image" />
            </div>
            <div className="card-content">
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
        </div>
    )
}

export default ProjectCard