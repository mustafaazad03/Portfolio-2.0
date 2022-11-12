import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import skill from '../schemas/skill'
import about from './about'
import home from './home'
import timeline from './timeline'
import achivecard from './achivecard'
import achivecertificate from './achivecertificate'
import foot from './foot'
import projects from './projects'
import bcard from './bcard'
import newsletter from './newsletter'
import comnt from './comnt'
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    skill,about,home,timeline,achivecard,achivecertificate,foot,projects,bcard,newsletter,comnt
  ]),
})
