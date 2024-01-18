import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findCampaigns, CampaignType } from '../../constants';
import useTable from '../../hooks/useTable';
import TableFooter from '../pagination/table-footer';
import { NoItems, SortBtn, TableTitle } from '../partials';
import { filterBySearchTerm, sortAndPaginate } from '../../utils';

const Campaigns = () => {
    const { profileId } = useParams();
    const [campaigns, setCampaigns] = useState<CampaignType[]>([]);
    const [headerItems, setHeaderItems] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortKey, setSortKey] = useState<keyof CampaignType>('campaignId');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredCampaigns = filterBySearchTerm(campaigns, searchTerm, headerItems);

    const [page, setPage] = useState(1);
    let { slice, range } = useTable(filteredCampaigns, page, 2);

    const toggleSortHandler = (key: any) => {
        setSortKey(key);
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
        console.log('sort');
    };

    const sortedAndPaginatedCampaigns = sortAndPaginate(slice, sortKey, sortOrder);

    useEffect(() => {
        if (profileId) {
            let fetchedCampaigns = findCampaigns(+profileId);
            if (fetchedCampaigns) {
                setCampaigns(fetchedCampaigns);
                setHeaderItems(Object.keys(fetchedCampaigns[0]));
            }
        }
    }, []);
    return (
        <main className="px-[100px] flex h-[100vh] flex-col pt-[150px] items-center gap-[40px]">
            <TableTitle tablename="Campaigns" />
            <div className="mb-4">
                <input
                    type="text"
                    id="searchInput"
                    className="p-2 border border-gray-300 rounded-md outline-none"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {sortedAndPaginatedCampaigns.length !== 0 && (
                <>
                    <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
                        <thead>
                            <tr className="bg-gray-200">
                                {headerItems &&
                                    headerItems.map((header: string) => {
                                        const typeKey: keyof CampaignType =
                                            header as keyof CampaignType;
                                        return (
                                            <th className="py-2 px-4 border-b">
                                                {header}
                                                <SortBtn
                                                    sortKey={sortKey}
                                                    actualKey={typeKey}
                                                    sortOrder={sortOrder}
                                                    onSortHandler={() => toggleSortHandler(typeKey)}
                                                />
                                            </th>
                                        );
                                    })}
                            </tr>
                        </thead>
                        <tbody>
                            {sortedAndPaginatedCampaigns.map((campaign: CampaignType) => (
                                <tr className="border-b text-center hover:bg-[#ededed]">
                                    <td className="py-2 px-4 max-w-[100px] overflow-hidden">
                                        {campaign.campaignId}
                                    </td>
                                    <td className="py-2 px-4 max-w-[100px] overflow-hidden">
                                        {campaign.profileId}
                                    </td>
                                    <td className="py-2 px-4 max-w-[100px] overflow-hidden">
                                        {campaign.clicks}
                                    </td>
                                    <td className="py-2 px-4 max-w-[100px] overflow-hidden">
                                        {campaign.cost}
                                    </td>
                                    <td className="py-2 px-4 max-w-[100px] overflow-hidden">
                                        {campaign.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <TableFooter
                        range={range}
                        slice={sortedAndPaginatedCampaigns}
                        setPage={setPage}
                        page={page}
                    />
                </>
            )}
            {sortedAndPaginatedCampaigns.length === 0 && <NoItems />}
        </main>
    );
};

export default Campaigns;
