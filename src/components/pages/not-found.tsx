import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <main className="w-full h-[100vh] flex flex-col justify-center items-center gap-6">
            <h1 className="text-[65px] font-[700] text-lime-600">4o4</h1>
            <p className="text-[12px] text-slate-500">
                Ooops, sorry but this page doesn`t exist, you can return to Accounts...
            </p>
            <button
                className="px-3 py-1 bg-lime-600 text-[#fff] border-none rounded-[8px] font-[600] hover:bg-lime-500"
                onClick={() => navigate('/accounts')}>
                Accounts
            </button>
        </main>
    );
};

export default NotFound;
