
import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navbar'

const Layout = ({ Children }) => {
    return (
        <>
            <Meta />
            <Navbar />
            <main>
                {Children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
