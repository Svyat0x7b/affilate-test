import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProfileType, findProfiles } from '../../constants';
import useTable from '../../hooks/useTable';
import TableFooter from '../pagination/table-footer';
import { NoItems, SortBtn, TableTitle } from '../partials';
import { sortAndPaginate, filterBySearchTerm } from '../../utils/index';

const Profiles = () => {
    const { accountId } = useParams();
    const navigate = useNavigate();
    const [profiles, setProfiles] = useState<ProfileType[]>([]);
    const [headerItems, setHeaderItems] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortKey, setSortKey] = useState<keyof ProfileType>('profileId');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredProfiles = filterBySearchTerm(profiles, searchTerm, headerItems);

    const [page, setPage] = useState(1);
    let { slice, range } = useTable(filteredProfiles, page, 2);

    const toggleSortHandler = (key: any) => {
        setSortKey(key);
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
        console.log('sort');
    };
    const sortedAndPaginatedProfiles = sortAndPaginate(slice, sortKey, sortOrder);

    useEffect(() => {
        if (accountId) {
            let fetchedProfiles = findProfiles(+accountId);
            if (fetchedProfiles) {
                setProfiles(fetchedProfiles);
                setHeaderItems(Object.keys(fetchedProfiles[0]));
            }
        }
    }, []);

    return (
        <main className="px-[100px] flex h-[100vh] flex-col pt-[150px] items-center gap-[40px]">
            <TableTitle tablename="Profiles" />
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
            {sortedAndPaginatedProfiles.length !== 0 && (
                <>
                    <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
                        <thead>
                            <tr className="bg-gray-200">
                                {headerItems &&
                                    headerItems.map((header: string) => {
                                        const typeKey: keyof ProfileType =
                                            header as keyof ProfileType;
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
                            {sortedAndPaginatedProfiles.map((profile: ProfileType) => (
                                <tr
                                    className="border-b text-center hover:cursor-pointer hover:bg-[#ededed]"
                                    onClick={() =>
                                        navigate(
                                            `/accounts/${profile.accountId}/profiles/${profile.profileId}/campaigns`,
                                        )
                                    }>
                                    <td className="py-2 px-4 max-w-[100px] overflow-hidden">
                                        {profile.profileId}
                                    </td>
                                    <td className="py-2 px-4 max-w-[100px] overflow-hidden">
                                        {profile.accountId}
                                    </td>
                                    <td className="py-2 px-4 max-w-[100px] overflow-hidden">
                                        {profile.country}
                                    </td>
                                    <td className="py-2 px-4 max-w-[100px] overflow-hidden">
                                        {profile.marketplace}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <TableFooter
                        range={range}
                        slice={sortedAndPaginatedProfiles}
                        setPage={setPage}
                        page={page}
                    />
                </>
            )}
            {sortedAndPaginatedProfiles.length === 0 && <NoItems />}
        </main>
    );
};

export default Profiles;
