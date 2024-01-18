import React from 'react';

type TableTitleType = {
    tablename: string;
};

const TableTitle: React.FC<TableTitleType> = ({ tablename }) => {
    return (
        <h1 className="text-[35px] font-[700] text-[#343434]">
            <span className="text-[#fff] bg-lime-600 p-4 rounded-[8px] hover:bg-lime-500">
                {tablename}
            </span>{' '}
            Table
        </h1>
    );
};

export default TableTitle;
