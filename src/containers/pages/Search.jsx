import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import CategoriesHeader from "components/blog/CategoriesHeader";
import BlogList from "components/blog/search/BlogList";
import { connect } from "react-redux";
import { search_blog_page, search_blog } from "..//..//redux/actions/blog/blog";
import { useParams } from "react-router-dom";
function Search(props) {
    const { posts, count , next, previous, search_blog, search_blog_page} = props

    const params = useParams()
    const term = params.term

    useEffect(() => {
        window.scrollTo(0, 0)
        search_blog(term)
    }, [term, search_blog, search_blog_page])

    return (
        <Layout>
            <Helmet>
               <title>AlejGCH | Blog</title>
                <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
                <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://alejgchsoft.com/" />
                <meta name="author" content='AlejGCH' />
                <meta name="publisher" content='AlejGCH' />

                {/* Social Media Tags */}
                <meta property="og:title" content='AlejGCH | Software Agency' />
                <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
                <meta property="og:url" content="https://alejgchsoft.com/" />
                <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

                <meta name="twitter:title" content='AlejGCH | Software Agency' />
                <meta
                    name="twitter:description"
                    content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
                />
                <meta name="twitter:image" content='.' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar />
            <div className="pt-24">
               <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                    <div className="mx-auto max-w-6xl my-10">
                        <BlogList posts={posts&&posts} get_blog_list_page={search_blog_page} term={term} count={count&&count} />
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )

}
const mapStateToProps = state =>({
   posts: state.blog.filtered_posts,
   count: state.blog.count,
   next: state.blog.next,
   previous: state.blog.previous,


})
export default connect(mapStateToProps,{
 search_blog,
 search_blog_page
})(Search)