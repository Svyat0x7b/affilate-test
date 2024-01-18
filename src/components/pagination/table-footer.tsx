import React, { useEffect } from 'react';

type tableFooterPropsType = {
    range: number[];
    setPage: (arg: number) => void;
    page: number;
    slice: any;
};

const TableFooter: React.FC<tableFooterPropsType> = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);

    return (
        <div className="flex gap-3">
            {range.map((pageNum: number, idx: number) => (
                <button
                    className={`py-2 px-4 rounded-full text-[#fff] font-[600] hover:bg-lime-500 ${
                        page === pageNum ? 'bg-lime-600' : 'bg-[#b0b0b0]'
                    }`}
                    onClick={() => setPage(pageNum)}
                    key={idx}>
                    {pageNum}
                </button>
            ))}
        </div>
    );
};

export default TableFooter;
