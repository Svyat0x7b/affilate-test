import React from 'react';
import { ArrowDown, ArrowUp } from '../../assets';

type SortBtnType = {
    sortKey: string;
    sortOrder: string;
    actualKey: string;
    onSortHandler: () => void;
};

const SortBtn: React.FC<SortBtnType> = ({ onSortHandler, sortKey, sortOrder, actualKey }) => {
    return (
        <button
            onClick={() => onSortHandler()}
            className="px-2 py-1 ml-2 rounded-[8px] bg-lime-600 text-white hover:bg-lime-500">
            {sortKey === actualKey && sortOrder === 'desc' ? (
                <img src={ArrowUp} alt="up" />
            ) : (
                <img src={ArrowDown} alt="down" />
            )}
        </button>
    );
};

export default SortBtn;
