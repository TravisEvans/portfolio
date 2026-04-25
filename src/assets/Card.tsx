import Markdown from "react-markdown";

interface CardProps {
    title: string;
    date: string;
    content: string;
    button?: string;
    fn?: () => void;
    className?: string;
}

function Card({ title, date, content, button, fn, className }: CardProps) {

    const buttonCheck = () => button ? 
    <div className="col flex justify-end"><a onClick={fn} className="btn btn-primary">{button}</a></div> : 
    <></>;

    return (
        <div className={`card ${className}`}>
            <div className="row">
                <div className="col">
                    <Markdown>{`### ${title}`}</Markdown>
                    <Markdown>{`${date}`}</Markdown>
                    <Markdown>{`---`}</Markdown>
                    <Markdown>{content}</Markdown>
                    <br />
                </div>
                {buttonCheck()}
            </div>
        </div>
    )
}

export default Card;