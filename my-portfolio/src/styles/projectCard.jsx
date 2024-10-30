/* ProjectCard.css */

.project-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 350px;
    margin: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  h3 {
    font-size: 1.5rem;
    color: #333;
    margin: 15px 0 10px;
  }
  
  p {
    font-size: 1rem;
    color: #555;
    text-align: center;
    padding: 0 10px;
  }
  
  .skills-list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 10px;
    gap: 10px;
    justify-content: center;
  }
  
  .skill-item {
    background-color: #f0f0f0;
    color: #333;
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 0.9rem;
  }
  