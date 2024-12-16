export function TableHeader({ columns, showQuickBuy }) {
    return (
        <thead className="bg-[#0F0F10] py-6">
            <tr className="  text-primaryText">
                {columns.map((column, index) => (
                    <th
                        key={index}
                        className={`px-4 py-2 text-left font-semibold text-primaryText uppercase ${column.className || ""}`}
                    >
                        <div className="flex items-center gap-1">
                            {column.label}
                            {column.icon && <column.icon className="h-3 w-3" />}
                        </div>
                    </th>
                ))}
                {showQuickBuy && (
                    <th className="px-4 py-2 text-left font-semibold text-primaryText">
                        QUICK BUY
                    </th>
                )}
            </tr>
        </thead>
    );
}
