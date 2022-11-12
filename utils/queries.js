const getSkillContentQuery = `
    *[_type == "technology"]{
        _id,
        name,
        skillimg,
        color
    }
`
const getAboutContentQuery = `
    *[_type == "about"][0]{
        _id,
        head,
        para,
        img,
        info,
        result
    }
`
const getHomeContentQuery = `
    *[_type=="home"][0]{
        name,
        desc,
        img
    }
`

const getTimeline = `
*[_type=="timeline"] | order(order desc)
`

const getFooter = `
    *[_type=="footer"][0]{
        para,
        address,
        phone
    }
`
const getAcard = `
    *[_type=="work"]{
        name,
        logo,
        desc,
        year
    }
`
const getCertify = `
    *[_type=="certificate"]{
        name,
        logo,
        desc
    }
`

const getProject = `
    *[_type=="project"]{
        name,
        desc,
        img,
        link
    }
`

const getBlogsCard = `
    *[_type=="blog"]{
        title,
        desc,
        img,
        year,
        month,
        slug
    }
`

const getProgress = `
    *[_type=="progress"]{
        name,
        percent
    }
`

const getPosts = `
    *[_type=="blog"]{
        _id,
        slug {
            current
        }
    }
`

const getCurrentPost = `
    *[_type=="blog" && slug.current == $slug][0]{
        _id,
        title,
        publishedAt,
        content,
        'comments': *[
            _type == "comment" &&
            blog.ref == ^._id &&
            approved == true
        ],
        date
    }
`
module.exports = {getSkillContentQuery, getPosts, getCurrentPost, getBlogsCard, getAboutContentQuery, getHomeContentQuery, getTimeline, getFooter, getAcard, getCertify, getProject, getProgress}