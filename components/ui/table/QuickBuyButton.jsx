export function QuickBuyButton({ onClick, amount = 100 }) {
    return (
        <button
            onClick={onClick}
            className="bg-secondaryText hover:bg-secondaryText/80 transition-colors text-white px-8 py-2 rounded flex items-center gap-2"
        >
            <p className="font-bold">{amount}</p>
        </button>
    );
}
