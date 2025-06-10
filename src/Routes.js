import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/home';
import Blog from 'containers/pages/Blog';
import Cases from 'containers/pages/Cases';
import Services from 'containers/pages/Services';
import About from 'containers/pages/About';

import { AnimatePresence } from 'framer-motion'
import Category from 'containers/pages/Category';
import Search from 'containers/pages/Search';
import PostDetail from 'containers/pages/PostDetail';



function AnimatedRoutes() {

    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='*' element={<Error404 />} />
                {/* pantallas de inicio */}
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:slug' element={<PostDetail />} />
                <Route path='/search/:term' element={<Search />} />
                <Route path='/category/:slug' element={<Category />} />
                <Route path='/casos' element={<Cases />} />
                <Route path='/servicios' element={<Services />} />
                <Route path='/contacto' element={<About />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes;