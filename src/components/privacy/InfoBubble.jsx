const InfoBubble = ({ icon: Icon, title, description, classNamePrefix }) => {
  return (
    <div className={`${classNamePrefix}-bubble`}>
      <div className={`${classNamePrefix}-bubble-header`}>
        <Icon className="icon" />
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default InfoBubble;