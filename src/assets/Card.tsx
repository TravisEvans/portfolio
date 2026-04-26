import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

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
                    <h3>{title}</h3>
                    <p>{date}</p>
                    <hr />
                    {content ? <br /> : <></>}
                    {content && <Markdown remarkPlugins={[remarkBreaks]}>{content}</Markdown>}
                </div>
                {buttonCheck()}
            </div>
        </div>
    )
}

export default Card;