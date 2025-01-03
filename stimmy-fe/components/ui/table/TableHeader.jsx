export function TableHeader({ columns, showQuickBuy }) {
    return (
        <thead className="bg-[#0F0F10] py-6">
            <tr className="text-primaryText text-xs md:text-sm lg:text-base ">
                {columns.map((column, index) => (
                    <th
                        key={index}
                        className={`px-2 md:px-4 py-2 text-left font-semibold text-primaryText text-xs md:text-base uppercase min-w-fit ${column.className || ""}`}
                    >
                        <div className="flex items-center gap-1">
                            {column.label}
                            {column.icon && <column.icon className="h-3 w-3" />}
                        </div>
                    </th>
                ))}
                {showQuickBuy && (
                    <th className="px-2 py-2 text-left font-semibold text-primaryText text-xs md:text-base">
                        QUICK BUY
                    </th>
                )}
            </tr>
        </thead>
    );
}
