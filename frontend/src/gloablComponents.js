import fgInput from './components/UIComponents/Inputs/formGroupInput.vue'
import DropDown from './components/UIComponents/Dropdown.vue'
import Checkbox from './components/UIComponents/Inputs/Checkbox.vue'
import Radio from './components/UIComponents/Inputs/Radio.vue'

// element-ui components
import {Tag, Progress, TableColumn, Table, Select, Option, Row, Col} from 'element-ui'
import {VueTabs, VTab} from 'vue-nav-tabs'
// import Progress from 'element-ui'
// import {Table, TableColumn} from 'element-ui'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 * Ideally, only small components that are re-used many times across your application should be registered here.
 * For plugins and bigger components local registration is preferable because it will allow you to do code splitting easier :)
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component(fgInput.name, fgInput)
    Vue.component(DropDown.name, DropDown)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Radio.name, Radio)

    // register element-ui components
    Vue.component(Tag.name, Tag)
    Vue.component(Progress.name, Progress)
    Vue.component(Table.name, Table)
    Vue.component(TableColumn.name, TableColumn)
    Vue.component(Select.name, Select)
    Vue.component(Option.name, Option)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)

    Vue.component(VueTabs.name, VueTabs)
    Vue.component(VTab.name, VTab)
  }
}

export default GlobalComponents
