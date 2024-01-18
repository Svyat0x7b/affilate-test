import { Routes, Route, Navigate } from 'react-router-dom';
import { Accounts, Campaigns, Profiles, NotFound } from './components/pages';
function App() {
    return (
        <Routes>
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/accounts/:accountId/profiles" element={<Profiles />} />
            <Route
                path="/accounts/:accountId/profiles/:profileId/campaigns"
                element={<Campaigns />}
            />
            <Route path="/" element={<Navigate to="/accounts" />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
