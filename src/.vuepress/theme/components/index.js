import VApp from 'vuetify/es5/components/VApp'
import Vuetify from 'vuetify/es5/components/Vuetify'
import VGrid from 'vuetify/es5/components/VGrid'
import VToolBar from 'vuetify/es5/components/VToolBar'
import VNavDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VTabs from 'vuetify/es5/components/VTabs'
import VMenu from 'vuetify/es5/components/VMenu'
import VList from 'vuetify/es5/components/VList'
import VPagination from 'vuetify/es5/components/VPagination'
import VSubheader from 'vuetify/es5/components/VSubheader'
import VParallax from 'vuetify/es5/components/VParallax'
import VButton from 'vuetify/es5/components/VBtn'
import VCard from 'vuetify/es5/components/VCard'
import VAvatar from 'vuetify/es5/components/VAvatar'
import VChip from 'vuetify/es5/components/VChip'
import VSnackbar from 'vuetify/es5/components/VSnackbar'
import directives from 'vuetify/es5/directives'


const install = (Vue, theme) => {
    Vue.use(Vuetify, {
        components: {
            VApp,
            VGrid,
            VToolBar,
            VNavDrawer,
            VTabs,
            VMenu,
            VList,
            VPagination,
            VSubheader,
            VParallax,
            VButton,
            VCard,
            VAvatar,
            VChip,
            VSnackbar,
        },
        directives,
        theme: theme.colors,
        // options: {
        // }
    })
}

export default { install }
