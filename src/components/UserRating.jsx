import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function UserRating({ maxRating }) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0)

    function handleRating(rating) {
        setRating(rating);
    }

    return (
        <div className="p-4 bg-gray-300 rounded-md">
            <div className="flex items-center gap-4">
                <div className="flex gap-1/2">
                    {Array.from({ length: maxRating }, (_, i) =>
                        <Star key={i}
                            onRate={() => handleRating(i + 1)}
                            filled={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
                            onHoverIn={() => setHoverRating(i + 1)}
                            onHoverOut={() => setHoverRating(0)}
                        />)}
                </div>
                <p>{hoverRating || rating}</p>
            </div>
        </div>
    )
}

function Star({ onRate, filled, onHoverIn, onHoverOut }) {
    return (
        <span
            role="button"
            onClick={onRate}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}>
            {
                filled ? <FaStar size={20} color={"yellow"} className="cursor-pointer" /> : <FaRegStar size={20} color={"yellow"} className="cursor-pointer" />
            }
        </span>
    )
}