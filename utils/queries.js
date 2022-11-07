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

module.exports = {getSkillContentQuery, getAboutContentQuery, getHomeContentQuery, getTimeline, getFooter, getAcard, getCertify, getProject}