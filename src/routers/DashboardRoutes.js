import {
    Routes,
    Route
} from 'react-router-dom';

import { DcScreen } from '../Components/dcComics/DcScreen';
import { HeroScreen } from '../Components/hero/HeroScreen';
import { MarvelScreen } from '../Components/marvel/MarvelScreen';
import { SearchScreen } from '../Components/search/SearchScreen';
import { Navar } from '../Components/ui/Navar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navar />
            <div className='container'>
                <Routes>
                    <Route path='dc' element={<DcScreen />} />
                    <Route path='marvel' element={<MarvelScreen />} />
                    <Route path='search' element={<SearchScreen />} />
                    <Route path='hero/:heroId' element={<HeroScreen />} />
                    <Route path='/' element={<MarvelScreen />} />
                </Routes>
            </div>

        </>
    );
};
