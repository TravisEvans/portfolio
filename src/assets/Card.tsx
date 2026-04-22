const Card = ({ title, description }: { title: string; description: string }) => (
    <div className="card mb-5">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default Card;
