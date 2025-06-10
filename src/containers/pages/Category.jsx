import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import CategoriesHeader from "components/blog/CategoriesHeader";
import BlogList from "components/blog/BlogList";
import { get_categories } from "../../redux/actions/categories/categories";
import categories from "../../redux/reducers/categories";
import { connect } from "react-redux";
import { get_blog_list_category,  get_blog_list_category_page } from "..//..//redux/actions/blog/blog";
import { useParams } from "react-router-dom";

function Category(props) {
    const {get_categories, categories, get_blog_list_category_page, get_blog_list_category, posts, count , next, previous} = props

    const params = useParams()
    const slug = params.slug

    useEffect(() => {
        window.scrollTo(0, 0)
        get_categories()
        get_blog_list_category(slug)
    }, [get_categories, get_blog_list_category])

    return (
        <Layout>
            <Helmet>
               <title>AlejGCH | Category: {slug}</title>
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
                <CategoriesHeader categories={categories&&categories}/>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                    <div className="mx-auto max-w-6xl my-10">
                        <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_category_page} count={count&&count}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )

}
const mapStateToProps = state =>({
   categories: state.categories.categories,
   posts: state.blog.blog_list_category,
   count: state.blog.count,
   next: state.blog.next,
   previous: state.blog.previous,


})
export default connect(mapStateToProps,{
  get_categories, get_blog_list_category, get_blog_list_category_page
})(Category)