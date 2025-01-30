import "./card.css"
const names = [
    { word: "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gas and provide actionable recomendations", id: 1 },
    { word: "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gas and provide actionable recomendations", id: 2 },
    { word: "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gas and provide actionable recomendations", id: 3 },
    { word: "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gas and provide actionable recomendations", id: 4 },
    { word: "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gas and provide actionable recomendations", id: 5 },
    { word: "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gas and provide actionable recomendations", id: 6 },
    { word: "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gas and provide actionable recomendations", id: 7 },
  ];
  
  const Card = () => {
    return (
        <div className="card_div">
                
        {names.map((item) => (
          <div className="card"
            key={item.id}
            >
                
                <div className="quote_container">
                    <img className="quote" src="./Frame (1).png" alt="" />
                </div>
                <div className="profile_container">
                    <div>
                    <img className="profile_img" src="./Ellipse 7.png" alt="" />
                   </div>
                    <div className="profile_text_conatainer">
                    <p className="name">Jacob Esua</p>
                    <p className="title">CEO Cellulant Group</p>
                   </div>
                </div>


                <span className="scroll_text">{item.word}</span>
            
          </div>
        ))}
      </div>
    );
};
  
export default Card